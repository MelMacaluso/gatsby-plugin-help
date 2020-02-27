import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

const Og = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const imageFluid = data.markdownRemark.frontmatter.image.childImageSharp.fixed.src
  const Wrapper = styled.div`
    padding: 1rem;
    width: 640px;
    position: relative;
    height: 320px;
    background-image: url(${imageFluid});
    background-size: cover;
    background-position: center center;
    &:before {
      content: "";
      background: rgb(0,0,0);
      background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.66) 13%, rgba(115,125,133,0) 50%, rgba(0,0,0,0.66) 83%, rgba(0,0,0,1) 100%);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10;
    }
  `
  const Img = styled.div`
    margin: 0 auto;
    height: 150px;
    width: 150px;
    background-image: url(${imageFluid});
    background-size: cover;
    background-position: center center;
    -webkit-box-shadow: 0px 0px 13px 15px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 13px 15px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 13px 15px rgba(0,0,0,0.33);
    display: block;
    position: relative;
    z-index:20;
  `
  const H1 = styled.h1`
    position: relative;
    z-index: 20;
    margin: 1rem auto;
    color: #fff !important;
    text-shadow: 0px 0px 6px #000;
    font-size: 1.5rem;
    max-width: 450px;
    text-align: center;
  `
  return (
    <Wrapper>
      <Img />
      <H1>{title}</H1>
      <style dangerouslySetInnerHTML={{__html: `body { margin: 0; }`}} />
    </Wrapper>
  )
}

export const og = graphql`
  query og($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 640) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default Og
