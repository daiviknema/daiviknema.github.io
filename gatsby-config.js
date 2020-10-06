module.exports = {
  siteMetadata: {
    title: `Daivik Nema`,
    author: {
      name: `Daivik Nema`,
      summary: `who makes things work on his machine (most of the time)`,
      social: {
        instagram: {
          profileUrl: `https://www.instagram.com/code.or.die/`,
          username: `@code.or.die`
        },
        linkedin: {
          profileUrl: `https://in.linkedin.com/public-profile/in/daivik-nema-3bb44114a`,
          username: `Daivik Nema`
        },
        github: {
          profileUrl: `https://github.com/daiviknema`,
          username: `daiviknema`
        }
      },
    },
    description: ``,
    siteUrl: `https://daiviknema.github.io/`,
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
    // MDX support (Ie. adding JSX components to Markdown)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extenstions: [`.mdx`, `.md`],
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
        respectDNT: true,
      },
    },
    // `gatsby-plugin-feed`,
    {
      // Very cool plugin here!
      // Allows "Add to Home Page" functionality on mobile browsers
      // Ie. the ability to "install" the website and use it as if it were a natively installed app
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daivik's Personal Website`,
        short_name: `Daivik Nema`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo-final.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: "Raleway",
                variants: [
                  "100",
                  "200",
                  "300",
                  "400",
                  "500",
                  "600",
                  "700",
                  "800",
                  "900",
                ],
              },
              {
                family: `Montserrat`,
                variants: [`300`, `400`, `500`],
              },
              {
                family: `Oswald`,
                variants: [`300`, `400`, `500`]
              }
            ],
          },
        },
      },
    },
    // Smooth scrolling
    `gatsby-plugin-anchor-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
