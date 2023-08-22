import React, { useState } from "react";
import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  const [currentPage, setCurrentPage] = useState("About");
  
  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Container currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
