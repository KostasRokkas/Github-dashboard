import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

const Navbar = ({ onFilterChange }) => {
  const [username, setUsername] = useState("");

  // Handle filter changes
  const handleFilterChange = () => {
    onFilterChange({ username });
  };

  return (
    <div className={classes.Navbar}>
      <div className={classes.filters}>
        <div className={classes.inputGroup}>
          <label>UserName</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            setUsername("");
          }}
        >
          <strong>Reset</strong>
        </button>
        <div className={classes.button}>
          <button onClick={handleFilterChange}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Navbar;
