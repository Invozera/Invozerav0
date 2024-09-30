import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight mb-4 md:mb-0">
            Invozera
            <span className="text-orange-200">Accounting</span>
          </h1>
          <nav className="flex space-x-2">
            <NavLink to="/" active={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink
              to="/invoicing"
              active={location.pathname === "/invoicing"}
            >
              Invoicing
            </NavLink>
            <NavLink to="/sacco" active={location.pathname === "/sacco"}>
              Sacco
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  active: boolean;
}

function NavLink({ to, children, active }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-block px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 
      ${
        active
          ? "bg-white text-orange-500"
          : "hover:bg-green-600 hover:text-white"
      } 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-500 focus:ring-white`}
    >
      {children}
    </Link>
  );
}

export default Header;
