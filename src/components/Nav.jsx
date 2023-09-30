import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleAbout = () => {
    navigate("/about");
  };
  const handleProjects = () => {
    navigate("/Projects")
  };

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="flex">
              <button
                onClick={handleHome}
                type="submit"
                className="m-2 text-white right-2.5 bg-amber-600 hover:bg-orange-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                Home
              </button>
              <button
                onClick={handleAbout}
                type="submit"
                className="m-2 text-white right-2.5 bg-amber-600 hover:bg-orange-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                About Me
              </button>
              <button
                onClick={handleProjects}
                type="submit"
                className="m-2 text-white right-2.5 bg-amber-600 hover:bg-orange-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                Projects and Experience
              </button>
      </div>
    </nav>
  );
};

export default Nav;
