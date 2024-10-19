import { useState } from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

const Navbar = ({ onFilterChange }) => {
  const [username, setUsername] = useState("");
  const [stars, setStars] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ username, stars });
  };

  return (
    <div className={classes.Navbar}>
      <div className={classes.filters}>
        <div className={classes.inputGroup}>
          <label>Repo Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter repository name"
          />
        </div>
        <div className={classes.inputGroup}>
          <label>Minimum Stars</label>
          <input
            type="number"
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            placeholder="Enter minimum stars"
          />
        </div>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            setUsername("");
            setStars("");
          }}
        >
          <strong>Reset</strong>
        </button>
        <div className={classes.button}>
          <button className={classes.Button} onClick={handleFilterChange}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Navbar;
