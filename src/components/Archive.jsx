import React from "react";
import NoteCard from "./NoteCard";
import { BsArrowBarLeft } from "react-icons/bs";
function Archive({ onDelete, notes, onArchive }) {
  return (
    <div className="flex flex-wrap gap-3 justify-between">
      {notes.map((note) => (
        <NoteCard
          changeButton={<BsArrowBarLeft />}
          key={note.id}
          onDelete={onDelete}
          buttonData={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default Archive;
