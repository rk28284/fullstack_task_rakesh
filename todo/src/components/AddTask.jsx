import React, { useState } from 'react';
import socket from "../socket";
import addIcon from "../assets/addIcon.png";
import '../style/AddTask.css';

export const AddTask = () => {
     const [task, setTask] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (task.trim()) {
            socket.emit("add", task.trim());
            setTask("");
        }
    };
  return (
    <div>
          <form onSubmit={handleAdd} className="add-task-form">
            <input
                type="text"
                placeholder="New Note..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="add-task-input"
            />
            <button type="submit" className="add-task-button">
                <img
                    src={addIcon}
                    alt="add-icon"
                    className="add-task-icon"
                />
                <span className="add-task-label">Add</span>
            </button>
        </form>
    </div>
  )
}



