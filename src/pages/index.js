import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      hey,
      <br />
      I'm Alex Jackson
    </h1>

    <p>I'm a junior web developer centered in Chicago.</p>

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

export default IndexPage
