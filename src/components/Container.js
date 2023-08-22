import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

export default function Container({currentPage}) {
    if (currentPage === "About") {
        return <About />
    }

    return <Portfolio />
}