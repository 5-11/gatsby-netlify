import React from 'react';
import { Link } from "../../../components/link";

const Footer = ({ links, config: { styles = {}, ...config } }) => {
    return (
        <footer className="footer" style={{...styles}}>
            {config.navigationLinks &&
                <div className="container">
                    {config.navigationLinks.map(({label, url, iconClass}, index) => (
                        <div key={index} className="content has-text-centered">
                            <p>
                                <Link href={url}>
                                    {iconClass && <span className={iconClass}/>}
                                    {label}
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
            }
        </footer>
    );
};

/*export const hfConfigFragmentQuery = graphql`
    fragment hgConfig on RootQueryType {
        footerConfig: configsJson(id: {regex: "/footerConfig.json/"}) {
            backgroundColor
            navigationLinks {
                navigation {
                    label
                    url
                    iconClass
                    image {
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
`;*/

export default Footer;