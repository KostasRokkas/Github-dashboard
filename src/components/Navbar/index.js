import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import classes from "./index.module.css";
import { links } from "../../App";

/**
 * Link component to render a navigation link.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.link - The link object containing title and path.
 * @param {boolean} props.isActive - Indicates if the link is currently active.
 * @param {Function} props.onClick - The function to call when the link is clicked.
 * @returns {JSX.Element} - The rendered Link component.
 */
const Link = ({ link, isActive, onClick }) => {
  const linkClass = `${isActive ? classes.active : ""} ${classes.Link}`; // Determine class based on active state
  return (
    <a onClick={onClick} className={linkClass}>
      <strong>{link.title}</strong>
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * Navbar component to render the navigation bar.
 *
 * @returns {JSX.Element} - The rendered Navbar component.
 */
const Navbar = () => {
  const [activeId, setActiveId] = useState(null); // State to track active link ID
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div className={classes.Navbar}>
      <div className={classes.header} onClick={() => navigate("/")}>
        <h3>Github Informations</h3>
      </div>
      <div className={`${classes.links} ${activeId ? classes.visible : ""}`}>
        {links() // Retrieve links from the App component
          .filter((link) => link.inMenu) // Filter links to only those in the menu
          .map((link, idx) => (
            <React.Fragment key={idx}>
              <Link
                link={link} // Pass link object to Link component
                isActive={link.id === activeId} // Check if link is active
                onClick={() => {
                  setActiveId(link.id);
                  navigate(link.path);
                }}
              />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  isActive: true,
};

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
export default Navbar;
