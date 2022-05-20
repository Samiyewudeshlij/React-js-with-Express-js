import React, { useState } from "react";
import "../style/notes.css";
import axios from "axios";
export const Notes = () => {
  const [notes, setNotes] = useState([]);

  const getData = () => {
    console.log("getData");
    axios.get("http://localhost:3004/").then((res) => setNotes(res.data));
    console.log(notes);
    // console.log(notes);
  };


  return (
    <div className="not_cont" onClick={getData}>
      {notes.map((data) => {
        return (
          <div className="empty">
            <h5>{data.date}</h5>
            <h4>{data.note}</h4>
            <button className="a">delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
