import React from "react";

const Header = ({ handlePageChange }) => {
  return (
    <header className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Storm's Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => handlePageChange("about")}>About Me</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("portfolio")}>Portfolio</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("contact")}>Contact</a>
          </li>
          <li>
            <a onClick={() => handlePageChange("resume")}>Resume</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
