module.exports = {
  siteMetadata: {
    title: `Adam J Murphy`,
    description: `My portfolio.`,
    author: `Adam J Murphy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam J Murphy`,
        short_name: `A J Murphy`,
        start_url: `/`,
        background_color: `#000025`,
        theme_color: `#000025`,
        display: `minimal-ui`,
        icon: `src/images/ajmurphy-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("autoprefixer"),
          require("precss"),
        ],
      },
    },
  ],
}
