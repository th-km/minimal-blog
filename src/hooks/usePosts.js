import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { featured: { eq: false } } }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            alt
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt(pruneLength: 90)
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    id: post.id,
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    alt: post.frontmatter.alt,
    excerpt: post.excerpt,
  }))
}

export default usePosts
