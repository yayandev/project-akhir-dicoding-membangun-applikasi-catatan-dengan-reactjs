import React, { useState } from "react";
import ActiveNote from "./ActiveNote";
import Archive from "./Archive";

function NoteList({
  onDelete,
  onActive,
  onArchive,
  activeDatas,
  archiveDatas,
}) {
  const [tabs, setTabs] = useState("active");
  return (
    <React.Fragment>
      <div className="p-10">
        <div className="flex gap-5 my-3">
          <button
            onClick={() => setTabs("active")}
            className={`font-bold text-xl  ${
              tabs === "active" ? "border-b-2 border-black" : null
            }`}
          >
            Catatan
          </button>
          <button
            onClick={() => setTabs("archive")}
            className={`font-bold text-xl ${
              tabs === "archive" ? "border-b-2 border-black" : null
            }`}
          >
            Archive
          </button>
        </div>
        {tabs === "active" ? (
          <section className="container my-5">
            <div className="">
              {activeDatas.length !== 0 ? (
                <ActiveNote
                  onDelete={onDelete}
                  notes={activeDatas}
                  onActive={onActive}
                />
              ) : (
                <p className="text-gray-500">Tidak ada catatan</p>
              )}
            </div>
          </section>
        ) : (
          <section className="container my-5">
            <div className="w-full">
              {archiveDatas.length !== 0 ? (
                <Archive
                  onDelete={onDelete}
                  notes={archiveDatas}
                  onArchive={onArchive}
                />
              ) : (
                <p className="text-gray-500">Tidak ada catatan</p>
              )}
            </div>
          </section>
        )}
      </div>
    </React.Fragment>
  );
}

export default NoteList;
