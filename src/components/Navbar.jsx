import React from "react";
import { BsSearch } from "react-icons/bs";
function Navbar({ onSearch }) {
  return (
    <nav className=" px-5 sm:px-24 py-5 border-b-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto gap-5 sm:gap-0">
        <a href="/" className="flex items-center">
          <span className="self-center  text-3xl font-bold whitespace-nowrap uppercase">
            NoteApp
          </span>
        </a>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <button>
              <BsSearch />
            </button>
          </div>
          <input
            onChange={(event) => onSearch(event)}
            type="text"
            id="search-navbar"
            className="focus:outline-none block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm"
            placeholder="Cari..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
