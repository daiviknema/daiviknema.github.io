module.exports = {
  siteMetadata: {
    title: `It works on my machine!`,
    author: {
      name: `Daivik Nema`,
      summary: `who makes things work on his machine (most of the time)`,
    },
    description: ``,
    siteUrl: `https://daiviknema.github.io/`,
    // social: {
    //   twitter: `kylemathews`,
    // },
  },
  plugins: [
    {
      // Source plugin to bring in markdown files from the filesystem
      // Generates allFile and file nodes
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      // Source plugin to bring in asset files from the filesystem
      // Generates allFile and file nodes
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      // Transformer plugin to convert markdown files into html
      // Generates allMarkDownRemark and markdownRemark nodes
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    // The following plugins are for bringing in and working with images on the site
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108266223-2`,
        head: true,
        anonymize: true,
        respectDNT: true
      },
    },
    // `gatsby-plugin-feed`,
    {
      // Very cool plugin here!
      // Allows "Add to Home Page" functionality on mobile browsers
      // Ie. the ability to "install" the website and use it as if it were a natively installed app
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daivik's Personal Home Page`,
        short_name: `Daivik Home`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // This plugin provides typography. We will use Material UIs typography
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-theme-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
