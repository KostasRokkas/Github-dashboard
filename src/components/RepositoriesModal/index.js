import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";
import FullDescriptionModal from "./FullDescriptionModal";
import Navbar from "./Navbar";

const RepositoriesModal = ({ data, onClose }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [showFullDescriptionModal, setShowFullDescriptionModal] =
    useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const [usernameFilter, setUsernameFilter] = useState("");
  const [starsFilter, setStarsFilter] = useState("");

  // Sort data based on the current sort order
  const sortedData = [...data].sort((a, b) => {
    return sortOrder === "asc"
      ? (a.stargazers_count || 0) - (b.stargazers_count || 0)
      : (b.stargazers_count || 0) - (a.stargazers_count || 0);
  });

  // Filter data based on the username input and stars input
  const filteredData = sortedData.filter((repo) => {
    const matchesName = repo.full_name
      .toLowerCase()
      .includes(usernameFilter.toLowerCase());
    const matchesStars = starsFilter
      ? (repo.stargazers_count || 0) >= parseInt(starsFilter, 10)
      : true;
    return matchesName && matchesStars;
  });

  // Handle sort order change from dropdown
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Handle filter change from Navbar
  const handleFilterChange = (filters) => {
    setUsernameFilter(filters.username);
    setStarsFilter(filters.stars);
  };

  // Truncate description if it's too long
  const truncateDescription = (description, length) => {
    if (!description) return "N/A";
    if (description.length > length) {
      return description.substring(0, length) + "...";
    }
    return description;
  };

  return (
    <div className={classes.RepositoriesModal}>
      <div className={classes.modalCard}>
        <div className={classes.modalCardHeader}>
          <span>Repositories Info</span>
        </div>
        <div className={classes.navbar}>
          <Navbar onFilterChange={handleFilterChange} />{" "}
        </div>
        <div className={classes.firstRow}>
          <div className={classes.sort}>
            <label htmlFor="sortOrder">Sort by Stars:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className={classes.sort}>
            <p>Total Repositories: {filteredData.length}</p>
          </div>
        </div>
        <div className={classes.modalCardBody}>
          <div className={classes.cardContainer}>
            {filteredData.length > 0 ? (
              filteredData.map((repo) => {
                const isDescriptionTooLong =
                  repo.description && repo.description.length > 50;

                return (
                  <div key={repo.id} className={classes.card}>
                    <h3 className={classes.cardTitle}>
                      {repo.full_name || "N/A"}
                    </h3>
                    <p className={classes.cardDescription}>
                      {truncateDescription(repo.description, 50)}
                    </p>
                    {isDescriptionTooLong && (
                      <div className={classes.descriptionContainer}>
                        <button
                          className={classes.readMoreButton}
                          onClick={() => {
                            setCurrentDescription(repo.description);
                            setShowFullDescriptionModal(true);
                          }}
                        >
                          Read More
                        </button>
                      </div>
                    )}
                    <p className={classes.stars}>
                      <strong>Stars:</strong> {repo.stargazers_count || 0}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className={classes.noData}>No repository info available</div>
            )}
          </div>
        </div>
        <div className={classes.modalCardActions}>
          <button className={classes.Button} onClick={onClose}>
            <strong>Close</strong>
          </button>
        </div>
      </div>

      {showFullDescriptionModal && (
        <FullDescriptionModal
          description={currentDescription}
          onClose={() => setShowFullDescriptionModal(false)}
        />
      )}
    </div>
  );
};

RepositoriesModal.propTypes = {
  data: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RepositoriesModal;
