
import React from "react";

const NavLink = (props: any) => {
  return <li className="nav-links">{props.children}</li>
}

const Header: React.FC = () => {

  return (
    <header className="flex justify-between items center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
            <img src="./assets/cuteplaceholder.png" alt="" className="w-20 hover:scale-105 transition-all"/>
            </a>
      <nav>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <NavLink><a href="#intro" className="p-3 hover:bg-purple-700 hover:text-white rounded-md transisition-all cursor-pointer">About</a></NavLink>
          <NavLink><a href="#portfolio" className="p-3 hover:bg-purple-700 hover:text-white rounded-md transisition-all cursor-pointer">Projects</a></NavLink>
          <NavLink><a href="#contact"className="p-3 hover:bg-purple-700 hover:text-white rounded-md transisition-all cursor-pointer">Contact</a></NavLink>
        </ul>
      </nav>
      <div>
      <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"></i>
      </div>
    </header>
  );
};

export default Header;