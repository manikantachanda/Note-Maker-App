import React from "react";

function Footer() {
  const d = new Date();
  const t = d.getFullYear();
  return (
    <footer>
      <p>@Copyright {t}</p>
    </footer>
  );
}

export default Footer;
