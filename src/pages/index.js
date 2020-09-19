import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const Card = styled.div`
  margin: 0 15px 0 15px;
  border: 1px solid #ececec;
  padding: 10px;
`


const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
`

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "happy-headshot.jpg"}) {
        childImageSharp {
          fixed(grayscale: false, width: 150, quality: 100, cropFocus: NORTH, height: 150) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <SEO title="Home" />
        <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Alex Jackson looks into the camera."
        />
        <div style={{marginTop: `1.666rem`}}>
          <h1>I'm Alex Jackson. I care about <u>people</u> and how they use technology.</h1>
          <h1>I'm on a journey to <span style={{ background: `linear-gradient(90deg, rgba(168,70,233,1) 0%, rgba(255,71,71,1) 50%, rgba(252,180,78,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>safeguard those who need help<span style={{ WebkitTextFillColor: `#efefef` }}>,</span> enable those without a voice<span style={{ WebkitTextFillColor: `#efefef` }}>, and </span>make life easier every day</span>.</h1>
          <h1>I'm here to learn and work toward a better future.</h1>
        </div>

      <CardGrid>
          <Card>
            <h2>Creations</h2>
            <ul>
              <li><Link style={{
                color: `#efefef`,
              }} to="https://www.gracebobber.com">
                My partner's website (pure HTML and CSS)
                </Link></li>
              <li><Link style={{
                color: `#efefef`,
              }} to="https://notes.ajax.computer">
                My public notes (Gatsby + React)
                </Link></li>
              <li><Link style={{
                color: `#efefef`,
              }}>
                This website (Gatsby + React)
                </Link></li>
              <li><Link style={{
                color: `#efefef`,
              }} to="https://www.notion.so/ajaxart/ALEX-JACKSON-3814fd291afa481089e564f4f327cdc7#e6f9a58790264ac28a8c717189e8939f">
                Graphic art of different shapes and sizes
                </Link></li>
            </ul>
          </Card>
    
          <Card>
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>git & GitHub</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Indesign</li>
              <li>Linux</li>
            </ul>
          </Card>
    
          <Card>
            <h2>Studying</h2>
            <ul>
              <li>Fluency with GNU coreutils</li>
              <li>Linux internals</li>
              <li>Threat modeling</li>
              <li>Javascript</li>
              <li>Gatsby</li>
              <li>React</li>
              <li>Nix and nix-env</li>
            </ul>
          </Card>
    
          <Card>
            <h2>Links</h2>
            <Link style={{
              color: `#efefef`
            }} to="https://github.com/beattheprose">
              <h4>Github</h4>
            </Link>
            <Link style={{
              color: `#efefef`
            }} to="https://www.alexjackson.net">
              <h4>Artistic Personal Website</h4>
            </Link>
            <Link style={{
              color: `#efefef`
            }} to="https://www.linkedin.com/in/alexjackson4/">
              <h4>LinkedIn</h4>
            </Link>
          </Card>
      </CardGrid>
    </Layout>
  )
}