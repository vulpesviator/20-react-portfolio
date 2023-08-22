import React from "react";
import Grid from "@mui/material/Grid";
import { LinkedIn, GitHub, Twitter, Email } from "@mui/icons-material";

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
            <LinkedIn
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/in/travdoeswhat/")
              }
            />
            <GitHub
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "https://github.com/vulpesviator")
              }
            />
            <Twitter
              id="icon"
              className="pop-on-hover"
              sx={{ fontSize: 50 }}
              onClick={(event) =>
                (window.location.href = "https://twitter.com/travdoeswhat")
              }
            />
            <Email
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
