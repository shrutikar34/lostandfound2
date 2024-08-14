import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar bg-dark border-bottom border-body ${styles.navbar}`}
        data-bs-theme="dark"
      >
        <ul className={`nav justify-content-end `}>
          <li className="nav-item">
            <Link
              to="/"
              className="navbar-brand nav-link "
              aria-current="page"
              href="#"
            >
              <h3>Lost & Found</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reportlostitem" className="nav-link" href="#">
              Report Lost Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reportfounditem" className="nav-link" href="#">
              Report Found Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/browselostitem" className="nav-link" href="#">
              Browse Lost Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/browsefounditem" className="nav-link" href="#">
              Browse Found Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-link" aria-disabled="true">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
