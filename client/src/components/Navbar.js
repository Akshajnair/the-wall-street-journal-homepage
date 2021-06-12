import React from "react";

export default function Navbar() {
  let navbaritems = [
    { name: "Home", link: "/" },
    { name: "World", link: "/" },
    { name: "U.S.", link: "/" },
    { name: "Politics", link: "/" },
    { name: "Economy", link: "/" },
    { name: "Business", link: "/" },
    { name: "Tech", link: "/" },
    { name: "Markets", link: "/" },
    { name: "Opinion", link: "/" },
    { name: "Life & Arts", link: "/" },
    { name: "Real Estate", link: "/" },
    { name: "WSJ. Magazine", link: "/" },
    { name: "Sports", link: "/" },
  ];
  function printnavbar() {
    return navbaritems.map((key, index) => {
      return (
        <li
          key={index}
          className="style--top-menu-item--1c-FBrLt style--noHover--3apzT0Vo "
          role="none"
        >
          <a
            className="style--section-link--2rDVp5ht "
            href={key.link}
            role="menuitem"
            aria-haspopup="false"
            aria-expanded="false"
            aria-current="false"
          >
            {key.name}
          </a>
        </li>
      );
    });
  }
  return (
    <nav className="style--nav-container--2WhC8ifA " aria-label="Primary">
      <ul
        className="style--header-nav-desktop--3Gil3fdQ "
        role="menubar"
        aria-label="Primary Navigation"
      >
        {printnavbar()}
      </ul>
    </nav>
  );
}
