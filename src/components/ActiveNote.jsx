import React from "react";
import NoteCard from "./NoteCard";
import { BsArchiveFill } from "react-icons/bs";
function ActiveNode({ onDelete, onActive, notes }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between">
      {notes.map((note) => (
        <NoteCard
          changeButton={<BsArchiveFill />}
          key={note.id}
          onDelete={onDelete}
          buttonData={onActive}
          {...note}
        />
      ))}
    </div>
  );
}

export default ActiveNode;
