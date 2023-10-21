import React from "react";

const ToDoList = (props) => {
  
  const deleteButton = (e) => {
    props.deleteItem(props.index);
  };

  return (
    <>
      <span className="absolute right-6  ">
        <i
          className="fa-solid fa-trash m-4 text-lg cursor-pointer transition-transform hover:scale-120 text-red-500 hover:text-red-700 mr-60"
          onClick={deleteButton}
        ></i>
      </span>
      <li
        id="delete"
        className=" list-none bg-slate-600 border border-gray-400 text-white p-4  rounded-md w-[50%] h-30 flex items-center relative mt-8 ml-40 "
      >
        {props.item}
      </li>
    </>
  );
};

export default ToDoList;
