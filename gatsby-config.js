/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Pizza",
    description: "Pizza",
    author: "PopeyeIT",
  },
  plugins: [`gatsby-plugin-sharp`, `gatsby-transformer-sharp`,   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `desp79amqrtq`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: '-IqGSNkMlmy8iVPrRpwG0d5oKXjbzhXimdiBk8rlhj0',
    },
  },],
}
