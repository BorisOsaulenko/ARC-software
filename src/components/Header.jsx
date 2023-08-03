import React from "react";
import { getName, getPictureUrl } from "../utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div
          class="btn-group-lg btn-group w-2/3"
          role="group"
          aria-label="Large button group"
        >
          <a href="/About" class="btn btn-primary" aria-current="page">
            About
          </a>
          <a href="/" class="btn btn-primary">
            Articles
          </a>
          <a href="/statistics" class="btn btn-primary">
            Statisics
          </a>
          <a href="/friends" class="btn btn-primary">
            Friends
          </a>
        </div>

        <div className="flex items-center w-3/12 justify-between">
          <span
            className="text-2xl font-bold bg-gradient-to-tl to-purple-400 from-pink-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/settings")}
          >
            {getName()}
          </span>
          <img
            src={getPictureUrl()}
            alt="your avatar"
            className="w-1/4 rounded cursor-pointer"
            onClick={() => navigate("/settings")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
