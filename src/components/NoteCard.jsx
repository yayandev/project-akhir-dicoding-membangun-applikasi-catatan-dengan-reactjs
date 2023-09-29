import React from "react";
import { showFormattedDate } from "../utils/index";
import { BsTrash2Fill } from "react-icons/bs";
function NoteCard({
  changeButton,
  id,
  title,
  body,
  createdAt,
  onDelete,
  buttonData,
}) {
  return (
    <div className="p-6 w-full sm:w-64 bg-white rounded-lg border border-gray-200 shadow-md">
      <div className="flex gap-5">
        <button
          onClick={() => onDelete(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
        >
          <BsTrash2Fill />
        </button>
        <button
          onClick={() => buttonData(id)}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          {changeButton}
        </button>
      </div>
      <div className="text-gray-400 pb-2">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <span className="text-sm">{showFormattedDate(createdAt)}</span>
      </div>
      <p className="mb-3 font-normal text-gray-700">{body}</p>
    </div>
  );
}

export default NoteCard;
