import React from "react";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
        <div class="logo">
            <div>
                <img src="/assets/logo.svg" alt="Travis Hoffman Logo" />
            </div>
            <h1>Travis Hoffman</h1>
        </div>
        <Navigation />
    </header>
    );
}