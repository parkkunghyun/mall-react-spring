import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};

const ReadComponent = ({ tno }) => {
  const [todo, setTodo] = useState(initState);
  const { moveToList, moveToModify } = useCustomMove();

  useEffect(() => {
    getOne(tno).then((data) => {
      setTodo(data);
    });
  }, [tno]);
  return (
    <div className="border-2 border-sky-200 mt-10 m-2 p-4">
      {makeDiv("Tno", todo.tno)}
      {makeDiv("Title", todo.title)}
      {makeDiv("Writer", todo.writer)}
      {makeDiv("Due Date", todo.dueDate)}
      {makeDiv("complete", todo.complete ? "Completed" : "Not Yet")}

      <div className="flex justify-end p-4">
        <button
          type="button"
          onClick={() => moveToList()}
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500 "
        >
          List
        </button>

        <button
          type="button"
          onClick={() => moveToModify(tno)}
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500 "
        >
          Modify
        </button>
      </div>
    </div>
  );
};

const makeDiv = (title, value) => (
  <div className="flex justify-center">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
      <div className="w-1/5 p-6 text-2xl text-right font-bold">{title}</div>
      <div className="w-4/5 p-6 text-2xl rounded-r border border-solid shadow-md">
        {value}
      </div>
    </div>
  </div>
);

export default ReadComponent;
