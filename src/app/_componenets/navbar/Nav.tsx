"use client";
import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
export default function Nav() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);

  if (width > 768) {
    return (
      <nav className="nav-text absolute top-0 flex h-12 w-full  items-center justify-center font-light md:h-16 lg:h-20">
        <div className="flex w-full items-center justify-between px-3 md:w-11/12 lg:w-8/12">
          <a href="#me" className="px-4 text-white hover:text-gray-300">
            Vasyl Marchak
          </a>
          <div className="flex items-center justify-center gap-2">
            <a href="#stack" className="px-4 text-white hover:text-gray-300">
              Stack
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
}
