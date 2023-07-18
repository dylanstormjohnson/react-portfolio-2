import React from "react";
import resumeImage from "../assets/images/Resume.png";

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeImage;
    link.download = "Resume.png";
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Resume</h1>
      <img src={resumeImage} alt="Resume" className="h-80 w-64" />
      <a href={resumeImage} download="Resume.png">
        <button className="btn btn-ghost" onClick={downloadResume}>Download Resume</button>
      </a>
    </div>
  );
};

export default Resume;
