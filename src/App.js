import React from "react";
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";



function App() {
  const [currentPage, setCurrentPage] = useState("About");
  
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
    </div>
  );
}

export default App;
