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

  return <SmartPhoneBar />;
}

function SmartPhoneBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 mt-2 flex w-11/12 flex-col items-center justify-center gap-2 font-light">
      <div className="glass flex h-14 w-full items-center justify-between rounded-full px-3 ">
        <a href="#me" className="px-4 text-white hover:text-gray-300">
          Vasyl Marchak
        </a>
        <div className="flex items-center justify-center gap-3">
          <div
            className="flex flex-col items-center justify-center gap-1 p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div
              className=" h-1 w-8 rounded-full bg-white"
              style={{
                transform: isOpen
                  ? "rotate(45deg) translate(20% , 120%)"
                  : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            ></div>
            <div
              className=" h-1 w-8 rounded-full bg-white"
              style={{
                transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            ></div>
            <div
              className=" h-1 w-8 rounded-full bg-white"
              style={{
                backgroundColor: isOpen ? "transparent" : "white",
                transition: "background-color 0.3s",
              }}
            ></div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="glass flex w-full flex-col items-start justify-center gap-2 rounded-2xl p-3">
          <a href="#stack" className="px-4 text-white hover:text-gray-300">
            Stack
          </a>
          <a href="#about" className="px-4 text-white hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="px-4 text-white hover:text-gray-300">
            Contact
          </a>

          <a href="#contact" className="px-4 text-white hover:text-gray-300">
            email me
          </a>
        </div>
      )}
    </nav>
  );
}
