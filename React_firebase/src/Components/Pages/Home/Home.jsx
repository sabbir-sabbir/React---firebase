import React from "react";
import heroPng from "../../../assets/hero.png";
import TaskBoard from "./Task/TaskBoard";



const Home = () => {
  return (
    <>
      <section className="sections">
        <div className=" space-y-4">
          <h3 className="text-4xl font-extrabold text-amber-500">TASK</h3>
          <p className=" md:w-[300px] lg:w-[600px] text-zinc-300 font-stardos  tracking-wide">
            {" "}
            Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
            Your Personal Productivity Ally for Seamless Goal Achievement and
            Stress-Free Task Management.
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            className="object-cover"
            width="320"
            height="290"
            src={heroPng}
            alt="Image"
          />
        </div>
       
      </section>
     <TaskBoard/>
    </>
  );
};

export default Home;
