import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Flex from "../components/flex"


export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "moody-headshot.jpg"}) {
        childImageSharp {
          fluid(duotone: {highlight: "#efefef", shadow: "#2a2a2a"}, maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{
        maxWidth: `200px`,
        margin: `auto`,
      }}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Alex Jackson looks into the camera."
        />
      </div>
      <p>Hi,</p>
      <h1>I'm Alex Jackson, and I care about people and how they use technology. I'm on a journey to <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>safeguard those who need help</span>, <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>enable those without a voice</span>, and <span style={{ background: `linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`, WebkitBackgroundClip: `text`, WebkitTextFillColor: `transparent`, }}>make your life easier every day</span>.</h1>

      <h1>I'm here to learn.</h1>
      <div style={{
        margin: `0 15px 0 15px`,
        border: `1px solid #ececec`,
        padding: `10px`
      }}>
        <h2>I'm looking to make the web a safer place for everyone.</h2>
        <p>I've always been very interested in security for everyone. How can we make the internet a safe place for us all?</p>
      </div>
      <div style={{
        margin: `0 15px 0 15px`,
        border: `1px solid #ececec`,
        padding: `10px`
      }}>
        <h2>The Interet should be accessible.</h2>
        <p>I've always been very interested in security for everyone. How can we make the internet a safe place for us all?</p>
      </div>


      <Link to="https://github.com/beattheprose">
        <p>Check out more at my GitHub</p>
      </Link>

      <h2 id="#portfolio">Check my stuff out</h2>
      <Link to="https://www.gracebobber.com">Pure HTML and CSS Website for my partner</Link>
      <h2 id="#skills">Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>git & GitHub</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Indesign</li>
        <li>Linux</li>
      </ul>

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