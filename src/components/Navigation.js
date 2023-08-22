import React from "react";

export default function Navigation(currentPage, setCurrentPage) {
    return (
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              id="nav-link"
              onClick={() => setCurrentPage("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              id="nav-link"
              onClick={() => setCurrentPage("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              id="nav-link"
              onClick={() => setCurrentPage("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              id="nav-link"
              onClick={() => setCurrentPage("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    );
}