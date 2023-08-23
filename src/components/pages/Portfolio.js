import React from "react";
import { works } from "../Work";
import '../../styles/Portfolio.css';


export function Project({ work }) {
    const projectStyles = {
      background: `url(${work.imageUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top",
      display: "block",
      width: "100%",
      minHeight: 500,
      margin: 0,
    }

    const projectLinkStyles = {
      display: "block",
      width: "100%",
      height: "100%",
    }
  
    return (
      <>
        <article id="project">
          <div class="description">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <a
              href="{work.git}"
              target="_blank"
            >Git Repo</a>
          </div>
          <div style={projectStyles}>
            <a
              href="{work.deploy}"
              target="_blank"
              style={projectLinkStyles}
            ></a>
          </div>
        </article>

      </>
    );
}

export default function Portfolio() {
    return (
      <>
      <div id="works">
        {works.map((work, index) => (
            <Project work={work} key={index} />
          ))}
      </div>
      </>
    );
}