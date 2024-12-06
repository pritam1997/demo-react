import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HAPTIQ</div>
      <ul className="nav-links">
        <li>Clients</li>
        <li>Products</li>
        <li>Capabilities</li>
        <li>Playbooks</li>
        <li>Company</li>
      </ul>
      <button className="cta-button">Let's Talk</button>
    </nav>
  );
}

export default Navbar;
