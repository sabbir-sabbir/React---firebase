import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchTask = ({ onSearch }) => {
  const [searchTerm, setSearchTearm] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <>
      <section className=" flex justify-end items-center py-4 px-10 ">
        <div>
          <form action="" className="flex  items-center ">
            <div>
              <label className="text-zinc-300 mr-2" htmlFor="">Search</label>
            </div>

            <div>
              <input
              className="  w-[280px] lg:w-[400px] py-1 px-2 outline-none "
                type="search"
                id="search-dropdown"
                placeholder="Search Task"
                value={searchTerm}
                onChange={() => setSearchTearm(event.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <button className="bg-sky-300  py-1 px-2 hover:bg-blue-400 " onClick={handleClick} type="submit">
                <CiSearch size={22} color="white" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchTask;
