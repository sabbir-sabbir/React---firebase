import { useState } from "react";
import { BsSave } from "react-icons/bs";
import { MdClose } from "react-icons/md";
const AddTaskModal = ({ onSave, taskToUpdate, onCloseClick }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "tags") {
      value = value.split(",");
    }
    setAddTask({
      ...addTask,
      [name]: value,
    });
  };

  const [addTask, setAddTask] = useState(taskToUpdate || {  
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null))
  return (
    <>
      <section className=" z-[100] absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] bg-zinc-900 shadow-2xl  py-2 px-4">
        <div>
          <div >
            <h3 className="text-white font-semibold text-2xl mb-6">{isAdd ? "Add New Task" : "Edit new task"}</h3>
          </div>

          {/* form */}
          <form
          className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onSave(addTask, isAdd);

            }}
          >
            {/* title */}
            <div className="flex flex-col  gap-2">
              <label className="text-white tracking-wide" htmlFor="">Title</label>
              <input
              className="outline-none py-1 px-2"
                type="text"
                name="title"
                id="title"
                value={addTask.title}
                onChange={handleChange}
                placeholder="Enter Title"
                autoComplete="off"
                required
              />
            </div>

            {/* desc */}
            <div className="flex flex-col  gap-2">
              <label className="text-white tracking-wide" htmlFor="">Description</label>
              <textarea
              className="outline-none py-1 px-2"
                type="text"
                name="description"
                id="description"
                value={addTask.description}
                onChange={handleChange}
                placeholder="Enter Description"
                autoComplete="off"
                required
              ></textarea>
            </div>

            {/* tags */}
            <div className="flex flex-col  gap-2">
              <label className="text-white tracking-wide" htmlFor="">Tags</label>
              <input
              className="outline-none py-1 px-2"
                type="text"
                name="tags"
                id="tags"
                value={addTask.tags}
                onChange={handleChange}
                placeholder="Tags"
                autoComplete="off"
                required
              />
            </div>

            {/* select */}
            <div className="flex flex-col  gap-2">
              <label className="text-white tracking-wide" htmlFor="">Priority</label>
              <select
              className="outline-none py-1 px-2"
                name="priority"
                id="priority"
                value={addTask.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* btn */}
            <div className="flex justify-center items-center gap-4 ">
              <button className="flex items-center gap-1 text-white bg-sky-400 px-2 py-1" type="submit"> <span><BsSave/></span> Save Task</button>
              <button className=" flex items-center gap-1 text-white bg-rose-500  px-2 py-1" onClick={onCloseClick} > <span> <MdClose/> </span> Close Task</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddTaskModal;
