import React from 'react'
import { graphql } from 'gatsby'

export const query =  graphql`
    query($id: String!){
        mdx(id: {eq: $id}){
            id
            frontmatter {
                title, date(formatString: "YYYY-MM-DD"), description
            }
            excerpt
        }
    }

`

const OgTemplate = ({data}) => {
    const node = data.mdx
    return (
        <div style={{margin: "3rem"}}>
            <style global>{`
                body {
                    background-color: #227;
                    color: white;
                }
            `
            }
            </style>
            <h1>{node.frontmatter.title}</h1>
            <h3>{node.frontmatter.date}</h3>
            <div>{node.description || node.excerpt } </div>
        </div>
    )
}

export default OgTemplate
