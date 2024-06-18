import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Heading from "./components/Heading";
import NotTodoList from "./components/Nottodolist";
import { createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [nottodos, setNotTodos] = useState([]);
  const [notTodoValue, setNotTodoValue] = useState("");
  const [radioValue, setRadioValue] = useState("todo");

  function persistTodoData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function persistNotTodoData(newList) {
    localStorage.setItem("nottodos", JSON.stringify({ nottodos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistTodoData(newTodoList);
    setTodos(newTodoList);
  }

  function handleAddNotTodos(newNotTodo) {
    const newNotTodoList = [...nottodos, newNotTodo];
    persistNotTodoData(newNotTodoList);
    setNotTodos(newNotTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    persistTodoData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteNotTodo(index) {
    const newNotTodoList = nottodos.filter((nottodo, nottodoIndex) => {
      return nottodoIndex != index;
    });
    persistNotTodoData(newNotTodoList);
    setNotTodos(newNotTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setRadioValue("todo");
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  function handleEditNotTodo(index) {
    const valueToBeEdited = nottodos[index];
    setNotTodoValue(valueToBeEdited);
    setRadioValue("notTodo");
    handleDeleteNotTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    let localNotTodos = localStorage.getItem("nottodos");
    if (!localTodos) {
      return;
    }
    if (!localNotTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    localNotTodos = JSON.parse(localNotTodos).nottodos;
    setNotTodos(localNotTodos);
    setTodos(localTodos);
  }, []);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider>
      <div className="App" id={theme}>
        <div className="switch">
          <i class="fa-solid fa-sun"></i>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          <i class="fa-solid fa-moon"></i>
        </div>

        <Heading />
        <TodoInput
          handleAddTodos={handleAddTodos}
          handleAddNotTodos={handleAddNotTodos}
          todoValue={todoValue}
          notTodoValue={notTodoValue}
          setTodoValue={setTodoValue}
          setNotTodoValue={setNotTodoValue}
          radioValue={radioValue}
          setRadioValue={setRadioValue}
        />
        <br />

        <div className="Do_or_Not">
          <TodoList
            handleDeleteTodo={handleDeleteTodo}
            todos={todos}
            handleEditTodo={handleEditTodo}
          />

          <NotTodoList
            handleDeleteNotTodo={handleDeleteNotTodo}
            nottodos={nottodos}
            handleEditNotTodo={handleEditNotTodo}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
