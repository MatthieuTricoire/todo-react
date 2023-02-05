//? Font aweson
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ tasks, setTasks, index }) => {
  //   const [taskStatus, setTaskStatus] = useState(false);

  const statusTask = () => {
    const newTab = [...tasks];
    newTab[index].status = !newTab[index].status;
    setTasks(newTab);
  };
  const deleteTask = () => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };
  return (
    <div className="todolist__todo row" key={index}>
      <input
        className="todolist__todo__ckb"
        type="checkbox"
        name=""
        id=""
        onClick={statusTask}
      />
      <p className={tasks[index].status ? "taskdone" : null}>
        {tasks[index].description}
      </p>
      <button
        onClick={deleteTask}
        className="btn todolist__todo__btn todolist__todo__btn--pushed-right"
      >
        <FontAwesomeIcon icon="trash-can" />
      </button>
    </div>
  );
};

export default Todo;
