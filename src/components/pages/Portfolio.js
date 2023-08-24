import React from "react";
import { Box, Button, Typography } from "@mui/material";
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
      <Box id="project">
      <div className="description">
        <Typography variant="h2">{work.title}</Typography>
        <Typography variant="body1">{work.description}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(work.git, "_blank")}
        >
          Git Repo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => window.open(work.deployUrl, "_blank")}
        >
          Live Demo
        </Button>
      </div>
      <div style={projectStyles}>
        <a href={work.deployUrl} target="_blank" style={projectLinkStyles}></a>
      </div>
    </Box>
    );
}

export default function Portfolio() {
    return (
      <div id="works">
      {works.map((work, index) => (
        <Project work={work} key={index} />
      ))}
    </div>
    );
}