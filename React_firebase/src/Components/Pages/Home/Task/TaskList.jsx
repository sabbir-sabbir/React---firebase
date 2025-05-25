import React from 'react';
import { FaStar } from "react-icons/fa6";

const TaskList = ({ task , onEdit, onDelete, onFav }) => {
  return (
    <>
      {/* task list */}
      <div className="overflow-x-hidden">
                  <div className=" task-list p-4 text-white">
        <table className="min-w-full table-auto border border-gray-700 bg-gray-800 rounded-lg">
          <thead className="bg-gray-700 text-left">
            <tr>
              <th className="p-4 text-sm font-semibold w-[48px] text-center">★</th>
              <th className="p-4 text-sm font-semibold w-[300px]">Title</th>
              <th className="p-4 text-sm font-semibold">Description</th>
              <th className="p-4 text-sm font-semibold md:w-[350px]">Tags</th>
              <th className="p-4 text-sm font-semibold md:w-[100px]">Priority</th>
              <th className="p-4 text-sm font-semibold md:w-[100px] text-center">Options</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {task.map((item) => {
              if (!item) return null;

              return (
                <tr key={item.id} className="  border-t border-gray-600 hover:bg-gray-700">
                  <td className="p-4 text-center">
                    <button onClick={()=> onFav(item.id)}>
                    {item.isFavorite ? (
                      <FaStar className="text-yellow-400" />
                    ) : (
                      <FaStar className="text-gray-400" />
                    )}
                    </button>
                  </td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">{item.description?.length > 40 ? item.description.slice(0, 40) + " " + "....." : item.description}</td>
                 
                  <td className="p-4">
                    <ul className="flex flex-wrap gap-2">
                      {item.tags?.map((tag) => (
                        <li
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-600 rounded-full"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4">{item.priority}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center items-center space-x-3">
                      <button
                        className="text-red-400 hover:text-red-600"
                        onClick={() => onDelete(item.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-blue-400 hover:text-blue-600"
                        onClick={() => onEdit(item)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
     
    
    </>
  );
};

export default TaskList;
