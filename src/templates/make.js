import React from "react"
import { graphql } from "gatsby"

// markup
const Make = ({ data }) => {
  return <h1>{data.sanityMake.name}</h1>
}

export default Make

export const query = graphql`
  query MyMake($id: String) {
    sanityMake(id: { eq: $id }) {
      id
      name
    }
  }
`
