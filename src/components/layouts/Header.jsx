import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLinkClass = ({ isActive }) =>
    `flex items-center justify-center text-shadow-sm text-shadow-black rounded-md w-30 text-center h-12 transition duration-400 hover:bg-slate-800 ${
      isActive ? "bg-indigo-800" : ""
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md ${isActive ? "bg-violet-600" : ""}`;



  
  return (
    <header className="text-2xl relative  bg-cyan-600 text-white">
      {/* div container of navs + logo */}
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-4">
        {/* logo */}
        <NavLink to="/" end>
          ⚛ React Mastery
        </NavLink>

        {/* nav links */}
        <nav className="hidden md:flex gap-6">
          <NavLink className={desktopLinkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={desktopLinkClass} to="/topics">
            Topics
          </NavLink>
          <NavLink className={desktopLinkClass} to="/dashboard">
            Dashboard
          </NavLink>
        </nav>

        {/* button in the mobile resolution */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          className=" flex flex-col gap-4 bg-violet-700 p-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <NavLink className={mobileLinkClass} to="/" end>
            Home
          </NavLink>
          <NavLink className={mobileLinkClass} to="/topics">
            Topics
          </NavLink>
          <NavLink className={mobileLinkClass} to="/dashboard">
            Dashboard
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;
