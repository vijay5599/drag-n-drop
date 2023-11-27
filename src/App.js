import React, { useCallback, useState } from "react";
import "./style.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const handleDrag = useCallback(() => {}, []);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
