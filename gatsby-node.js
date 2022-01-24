exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      makes: allSanityMake {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const makes = result.data.makes.edges || []

  makes.forEach(edge => {
    const makePath = `/make/${edge.node.id}`

    createPage({
      path: makePath,
      component: require.resolve("./src/templates/make.js"),
      context: { id: edge.node.id },
    })
  })
}
