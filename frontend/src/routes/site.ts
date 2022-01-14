import type {EndpointOutput} from '@sveltejs/kit';
import {gql, GraphQLClient} from "graphql-request";

export async function get(): Promise<EndpointOutput> {
    const query = gql`
{
  site {
    data {
      attributes {
        pages {
          data {
            attributes {
              title
              content {
                __typename

                ... on ComponentPageLanding {
                  header
                  media {
                    data {
                      attributes {
                        mime
                        url
                        alternativeText
                      }
                    }
                  }
                }

                ... on ComponentPageParagraph {
                  title
                  body
                  important
                }

                ... on ComponentPageCode {
                  title
                  code
                }

                ... on ComponentPageBlog {
                  title
                  blog_entries {
                    data {
                      attributes {
                        title
                        publishedAt
                        body
                      }
                    }
                  }
                }

                ... on ComponentPageTimeline {
                  title
                  events {
                    data {
                      attributes {
                        title
                        date
                        description
                      }
                    }
                  }
                }

                ... on ComponentPageCustom {
                  html
                }

                ... on ComponentPageTeam {
                  title
                  team_members {
                    data {
                      attributes {
                        profile {
                          data {
                            attributes {
                              mime
                              url
                              alternativeText
                            }
                          }
                        }
                        name
                        email
                        characterization
                        link
                      }
                    }
                  }
                }
                
                ... on ComponentPageProjects {
                  title
                  projects {
                    data {
                      attributes {
                        image {
                          data {
                            attributes {
                              mime
                              url
                              alternativeText
                            }
                          }
                        }
                        title
                        description
                        link
                      }
                    }
                  }
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

    const graphql = new GraphQLClient('http://localhost:1337/graphql', {headers: {}});

    return {body: await graphql.request(query)};
}
