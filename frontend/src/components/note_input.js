import "../style/noteinput.css";
import axios from "axios";
import React, { useState } from "react";

const NotesInput = () => {
    const [note, setNote] = useState("");

    const handleChange = (e) => {
        setNote(e.target.value)
        // console.log(note)
    }
    const sendData = () =>{
        console.log(note);
        const url = 'http://localhost:3004/';
        let obj = {
            data: note
        }
        obj = JSON.stringify(obj);
        console.log(obj);
    axios.post(url, obj,{
        headers: {
            "Content-Type" : "application/json"
        }
    }).then((res) => console.log(res));
}
  return (
    <div className="input_container">
      <input type="text" placeholder="Write Note Here..." className="notes"  value={note} onChange={e => {handleChange(e)}}/>
      <button className="btn" onClick={sendData}>+</button>
    </div>
  );
};

export default NotesInput;
