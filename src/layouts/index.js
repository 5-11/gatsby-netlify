import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Main from './components/main/main';

import 'milligram';
import './assets/icons/style.css';

const Layout = ({children, data}) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {name: 'description', content: 'Sample'},
                {name: 'keywords', content: 'sample, something'},
            ]}
        />

        <Header
            logo={data.logo}
            siteTitle={data.site.siteMetadata.title}
            config={data.site.siteMetadata.header}
        />

        <Main>
            {children()}
        </Main>
        <Footer links={data.footer.data}/>
    </div>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
                navigation {
                    label
                    url
                }
                header {
                    backgroundColor
                }
            }
        }
        logo: file(id: {regex: "/logo/"}) {
            image: childImageSharp {
                resolutions(width: 125, height: 125) {
                    ...GatsbyImageSharpResolutions
                }
            }
        }
        footer: allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, dir: {regex: "/site-data\/footer\/links/"}}) {
            data: edges {
                link:node {
                    data:childMarkdownRemark {
                        frontmatter {
                            position
                            label
                            url
                            iconClass
                            logo {
                                src:childImageSharp{
                                    sizes(maxWidth: 60) {
                                        ...GatsbyImageSharpSizes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
