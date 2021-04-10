---
title: puppeeter でOGP画像を自動生成
date: 2021-04-03
---

## やること

こういうの：

<LinkExternal url="https://kyabe.net/blog/gatsby-auto-generate-ogp-image/"/>
<LinkExternal url="https://blog.kentarom.com/create-gatsbyjs-plugin-to-dynamically-generate-og-images/"/>

だがこれらの方法だとフォント入れなきゃだったり、サイズオーバーするとエラーでたりなので、この方法ではなく、

- 各ページのタイトルなどを表示させるOGP用ページを実際に createPage する
- puppeeter でスクショを取り、画像に落とす
- SEO タグでそれを参照する

という流れでいく。

## Puppeteer のインストール
sudo apt install puppeeter だけだといろいろライブラリがないと怒られたので、前提ツールと日本語フォントもいれとく

```sh
sudo apt install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget  libgbm
sudo apt install puppeteer
sudo apt-get install fonts-ipafont-gothic fonts-ipafont-mincho
```

WSL+ubunto20.04 でやったら X が入ってないと固まっちゃったので VcXsrv をいれとく。

## gatsby-node で lifecycle に乗せる
### createPages で OGP用ページを作成

```js:title=gatsby-node.js
const ogPages = []
exports.createPages = async ({ graphql, actions }) => {
    const data = graphql(`{ allMdx { nodes { fields { slug } } } }`)
    const { createPage } = actions
    const ogTemplate = `./src/templates/og-template.js`

    data.allMdx.nodes.forEach(node => {
      const ogPath = path.join('ogPages', node.fields.slug)
      createPage({
          path: ogPath,
          component: require.resolve(ogTemplate),
          context: {
              slug: node.fields.slug,
          }
      })
      ogPages.push(ogPath)    
    })
    ...
}
```

template はこんな感じに：デザインはお好きに。

```js:title=src/templates/og-template.js
import React from 'react'

export const post_query = graphql`
    query ($slug: String!) {
      mdx(fields: { slug: { eq: $slug }}){
        frontmatter {
            title, date, description, excerpt
        }
      }
    }
`

export default function OgTemplate({ data, pageContext }) {
    const node = data.mdx

    return (
        <div >
            <div>{node.frontmatter.date}</div>
            <h1>{node.frontmatter.title}</h1>
            <div>{node.frontmatter.description || node.excerpt}</div>
        </div>
    )
}
```
これで、build すると public/ogPages/{slug}/ に背景にタイトル、日付、概要などのみ書かれたOGP用ページが生成される。

### build後にスクショを保存

onPostBuild で生成した ogpages を puppetter でアクセスし、スクショを public/ogPages/{slug}/cover.png に保存していく。

```js:title=gatsby-node.js
exports.onPostBuild = async ( { _ }) => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    page.setViewport({width: 600, height: 315})

    for (const ogPath of ogPages){
        const ogFileUrl = fileUrl(path.join('public', ogPath, 'index.html'))
        const ogImageFile = path.join('public', ogPath, 'cover.png')
        mkdirp(path.join('public', ogPath))
        await page.goto(ogFileUrl, { 'waitUntil' : 'domcontentloaded'})
        await page.screenshot({path: ogImageFile})            
    }
    await browser.close
}
```

### SEOタグで参照

SEOの書き方に合わせて適宜変更：

```js:title=src/components/SEO.js
...
const SEO = ( { title, description, cover, lang  } ) => {
    ...
    const { pathname } = useLocation()
    var urljoin = require('url-join')
    ...
    const imageUrl = urljoin(siteUrl, path.join('ogPages', pathname, 'cover.png')
    ...

    return (
        <Helment
            ....
            meta={[
                { name: 'image', content: imageUrl },
                ...
                { property: 'og:image', content: imageUrl },
                ...
            ]}
        />
    )
}
```

で、こんなかんじに：

<LinkExternal url="https://atarukodaka.github.io/software/gatsby/ogp-images/"/>


プラグイン化してみた：
<LinkExternal url="https://github.com/atarukodaka/gatsby-plugin-aksite-og-images/"/>

## 参考github
### @akr54
<LinkExternal url="https://github.com/akr4/gatsby-plugin-og-image"/>

puppeeter使ってスクショ。ただog用page作成はHTML文字列に当てはめる形(renderOgImage)。
ここのところは template を使いたい。

onPreInit で queueを用意しておき、onCreatePageで og用ページを createPageし、
スクショ取りキューにプッシュ。

### @MelMacalus
<LinkExternal url="https://github.com/MelMacaluso/gatsby-plugin-og-images"/>

allMarkdown 決め打ちなので mdx だとそのままは使えない。createPages 内で
graphql でnodesごとogページをcreateし、onPostBuild でpuppeeter でスクショ。


### @squer-solutions
<LinkExternal url="https://github.com/squer-solutions/gatsby-plugin-open-graph-images"/>
