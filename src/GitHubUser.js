import React from "react";
import "./GitHubUser.css";

import { Link } from "react-router-dom";

const GitHubUser = ({ img, name }) => {
  return (
    <div className="user-profile-container">
      <img className="user-image" src={img} alt={name} />
      <div className="user-details">
        <h3 className="user-name">{name}</h3>
        <Link
          to={`/user/${name}`}
          style={{ color: "blue", textDecoration: "none" }}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

export default GitHubUser;
