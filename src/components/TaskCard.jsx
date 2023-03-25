import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { taskDelete } = useContext(TaskContext);

  function taskId() {
    taskDelete(task.id);
  }

  return (
    <div className="bg-[#112744] text-white p-3 rounded-md">
      <h1 className="text-xl text-white font-bold capitalize">{task.title}</h1>
      <p className="text-white text-md">{task.description}</p>
      <button className="bg-red-500 px-2 mt-2 p-1 rounded-md hover:bg-red-400" onClick={taskId}>
        eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
