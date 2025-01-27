import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid"> 
        <Link class="navbar-brand" href="#">
        MERN
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/create">
                Create Posts
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/all">
                All Posts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
