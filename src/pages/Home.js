import React from 'react'
import DocksImage from "../assets/images/Docks_v2.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-90%">
      {/* {<div>Home</div>} */}
      <div>
        <div className="flex-1 relative">
          <img
            src={DocksImage}
            alt="Docks"
            width="1000"
            height="400"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
              <p className="text-lg">
                “If a ship is strong, the ocean's tides do not bother it.”
                <br />― Matshona Dhliwayo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home