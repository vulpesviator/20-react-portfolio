import React from "react";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";



export default function Footer() {
  return (
    <article>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <Grid
          style={{ display: "flex", justifyContent: "center" }}
          container
          sx={{ color: "text.primary" }}
        >
          <Grid
            style={{ display: "flex", justifyContent: "space-evenly" }}
            item
            xs={4}
          >
            <LinkedInIcon
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/travdoeswhat/")
              }
            />
            <GitHubIcon
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "https://github.com/vulpesviator")
              }
            />
            <TwitterIcon
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "https://twitter.com/travdoeswhat")
              }
            />
            <EmailIcon
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "mailto:vulpesviator@gmail.com")
              }
            />
          </Grid>
        </Grid>
      </div>
    </article>
  );
}
