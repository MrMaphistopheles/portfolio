import React from "react";
import Button from "../ui/button/Button";
export default function Nav() {
  return (
    <nav className="nav-text absolute top-0 flex h-12 w-full  items-center justify-center font-light md:h-16 lg:h-20">
      <div className="flex w-8/12 items-center justify-between">
        <a href="#me" className="px-4 text-white hover:text-gray-300">
          Vasyl Marchak
        </a>
        <div className="flex items-center justify-center gap-2">
          <a href="#about" className="px-4 text-white hover:text-gray-300">
            My stack
          </a>
          <a href="#about" className="px-4 text-white hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="px-4 text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <Button>email</Button>
      </div>
    </nav>
  );
}
