import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { TbWorldStar } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { TbLogs } from "react-icons/tb";
import { PiSignOutDuotone } from "react-icons/pi";
import login from "../../assets/login.svg";
import register from "../../assets/register.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  // sign out handler
  const handleSignOutUser = ()=> {
     handleSignOut()
  };
  return (
    <>
      <div className="w-full h-14 bg-gray-800 text-white flex justify-between items-center gap-12 md:gap-24 px-10 ">
        <div>
          <img src="/logo.svg" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* hidden in md:screen */}
        <div className=" justify-between gap-2 md:gap-6 hidden md:flex ">
          <Link to="/">
            {" "}
            <span className="nav-link">
              {" "}
              <IoHome /> Home
            </span>{" "}
          </Link>
          <Link to="/about">
            {" "}
            <span className="nav-link">
              {" "}
              <TbWorldStar /> About
            </span>{" "}
          </Link>
          <Link to="/contact">
            {" "}
            <span className="nav-link">
              <MdContacts /> Contacts
            </span>{" "}
          </Link>
          <Link to="/services">
            {" "}
            <span className="nav-link">
              <MdMiscellaneousServices /> Services
            </span>{" "}
          </Link>
          <Link to="/products">
            {" "}
            <span className="nav-link">
              {" "}
              <AiFillProduct /> Products
            </span>{" "}
          </Link>
          <Link to="/blogs">
            {" "}
            <span className="nav-link">
              {" "}
              <TbLogs /> Blogs
            </span>{" "}
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <RiCloseLargeLine className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
          <div>
            {isOpen && (
              <div>
                <div className="absolute z-[1000] top-14 right-0  bg-gray-800 text-white w-40 h-[500px]  shadow-lg p-4 flex flex-col gap-4">
                  <Link to="/">
                    {" "}
                    <span className="nav-link">
                      {" "}
                      <IoHome /> Home
                    </span>{" "}
                  </Link>
                  <Link to="/about">
                    {" "}
                    <span className="nav-link">
                      {" "}
                      <TbWorldStar /> About
                    </span>{" "}
                  </Link>
                  <Link to="/contact">
                    {" "}
                    <span className="nav-link">
                      <MdContacts /> Contacts
                    </span>{" "}
                  </Link>
                  <Link to="/services">
                    {" "}
                    <span className="nav-link">
                      <MdMiscellaneousServices /> Services
                    </span>{" "}
                  </Link>
                  <Link to="/products">
                    {" "}
                    <span className="nav-link">
                      {" "}
                      <AiFillProduct /> Products
                    </span>{" "}
                  </Link>
                  <Link to="/blogs">
                    {" "}
                    <span className="nav-link">
                      {" "}
                      <TbLogs /> Blogs
                    </span>{" "}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
       

       {/* login und register */}
        <div className="flex  gap-2 md:gap-6 ">
          {user ? (
            <div className="flex gap-2  items-center ">
              {user?.email}{" "}
              <span>
                <button onClick={handleSignOutUser} className="flex items-center gap-1 ">
                  {" "}
                  <PiSignOutDuotone /> Sign out
                </button>
              </span>{" "}
            </div>
          ) : (
            <Link to="/auth/login" className="flex  items-center gap-1">
              {" "}
              <span>
                <img
                  className="w-5 h-5 bg-white rounded-full"
                  src={login}
                  alt=""
                />
              </span>
              Login
            </Link>
          )}

          {user ? (
            <></>
          ) : (
            <Link to="/auth/register" className="flex  items-center gap-1">
              <span>
                <img
                  className="w-5 h-5 bg-white rounded-sm"
                  src={register}
                  alt=""
                />
              </span>
              Register
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
