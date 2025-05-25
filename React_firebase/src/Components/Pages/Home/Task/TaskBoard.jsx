import React, { useState } from "react";
import { defaultData } from "./DummyData";
import TaskActions from "./TaskActions";
import AddTaskModal from "./AddTaskModal";
import TaskList from "./TaskList";
import SearchTask from "./SearchTask";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
  const [task, setTask] = useState(defaultData); // ✅ Fixed
  const [modal, setModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // ✅ Add or Update Task
  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTask([...task, newTask]);
    } else {
      setTask(
        task.map((tas) => (tas.id === newTask.id ? newTask : tas)) // ✅ Fixed logic
      );
    }

    setModal(false);
  };

  // ✅ Edit Task
  const handleEditTask = (currentTask) => {
    setTaskToUpdate(currentTask);
    setModal(true);
  };

  // ✅ Close Modal
  const handleCloseClick = () => {
    setModal(false);
    setTaskToUpdate(null);
  };

  // delete task
  const handleDelete = (taskId) => {
    const listTaskAfterDelet = task.filter(
      (currTask) => currTask.id !== taskId
    );
    setTask(listTaskAfterDelet);
  };

  // delete all
  const handleDeleteAlbtn = () => {
    task.length = 0;
    setTask([...task]);
  };

  const handleFav = (favTaskId) => {
    const taskIndex = task.findIndex((indvTask) => indvTask.id === favTaskId);
    const newTaskArray = [...task];
    newTaskArray[taskIndex].isFavorite = !newTaskArray[taskIndex].isFavorite;
    setTask(newTaskArray);
  };

  // search control
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const filtered = task.filter((currentTask) =>
      currentTask.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTask([...filtered]);
  };

  return (
    <>
      <section className="sections relative">
        {modal && (
          <AddTaskModal
            taskToUpdate={taskToUpdate}
            onSave={handleAddTask}
            onCloseClick={handleCloseClick}
          />
        )}

        <div>
          <SearchTask onSearch={handleSearch} />

          <TaskActions
          task={task}
            onAddClick={() => {
              setTaskToUpdate(null); // ✅ reset edit state
              setModal(true); // ✅ open modal in add mode
            }}
            onDeleteAllClick={handleDeleteAlbtn}
          />
          {task.length > 0 ? (<TaskList
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDelete}
            onFav={handleFav}
          />) : (<NoTaskFound/>)
          }
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
