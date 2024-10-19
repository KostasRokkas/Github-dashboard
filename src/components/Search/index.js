import React, { useState } from "react";
import classes from "./index.module.css";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
      setUsername("");
    } else {
      return;
    }
  };

  return (
    <div className={classes.Search}>
      <form onSubmit={handleSubmit}>
        <div className={classes.inputSearch}>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="Enter GitHub username"
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
