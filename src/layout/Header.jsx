import React from "react";

import logo from "../assests/images/logo.png";
import { NavbarItems } from "../data/constant";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (menuitem) => {
    if (menuitem === "Home") {
      navigate("/");
    } else {
      navigate(`/${menuitem.toLowerCase()}`);
    }
  };
  return (
    <header className="bg-white block shadow-xl w-full">
      <nav
        className="flex items-center justify-between p-4 lg:px-6 my-0 mx-10"
        aria-label="Global"
      >
        <a href="/" className="-m-1.5 p-1.5">
          <img src={logo} alt="logo" className="w-40 object-contain bg-black" />
        </a>
        <ul className="relative py-2 flex list-none">
          {NavbarItems.map((item, index) => (
            <li
              key={index}
              onClick={()=> handleClick(item)}
              className="py-1.5 px-4 box-border cursor-pointer whitespace-nowrap align-middle relative justify-start"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
