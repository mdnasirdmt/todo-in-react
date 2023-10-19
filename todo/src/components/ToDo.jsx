import React, { useState } from "react";

const ToDo = (props) => {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      if (inputText != "") props.toDoList(inputText);
      setInputText("");
    }
  };

  const onClickbtn = () => {
    if (inputText != "") {
      props.toDoList(inputText);
    }
    console.log(inputText);
    setInputText("");
  };

  const inputHandle = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div className="  font-bold text-center m-4 ">
        <h1 className="underline p-2 bg-slate-500 m-2">ToDo List</h1>
        <input
          className="ml-4 w-3/12 h-10 rounded-xl border border-black pl-4 shadow-md outline-none font-serif text-lg"
          placeholder="Enter Your Todo"
          value={inputText}
          onChange={inputHandle}
          onKeyDown={handleEnterPress}
        />

        <button
          className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg ml-2 cursor-pointer shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={onClickbtn}
        >
          +
        </button>

        {/* <h1>{inputText}</h1> */}
      </div>
    </>
  );
};

export default ToDo;
