import React from "react";
import styles from "./Header.module.css";
import logo from "../logo.png";
import * as data from "./links.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { hover } from "@testing-library/user-event/dist/hover";

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["logo-container"]}>
        <img src={logo} alt="" />
      </div>
      <div className={styles["links-container"]}>
        {links.map((link: Link) => {
          return (
            <div key={link.href} className={styles["link"]}>
              <a href={link.href}>{link.label}</a>
            </div>
          );
        })}
      </div>

      <div
        className="upload-icon"
        style={{
          color: "grey",
          display: "flex",
          gap: "15px",
          marginRight: "20px",
          cursor: "pointer",
          fontSize: "21px",
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBagShopping} />
      </div>
    </nav>
  );
}

export default Header;
