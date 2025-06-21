import React, { useState, useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { BsDashLg } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUserWithPassword } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [conPassword, setconPassword] = useState(false);

  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const fullName = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;
   

    createUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <section className="w-full h-[600px] bg-gradient-to-l from-fuchsia-200/45 via-sky-200 to-fuchsia-100/45 p-8 flex flex-col items-center">
        <div className="flex flex-col gap-4 bg-green-300/65 shadow-xl  p-4  ">
          <div className="flex items-center gap-3">
            <span>
              <FiAlertCircle size={28} />
            </span>
            <h2 className=" text-lg md:text-4xl font-semibold font-ubuntu">
              Register
            </h2>
          </div>

          <form
            onSubmit={handleRegisterForm}
            className="flex flex-col items-center gap-3"
          >
            {/* fullname */}
            <input
              className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
              type="text"
              name="fullname"
              id="4x3"
              placeholder="Enter Your Full Name !"
              required
              autoComplete="off"
            />

            {/* email */}
            <input
              className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
              type="email"
              name="email"
              id="4x0"
              placeholder="Enter Your Email !"
              required
              autoComplete="off"
            />

            {/* password */}
            <div className="relative flex  items-center">
              <input
                className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
                type={showPassword ? "text" : "password"}
                name="password"
                id="4x1"
                placeholder="Enter Your Password !"
                required
              />

              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 hover:text-green-600"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 hover:text-green-600"
                />
              )}
            </div>

            {/* confirm password */}
            <div className="relative flex  items-center">
              <input
                className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
                type={conPassword ? "text" : "password"}
                name="confirmpassword"
                id="4x2"
                placeholder="Confirm Your Password !"
                required
              />
              {conPassword ? (
                <FaEyeSlash
                  onClick={() => setconPassword(!conPassword)}
                  className="absolute right-3 hover:text-green-600"
                />
              ) : (
                <FaEye
                  onClick={() => setconPassword(!conPassword)}
                  className="absolute right-3 hover:text-green-600"
                />
              )}
            </div>
            <p className="w-full text-right">
              <input type="checkbox" name="" id="checkbox" />
              <label
                className="ml-1 cursor-pointer font-rubik text-[14px] "
                htmlFor="checkbox"
              >
                {" "}
                Accept our all terms & conditions
              </label>
            </p>

            <button
              type="submit"
              className=" text-lg py-1 w-full px-2 bg-white/10 backdrop-blur-3xl shadow-2xl rounded-sm font-stardos tracking-wider hover:border-b-2 border-zinc-400 hover:scale-105 duration-200 transition-all"
            >
              Register Now
            </button>
            <div className="flex items-center gap-2 pt-6">
              <BsDashLg /> <span className="font-rubik">Register by</span>{" "}
              <BsDashLg />{" "}
            </div>
            <div className=" w-full flex flex-col items-center gap-2">
              <button className=" font-rubik w-full py-1 px-2 rounded-sm flex items-center justify-center gap-2 bg-white">
                Register With{" "}
                <span>
                  <FcGoogle size={22} />
                </span>
              </button>
              <button className=" font-rubik w-full py-1 px-2 rounded-sm justify-center flex items-center gap-2 bg-white">
                Register With{" "}
                <span>
                  <VscGithub size={22} />
                </span>
              </button>
            </div>
            <div>
              <p className="text-[14px]">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="underline hover:text-blue-600"
                >
                  Login now
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
