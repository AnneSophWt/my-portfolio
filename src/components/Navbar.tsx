
import React, {useState} from "react";

const NavLink = (props: any) => {
  return <li className="nav-links">{props.children}</li>;
}

const Header: React.FC = () => {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center text-black py-6 px-8 md:px-20 bg-white drop-shadow-md">
        <a href="#">
            <img src="./assets/cuteplaceholder.png" alt="" className="w-16 hover:scale-105 transition-all"/>
            </a>
      <nav>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <NavLink><a href="#intro" className="text-xl p-3 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white rounded-md transisition-all cursor-pointer">About</a></NavLink>
          <NavLink><a href="#portfolio" className="text-xl p-3 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white rounded-md transisition-all cursor-pointer">Projects</a></NavLink>
          <NavLink><a href="#contact"className="text-xl p-3 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white rounded-md transisition-all cursor-pointer">Contact</a></NavLink>
        </ul>
    </nav>
    <nav>
      <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>
         {/* Mobile Dropdown Menu */}
         <ul
          className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <li className="list-none w-full text-center p-4 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white transition-all cursor-pointer">
            <a href="#intro" onClick={() => setIsMenuOpen(false)}>About</a>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white transition-all cursor-pointer">
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Projects</a>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-gradient-to-r from-violet-50 via-violet-300 to-violet-700 hover:text-white transition-all cursor-pointer">
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;