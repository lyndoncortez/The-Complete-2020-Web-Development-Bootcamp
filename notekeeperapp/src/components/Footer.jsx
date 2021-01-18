import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒ {year} Cortez, Inc.</p>
    </footer>
  );
}

export default Footer;
