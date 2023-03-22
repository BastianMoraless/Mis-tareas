import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handlesubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mx-auto max-w-md mb-2">
      <form onSubmit={handlesubmit} className='bg-slate-800 p-8' >
        <h1 className="text-white text-2xl mb-2 font-bold">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descrpicion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-indigo-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
