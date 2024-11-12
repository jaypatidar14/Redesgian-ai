import React from "react";
import Link from "next/link";
import Button from "./Button";
import Main from "./Main"; // Import the Main component

const Navbar: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Transparent Sticky Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 space-x-2">
        <nav className="relative">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto backdrop-blur-lg">
            {/* Logo */}
            <Link href="/" className="flex items-center ml-1 text-2xl font-bold space-x-2">
              <span className="text-white">Everything</span>
              <span className="text-white">Talent</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link href="/customers" className="text-gray-300 hover:text-white">
                Customers
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white">
                Resources
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white">
                Docs
              </Link>
              
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign in</Button> {/* Ghost style button */}
              <Button>Get Started</Button> {/* Default style button */}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content (Rendering Main Component) */}
      <main className="max-w-7xl mx-auto px-6 pt-32">
        <Main /> {/* Render the Main component */}
      </main>
    </div>
  );
};

export default Navbar;

// "use client";
// import React, { useState, useEffect } from "react";
// import { LuMoon, LuSun } from "react-icons/lu";
// import { IoMenu, IoClose } from "react-icons/io5";

// const useDarkMode = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     document.documentElement.classList.add(storedTheme);
//     setTheme(storedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     document.documentElement.classList.replace(theme, newTheme);
//     localStorage.setItem("theme", newTheme);
//     setTheme(newTheme);
//   };

//   return { theme, toggleTheme };
// };

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, toggleTheme } = useDarkMode();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="fixed w-full top-0 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 py-2 px-4 md:py-2 md:px-32 flex justify-between items-center border-b-2 border-transparent z-40 font-[Poppins]">
//         {/* Logo and Site Name */}
//         <div className="flex items-center space-x-2">
//           <img
//             src="/acme-logo footer.webp"
//             alt="Everything Talent Logo"
//             className="h-8 w-8"
//           />
//           <span className="text-xl font-semibold text-black dark:text-white">
//             Everything Talent
//           </span>
//         </div>

//         {/* Menu Links */}
//         <div className="hidden md:flex space-x-8">
//           {[
//             "Home",
//             "About",
//             "Use Cases",
//             "Pricing",
//             "Resources",
//             "Blog",
//             "Support",
//           ].map((item, index) => (
//             <a
//               key={index}
//               className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer text-sm font-medium transition-all duration-300 transform hover:-translate-y-1"
//             >
//               {item}
//             </a>
//           ))}
//         </div>

//         {/* Dark Mode and Login Buttons */}
//         <div className="flex items-center space-x-7">
//           {/* Dark Mode Toggle */}
//           <button onClick={toggleTheme} className="text-xl">
//             {theme === "dark" ? (
//               <LuMoon className="text-gray-300 hover:text-white transition-colors duration-300" />
//             ) : (
//               <LuSun className="text-gray-600 hover:text-black transition-colors duration-300" />
//             )}
//           </button>

//           {/* Login Button */}
//           <button className="hidden md:flex px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:shadow-xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 duration-300">
//             Login
//             <span className="ml-2">→</span>
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button onClick={toggleMenu} className="md:hidden text-xl">
//             {isOpen ? (
//               <IoClose className="text-gray-800 dark:text-gray-200" />
//             ) : (
//               <IoMenu className="text-gray-800 dark:text-gray-200" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed top-12 left-0 w-full backdrop-blur-md bg-white/50 dark:bg-gray-900/50 z-10 flex flex-col space-y-4 p-4 border-t border-gray-300 dark:border-gray-700">
//           {[
//             "Home",
//             "About",
//             "Use Cases",
//             "Pricing",
//             "Resources",
//             "Blog",
//             "Support",
//           ].map((item, index) => (
//             <a
//               key={index}
//               className="text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer text-base font-medium transition-colors duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
