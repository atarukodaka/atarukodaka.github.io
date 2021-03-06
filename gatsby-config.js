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
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-theme-aksite`,
      options: {
        contentPath: `content/posts`,
        //basePath: '/blog',
        defaultLang: 'ja',
        enableOgImages: true,
        siteImage: '/og-images/site/cover.png',
        directoryLabels: [
          { directory: "workout", label: "ワークアウト" },
          { directory: "game", label: "ゲーム" },
          { directory: "game/kancolle", label: "艦これ" },
          { directory: "game/kancolle/event", label: "イベント" },
          { directory: "game/wot", label: "WOT" },
          { directory: "game/umamusume", label: "ウマ娘" },
          { directory: "software", label: "ソフトウェア" },
          { directory: "software/gatsby", label: "Gatsby" },
          { directory: "figureskating", label: "フィギュアスケート" },
          { directory: "figureskating/practise", label: "銀盤練習" },
          { directory: "culture", label: "カルチャー" },
          { directory: "hobby", label: "趣味" }
        ]
      }
    },
    `gatsby-transformer-yaml`,        
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `content/data/`,
        },
    },
    /*
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ataru Kodaka Site',
        short_name: 'AKS',
        start_url: '/',
        theme_color: '#222277',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/icons/favicon.png'
        
      },
    },
    `gatsby-plugin-offline`,
    */
  ],
}
