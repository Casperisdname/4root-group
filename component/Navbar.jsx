"use client";
import { Menu, X, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex bg-blue-950 text-blue-100 justify-between items-center p-8">
        <div className="text-4xl font-bold">
          4<span className="text-yellow-400">ROOT</span>
        </div>
        <div className="space-x-4 hidden sm:block text-xl transition-colors duration-300">
          <a
            className="hover:underline hover:underline-offset-8 text-blue-500  hover:text-amber-600 "
            href="#home"
          >
            Home
          </a>
          <a
            className=" hover:underline hover:underline-offset-8 hover:text-amber-600"
            href="#about"
          >
            About
          </a>
          <a
            className=" hover:underline hover:underline-offset-8 hover:text-amber-600"
            href="#works"
          >
            Work
          </a>
          <a
            className=" hover:underline hover:underline-offset-8 hover:text-amber-600"
            href="#teams"
          >
            Team
          </a>
        </div>

        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X
              className="rotate-180 transition-transform duration-300"
              size={28}
            />
          ) : (
            <Menu className="transition-transform duration-300" size={28} />
          )}
        </button>
      </div>
      <div
        className={`absolute  inset-x-0 rounded-b-4xl bg-sky-50/90 backdrop-blur-sm text-left shadow-xl sm:hidden transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-12 px-8 py-8 font-bold text-stone-900">
          <a className="hover:text-amber-600" href="#home">
            Home
          </a>
          <a className="hover:text-amber-600" href="#about">
            About
          </a>
          <a className="hover:text-amber-600" href="#works">
            Work
          </a>
          <a className="hover:text-amber-600" href="#teams">
            Team
          </a>
          <button
            className="rounded-2xl bg-yellow-400 text-sky-100 py-3 font-bold transition-all duration-300
      hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]
      active:scale-95"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
