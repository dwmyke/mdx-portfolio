module.exports = {
  siteMetadata: {
    title: `Mikel-Jon (Mike) West`,
    author: `Mikel-Jon West`,
    description: `Mikel-Jon West, Writer, Director, Video Editor, Visual Designer, Technical Developer`,
    siteUrl: `https://mikewest.pro/`,
    social: {
      twitter: ``,
      facebook: `thatmikewest`,
    },
  },
  plugins: [
      'gatsby-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
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
            resolve: `@raae/gatsby-remark-oembed`,           
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mike West Portfolio`,
        short_name: `mwest`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#0077cc`,
        display: `minimal-ui`,
        icon: `content/assets/profile.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
