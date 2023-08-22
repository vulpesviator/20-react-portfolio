import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Container({currentPage, setCurrentPage}) {
    if (currentPage === "About") {
        return <About />;
    } 
    if (currentPage === "Contact") {
        return <Contact />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }

    return <Portfolio />;
}