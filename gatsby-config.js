const navigation = require('./site-data/navigation/navigation');
const header = require('./site-data/header/headerConfig');

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        navigation,
        header
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-nprogress',
        "gatsby-plugin-core-js",
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-css-modules`,
        `gatsby-plugin-lodash`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `speakers`,
                path: `${__dirname}/site-data/speakers`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/site-data/images/`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/site-data`,
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
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        /*{
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            }
        }*/
    ],
    proxy: {
        prefix: "/api",
        url: "http://localhost:4002",
    },
};
