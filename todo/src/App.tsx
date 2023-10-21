import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";

function App() {


  const [addText, setAddText] = useState([] as any);
  let toDoList = (inputText) => {
    setAddText([...addText, inputText]);

    console.log(addText);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...addText];
    newListTodo.splice(key, 1);
    setAddText([...newListTodo]);
  };

   

  return (
    <>
      <ToDo addText toDoList={toDoList} />

      {addText.map((listItem, i) => {
        return <ToDoList key={i} item={listItem} deleteItem={deleteListItem} />;
      })}
    </>
  );
}

export default App;
