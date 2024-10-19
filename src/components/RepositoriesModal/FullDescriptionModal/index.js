import React from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

const FullDescriptionModal = ({ description, onClose }) => {
  return (
    <div className={classes.FullDescriptionModal}>
      <div className={classes.modalCard}>
        <div className={classes.modalCardHeader}>
          <span>Full Description</span>
        </div>
        <div className={classes.modalCardBody}>
          <div className={classes.card}>
            <div className={classes.cardBody}>
              <p>{description}</p>
            </div>
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
FullDescriptionModal.propTypes = {
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default FullDescriptionModal;
