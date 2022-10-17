import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BackButton from "../components/BackButton"
import { Helmet } from "react-helmet"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | Jack Lee</title>
      </Helmet>
      <main className="float-in">
        <BackButton></BackButton>
        <h1 style={{marginTop:0}}>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        desc
      }
    }
  }
`