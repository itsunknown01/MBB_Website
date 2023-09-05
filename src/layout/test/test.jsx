import React, { useState } from "react";
import { NavbarItems } from "../../constants";
import { useNavigate } from "react-router-dom";

const Header = ({mobile}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (menuItem) => {
    if (menuItem === "Home") {
      navigate("/");
    } else {
      navigate(`/${menuItem.toLowerCase()}`);
    }
    // Close the menu on mobile when an item is clicked
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white block shadow-xl w-full">
      <nav
        className={`flex items-center justify-between p-4 lg:px-6 my-0 mx-10 ${
          mobile && menuOpen ? "lg:flex" : ""
        }`}
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          logo
        </a>
        {mobile ? (
          <button
            className="lg:hidden ml-4 p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        ) : (
          <ul className="relative py-2 flex list-none">
            {NavbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item)}
                className="py-1.5 px-4 box-border cursor-pointer whitespace-nowrap align-middle relative justify-start"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {mobile && menuOpen && (
        <ul className="lg:hidden relative py-2 flex items-center flex-col list-none z-[99] max-h-screen">
          {NavbarItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item)}
              className="py-1.5 px-4 box-border cursor-pointer whitespace-nowrap align-middle relative justify-start"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
