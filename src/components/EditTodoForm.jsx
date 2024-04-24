import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleImput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    //prevengo azioni di default
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-sky-800 w-82 pr-pl-3 pb-pt-5 rounded-2xl mb-3 flex justify-between"
    >
      <input
        type="text"
        value={value}
        onChange={handleImput}
        placeholder="Correggi prodotto"
        className="p-3 rounded-xl text-left bg-slate-700 ml-6 size-10/12"
      />
      <button
        type="submit"
        className="bg-zinc-100 rounded-xl mr-6"
        value={value}
      >
        ✔️
      </button>
    </form>
  );
};
