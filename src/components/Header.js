import React from "react";
import Navigation from "./Navigation";
import Logo from "../assets/logo.svg"

export default function Header({ currentPage, setCurrentPage }) {
    return (
        <header>
        <div class="logo">
            <img src={Logo} alt="Travis Hoffman Logo" />
            <h1>Travis Hoffman</h1>
        </div>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
    );
}