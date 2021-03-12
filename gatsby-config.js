/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Ataru Kodaka Site',
    author: 'Ataru KODAKA',
    email: 'ataru.kodaka@gmail.com',
    description: 'THIS SITE IS ......WHATS THE FUNNY ?',
    siteUrl: 'https://atarukodaka.github.io',
    //siteUrl: 'https://cranky-williams-77ca16.netlify.app',
    //siteUrl: `http://localhost:8000/`,
    coverImage: '/images/top.png',
    social: {
      twitter: 'ataru_kodaka',
      github: 'atarukodaka',
    }  
  },
  plugins: [
	`gatsby-plugin-mdx`,
    {
      resolve: `gatsby-theme-aksite`,
      options: {
        contentPath: `content/posts`,

        directoryLabels: {
          "/workout": "ワークアウト",
          "/game": "ゲーム",
          "/game/kancolle": "艦これ",
          "/game/kancolle/event": "イベント",
          "/game/wot": "World of Tanks",
          "/game/umamusume": "ウマ娘",
          "/software": "ソフトウェア",
          "/software/gatsby": "Gatsby",
          "/software/middleman/susume": "Middlemanのすすめ",
          "/figureskating": "フィギュアスケート",
          "/figureskating/practise": "銀盤練習",
          "/hobby": "趣味"        
        }
      }
    }
  ],
}
