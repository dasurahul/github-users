import React, { useState } from "react";
import "./Search.css";
const Search = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(search);
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();
      console.log(data);
    };
    fetchData();
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" onChange={searchHandler} />
      <input className="search-btn" type="submit" value="Search" />
    </form>
  );
};

export default Search;
