import React from 'react'
import Link from 'gatsby-link'
import SpeakersList from '../components/speakers/speakersList';
import ScheduleList from '../components/schedule/scheduleList';


const IndexPage = ({ data: { site, speakers } }) => {
    return (
        <div>
            <h1>Hi people</h1>
            <ScheduleList schedule={site.siteMetadata.schedule}/>
            {/*<SpeakersList speakers={speakers}/>*/}
            <Link to="/page-2/">Go to page 2</Link>
        </div>
    )
};

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
        site {
            siteMetadata {
                schedule {
                    start
                    end
                    title
                    speaker
                    description
                }
            }
        }
        speakers: allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, sourceInstanceName: {eq: "speakers"}}) {
            list: edges {
                speaker:node {
                    data:childMarkdownRemark {
                        frontmatter {
                            name
                            company
                            title
                            avatar {
                                src:childImageSharp{
                                    sizes(maxWidth: 190) {
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
