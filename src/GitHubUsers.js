import React, { useState, useEffect } from "react";
import GitHubUser from "./GitHubUser";
import Loading from "./Loading";
import Search from "./Search";
import "./GitHubUsers.css";

const GitHubUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";
  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "1.5rem 0",
          letterSpacing: "2px",
        }}
      >
        GitHub Users
      </h1>
      <Search />
      <div className="user-profiles-container">
        {users.map((user) => {
          return (
            <GitHubUser key={user.id} img={user.avatar_url} name={user.login} />
          );
        })}
      </div>
    </div>
  );
};

export default GitHubUsers;
