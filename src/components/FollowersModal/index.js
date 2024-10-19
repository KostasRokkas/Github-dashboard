import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";
import Navbar from "./Navbar";

const FollowersModal = ({ data, onClose }) => {
  const [filter, setFilter] = useState({ username: "" });

  // Filter data based on the username input
  const filteredData = data.filter((follower) =>
    follower?.login?.toLowerCase().includes(filter?.username?.toLowerCase())
  );

  // Handle filter changes from Navbar
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className={classes.FollowersModal}>
      <div className={classes.modalCard}>
        <div className={classes.modalCardHeader}>
          <span>Followers Info</span>
        </div>
        <div className={classes.navbar}>
          <Navbar onFilterChange={handleFilterChange} />
        </div>
        <div className={classes.modalCardBody}>
          <p>Total Followers: {filteredData?.length}</p>
          <div className={classes.cardContainer}>
            {filteredData.length > 0 ? (
              filteredData.map((follower, index) => (
                <div key={follower.id} className={classes.card}>
                  <div className={classes.cardHeader}>General Info</div>
                  <div className={classes.cardBody}>
                    <table className={classes.table}>
                      <thead>
                        <tr className={classes.headRow}>
                          <th className={classes.headCell}>#</th>
                          <th className={classes.headCell}>Avatar</th>
                          <th className={classes.headCell}>Username</th>
                          <th className={classes.headCell}>Site Admin</th>
                          <th className={classes.headCell}>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={classes.tableRow}>
                          <td className={classes.tableCell}>{index + 1}</td>
                          <td className={classes.tableCell}>
                            <a
                              href={follower.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={
                                  follower?.avatar_url || "default-avatar.png"
                                }
                                alt={follower?.login || "Avatar"}
                                style={{ width: "50px", borderRadius: "50%" }}
                              />
                            </a>
                          </td>
                          <td className={classes.tableCell}>
                            {follower.login || "N/A"}
                          </td>
                          <td className={classes.tableCell}>
                            {follower.site_admin ? "Yes" : "No"}
                          </td>
                          <td className={classes.tableCell}>
                            {follower.type || "N/A"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={classes.cardFooter}>
                    <p className={classes.starsText}>
                      Total Stars: {follower.stars || 0}{" "}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className={classes.noData}>No followers available</div>
            )}
          </div>
        </div>
        <div className={classes.modalCardActions}>
          <button className={classes.Button} onClick={onClose}>
            <strong>Close</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

FollowersModal.propTypes = {
  data: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FollowersModal;
