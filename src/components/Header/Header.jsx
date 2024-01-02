'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Move the useRouter hook inside the component

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle = "px-4 py-2 md:hover:border-b-2 md:hover:border-b-white md:hover:bg-gradient-to-t from-white/30 border-t-0 to-transparent transition-all ease-out duration-350 border-2 border-transparent rounded";

  // Move the isActive function inside the component
  const isActive = (pathname) => router.pathname === pathname;
  // const isActive = () => {"/"}
  return (
    <>
      <div
        style={{ maxWidth: "100%" }}
        className="sticky top-0 drop-shadow-lg backdrop-blur-2xl w-full z-10"
      >
        <div className="flex md:justify-around justify-between p-4 items-center text-lg backdrop-blur-2xl text-white">
          <div>
            <Link href="/">
              <span className="font-semibold">Shreyans</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between text-white m-2 backdrop-blur-2xl ">
              <Link href="/" className={`mx-2 ${linkStyle} ${isActive('/') ? "bg-blue-800" : ""}`}>
                Home
              </Link>
              <Link href="/About" className={`mx-2 ${linkStyle} ${isActive('/About') ? "bg-blue-800" : ""}`}>
                About
              </Link>
              <Link href="/Project" className={`mx-2 ${linkStyle} ${isActive('/Project') ? "bg-blue-800" : ""}`}>
                Projects
              </Link>
              <Link href="/Contact" className={`mx-2 ${linkStyle} ${isActive('/Contact') ? "bg-blue-800" : ""}`}>
                Contact
              </Link>
            </div>
          </div>

          {menuOpen ? (
            <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-100">
              <div className="flex justify-end p-4">
                <button className="text-white" onClick={toggleMenu}>
                  &times;
                </button>
              </div>
              <div className="flex flex-col items-center text-white">
                <Link href="/" className={`my-2 ${linkStyle} ${isActive('/') ? "bg-blue-800" : ""}`}>
                  Home
                </Link>
                <Link href="/About" className={`my-2 ${linkStyle} ${isActive('/About') ? "bg-blue-800" : ""}`}>
                  About
                </Link>
                <Link href="/Project" className={`my-2 ${linkStyle} ${isActive('/Project') ? "bg-blue-800" : ""}`}>
                  Projects
                </Link>
                <Link href="/Contact" className={`my-2 ${linkStyle} ${isActive('/Contact') ? "bg-blue-800" : ""}`}>
                  Contact
                </Link>
              </div>
            </div>
          ) : (<div className="md:hidden flex justify-end p-4">
            <button className="text-white" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>)}
        </div>
      </div>
    </>
  );
};

export default Header;
