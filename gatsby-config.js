/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "@mkitio/gatsby-theme-password-protect",
      options: {
        password: "Op3n_S3sam3",
        pagePaths: ["/FanDuel", "/FanDuel/"],
      },
    },
  ],
}
