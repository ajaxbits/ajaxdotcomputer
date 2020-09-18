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

const Headshot = styled.div`
  max-width: 400px;
  margin: auto;
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "happy-headshot.jpg"}) {
        childImageSharp {
          fluid(grayscale: true, maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <SEO title="Home" />
      <Headshot>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Alex Jackson looks into the camera."
        />
      </Headshot>
      <div>
        <p>Hi,</p>
        <h1>I'm Alex Jackson, and I care about people and how they use technology. I'm on a journey to <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>safeguard those who need help</span>, <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>enable those without a voice</span>, and <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>make your life easier every day</span>.</h1>
        <h1>I'm here to learn.</h1>
      </div>

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

      </Card>


      <h2 id="#portfolio">Check my stuff out</h2>
      <Link style={{
        color: `#efefef`
      }} to="https://www.gracebobber.com">Pure HTML and CSS Website for my partner</Link>
      <h2 id="#skills">Skills</h2>

      <h3>Things I'm Learning</h3>
      <ul>
        <li>Javascript</li>
        <li>
          Svelte/Sapper
        <a href="https://github.com/beattheprose/ajaxdotcomputer">
            <em>(this website!)</em>
          </a>
        </li>
        <li>React</li>
      </ul>
      <h3>Next Steps</h3>
      <ul>
        <li>Tests</li>
        <li>Open source contributions</li>
        <li>Typescript</li>
        <li>Nix-env</li>
      </ul>
    </Layout>
  )
}