import { useState } from "react";
//? Import components
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

//? Import assets
import logo from "./assets/img/logo.png";

//? Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashCan);

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <header className="header row container">
        <img className="header__logo" src={logo} alt="" />
        <h1>Todo List</h1>
      </header>
      <main className="App column">
        <div className="todolist container__small">
          {tasks
            .sort((a, b) => Number(a.status) - Number(b.status))
            .map((elem, index) => {
              return (
                <Todo
                  tasks={tasks}
                  setTasks={setTasks}
                  index={index}
                  key={index}
                ></Todo>
              );
            })}
        </div>
        <AddTodo tasks={tasks} setTasks={setTasks}></AddTodo>
      </main>
    </>
  );
}

export default App;
