import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const TodoList = ({ task, toggleCompleate, deleteTodo, editTodo }) => {
  return (
    <div className=" bg-sky-800 w-82 p-3 rounded-2xl mb-3 text-center">
      <div className="flex flex-row gap-6 justify-between">
        <p
          className={`${
            task.completed ? "line-through text-zinc-400" : ""
          } ml-6 hover:cursor-pointer`}
          onClick={() => toggleCompleate(task.id)}
        >
          {task.task}
        </p>
        <div className="mr-3">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="mr-3 hover:cursor-pointer"
            onClick={() => {
              editTodo(task.id);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="mr-3 hover:cursor-pointer"
            onClick={() => {
              deleteTodo(task.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
