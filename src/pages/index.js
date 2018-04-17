import React from 'react'
import Link from 'gatsby-link'
import SpeakersList from '../components/speakers/speakersList';
import ScheduleList from '../components/schedule/SimpleSchedule';
import SponsorsList from '../components/sponsors/sponsorsList';

const IndexPage = ({ data: { site, speakers, schedule, sponsors } }) => {
    return (
        <div>
            <h1>Hi people</h1>
            
            <ScheduleList schedule={schedule}/>
            <SpeakersList speakers={speakers}/>
            <SponsorsList sponsors={sponsors}/>

        </div>
    )
};

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
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
        schedule: allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}, dir: {regex: "/site-data\/schedule/"}}) {
            list: edges {
                talk:node {
                    data:childMarkdownRemark {
                        frontmatter {
                            conferenceDay
                            start
                            end
                            speaker
                            talkName
                        }
                    }
                }
            }
        }
    }
`
