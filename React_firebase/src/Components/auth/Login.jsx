import React,{useState, useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { BsDashLg } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signinUserWithPassword } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <>
      <section className="w-full h-[500px] bg-gradient-to-l from-fuchsia-200/45 via-sky-200 to-fuchsia-100/45 p-8 flex flex-col items-center">
        <div className="flex flex-col gap-4 bg-green-300/65 shadow-xl  p-4  ">
          <div className="flex items-center gap-3">
            <span>
              <FiAlertCircle size={28} />
            </span>
            <h2 className=" text-lg md:text-4xl font-semibold font-ubuntu">
              Login
            </h2>
          </div>

          <form
            onSubmit={handleLoginForm}
            className="flex flex-col items-center gap-3"
          >
            <input
              className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
              type="email"
              name="email"
              id="1x0"
              placeholder="Enter Your Email !"
              required
              autoComplete="off"
            />


           <div className="relative flex  items-center">
             <input
              className="w-[400px] h-8 py-1 px-2 outline-none rounded-sm bg-white/65 backdrop-blur-3xl shadow-2xl"
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="1x2"
              placeholder="Enter Your Password !"
              required
              autoComplete="off"
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
            <p className="text-right w-full cursor-pointer hover:text-blue-600">
              Forgot Password ?
            </p>
            <button
              type="submit"
              className=" text-lg py-1 w-full px-2 bg-white/10 backdrop-blur-3xl shadow-2xl rounded-sm font-stardos tracking-wider hover:border-b-2 border-zinc-400 hover:scale-105 duration-200 transition-all"
            >
              Login
            </button>
            <div className="flex items-center gap-2 pt-6">
              <BsDashLg /> <span className="font-rubik">Login by</span>{" "}
              <BsDashLg />{" "}
            </div>
            <div className=" w-full flex flex-col items-center gap-2">
              <button className=" font-rubik w-full py-1 px-2 rounded-sm flex items-center justify-center gap-2 bg-white">
                Login With{" "}
                <span>
                  <FcGoogle size={22} />
                </span>
              </button>
              <button className=" font-rubik w-full py-1 px-2 rounded-sm justify-center flex items-center gap-2 bg-white">
                Login With{" "}
                <span>
                  <VscGithub size={22} />
                </span>
              </button>
            </div>
            <div>
              <p className="text-[14px] font-rubik">
                Don't have an account?{" "}
                <Link
                  to="/auth/register"
                  className="underline hover:text-blue-600"
                >
                  Register now
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
