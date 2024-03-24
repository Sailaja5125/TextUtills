import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
        // style={{
        //   backgroundColor: "#e3f2fd",
        // }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Game">
                  Games
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About us
                </Link>
              </li>
            </ul>
            {/* mode */}
            <div className="form-check form-switch">
              <input
                className="form-check-input cursor-pointer"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.togglemode}
              />
              <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckChecked">
              {props.text}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Nav.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
Nav.defaultProps = {
  title: "Set title",
  about: "Set about",
};
