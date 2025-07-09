import React, { useState, useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { BsDashLg } from "react-icons/bs";
import show from "../../assets/openeye.svg";
import hide from "../../assets/hideeye.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [conPassword, setconPassword] = useState(false);

  const { createUserWithPassword, signInWithGoogle} = useContext(AuthContext);
  const Provider = new GoogleAuthProvider();
  const naviagate = useNavigate();
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  // register with google
  const handleRegisterWithGoogle = () => {
    // sign in with google
    signInWithGoogle(Provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegisterForm = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const fullName = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmpassword.value;

    // passwords match
    if (password !== confirmPassword) {
      alert("Incorrect Confirm Password!");
      return;
    }

    // Check password strength
    if (!regexPassword.test(confirmPassword)) {
      alert("Try stronger password!");
      return;
    }

    // account creation
    createUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        alert("Your account is created successfully.");
        e.target.reset();

        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
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
                autoComplete="off"
              />

              {showPassword ? (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  right-3 hover:text-green-600"
                >
                  <img className="w-6 h-6" src={show} alt={show} />
                </span>
              ) : (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute  right-3 hover:text-green-600"
                >
                  <img className="w-6 h-6" src={hide} alt={show} />
                </span>
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
                autoComplete="off"
              />
              {conPassword ? (
                <span
                  onClick={() => setconPassword(!conPassword)}
                  className="absolute right-3 hover:text-green-600"
                >
                  <img className="w-6 h-6" src={show} alt={show} />
                </span>
              ) : (
                <span
                  onClick={() => setconPassword(!conPassword)}
                  className="absolute right-3 hover:text-green-600"
                >
                  <img className="w-6 h-6" src={hide} alt={hide} />
                </span>
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
          <div className=" w-full flex flex-col items-center gap-2">
              <button onClick={handleRegisterWithGoogle} className=" font-rubik w-full py-1 px-2 rounded-sm flex items-center justify-center gap-2 bg-white">
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
        </div>
      </section>
    </>
  );
};

export default Register;
