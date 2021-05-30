import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./User.css";

import { Link, useParams } from "react-router-dom";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.github.com/users`;
  const { username } = useParams();
  const [user, setUser] = useState();
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(
      data.find((user) => {
        return user.login === username;
      })
    );
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="user-container">
      <img className="userimage" src={user.avatar_url} alt={user.login} />
      <h2 className="username">{user.login}</h2>
      <a
        className="github-link"
        href={user.html_url}
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
      <Link to="/" className="btn">
        Back
      </Link>
    </div>
  );
};

export default User;
