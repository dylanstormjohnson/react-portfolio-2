import React from "react";

const Portfolio = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <div className="flex space-x-2 mt-2">
              <a
                href={item.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200"
              >
                Website
              </a>
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
