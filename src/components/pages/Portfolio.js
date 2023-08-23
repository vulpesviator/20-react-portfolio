import React, { useState } from "react";
import { Grid, Card, Button, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { works } from "../Work";

export function Project({ work }) {
    return (
        <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "floralwhite" }}>
        <CardMedia
          component="img"
          alt="displayed projects with associated links"
          height="140"
          image={work.imageLink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {work.projectTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {work.description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={work.liveLink}
            size="small"
          >
            Live URL
          </Button>
          <Button
            id="portfolio-button"
            className="pop-on-hover"
            href={work.gitHub}
            size="small"
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </Grid>
    );
}

export default function Portfolio() {
    return (
        <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Portfolio</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
        {works.map((work, index) => (
          <Project work={work} key={index} />
        ))}
      </Grid>
    </div>
    )
}