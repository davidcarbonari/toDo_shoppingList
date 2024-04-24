import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleImput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    //prevengo azioni di default
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      // className="bg-sky-700 size-full rounded-3xl mb-3 flex flex-wrap p-3"
      className=" bg-sky-800 w-82 pr-pl-3 pb-pt-5 rounded-2xl mb-3 flex justify-between"
    >
      <input
        type="text"
        value={value}
        onChange={handleImput}
        placeholder="Inserisci prodotto"
        // className="p-3 rounded-xl text-center bg-slate-700 size-8/12 m-auto"
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
