import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";

const TaskActions = ({onAddClick, onDeleteAllClick, task}) => {
  return (
    <>
      <div className="flex justify-between  items-center gap-6 py-2 px-10 ">
        <h3 className="text-white">Available Task {task.length} </h3>
        <div className=" flex items-center gap-3">
          <button onClick={onAddClick} className="flex items-center gap-1  text-white text-[12px] md:text-[14px] lg:text-[16px] py-1 px-2 bg-sky-300 hover:bg-blue-400 "> <span><MdFormatListBulletedAdd color="black"  /></span> Add Task</button>
          <button onClick={onDeleteAllClick} className="flex items-center gap-1 text-[12px] md:text-[14px] lg:text-[16px]  text-red-500 py-1 px-2 bg-yellow-300">
            <span><MdOutlineDeleteSweep color="black" /></span> Delete all
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskActions;
