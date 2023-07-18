import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import portfolioData from './lib/projectdata.js';

const App = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let mainContent;

if (currentPage === "about") {
    mainContent = <AboutMe />;
  } else if (currentPage === "contact") {
    mainContent = <Contact />;
  } else if (currentPage === "portfolio") {
    mainContent = <Portfolio data={portfolioData} />;
  } else if (currentPage === "resume") {
    mainContent = <Resume />;
  } else {
    mainContent = <Home />;
  }

  return (
    <div
      data-theme="dark"
      className="h-screen flex flex-col min-h-screen justify-center items-center bg-base-100"
    >
      <Header handlePageChange={handlePageChange} />
      <div className="bg-dark flex-grow w-screen px-10 m-10">{mainContent}</div>
      <Footer />
    </div>
  );
};

export default App;
