import React from "react";
import Avatar from "../../assets/travis.jpg";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
    return (
        <article id="about-me">
            <div className="image-container">
                <CardMedia
                    component="img"
                    className="color-img"
                    style={{
                        height: "auto",
                        width: "50%",
                        margin: "0 auto",
                        paddingTop: "20px",
                    }}
                    image={Avatar}
                    alt="About Me"
                />
            </div>
        <div class="bio">
            <h3>About me</h3>
            <p>Focused on building innovative and intuitive digital   applications for over twenty years, I
            love crafting better experiences that help solve complicated puzzles. Currently getting
            Volley up and running in a new sector by marrying optimized user interfaces to a smart
            racket sports trainer in a seamless union. When not closing stories on my boards, I enjoy
            experimenting in the kitchen and hiking with my faithful canine companion.</p>
        </div>
    </article>
    )
}