import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function DisplayedBooksLink({ text, link }) {
  const [PageSelected, setPageSelected] = useState(false);

  function handleNavClick() {
    setPageSelected(!PageSelected);
  }

  return (
    <NavLink
      to={link}
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        padding: "5px",
        color: isActive ? "#fff" : "#545e6f",
        background: isActive ? "#7600dc" : "#f0f0f0",
      })}
      onClick={handleNavClick}
    >
      {text}
    </NavLink>
  );
}
