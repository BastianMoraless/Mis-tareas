import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { taskDelete } = useContext(TaskContext);

  function taskId() {
    taskDelete(task.id);
  }

  return (
    <div className="bg-gray-800 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-300 text-md">{task.description}</p>
      <button className="bg-red-500 px-2 mt-2 p-1 rounded-md hover:bg-red-400" onClick={taskId}>
        eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
