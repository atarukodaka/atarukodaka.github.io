
const { createOgPage, createOgSitePage } = require('gatsby-plugin-aks-og-images')

exports.createPages = async ( {actions, graphql}) => {
    const { data } = await graphql(`
    { 
        allMdx (filter: {frontmatter: {draft: {ne: true} }}){
            nodes { 
                id
            }
        }
        
    }
    `)
    data.allMdx.nodes.forEach(node=> {
        createOgPage( { actions, id: node.id })
    })
    createOgSitePage( { actions } )

}
