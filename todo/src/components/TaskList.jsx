import { useEffect, useState } from 'react';
import axios from 'axios';
import  socket  from '../socket';
import { BASE_URL } from '../service/api'; 
import '../style/tasklist.css'; 

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/fetchAllTasks`);
            setTasks(res.data.tasks);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();

        socket.on("taskListUpdated", (updatedList) => {
            setTasks(updatedList);
        });

        return () => {
            socket.off("taskListUpdated");
        };
    }, []);

    return (
        <div className="tasklist-container">
            <h2 className="tasklist-title">Notes</h2>
            <div className="tasklist-scroll-container">
                {tasks.length === 0 ? (
                    <p className="tasklist-empty">No tasks added yet.</p>
                ) : (
                    <ul className="tasklist-items">
                        {tasks.map((task, idx) => (
                            <li key={idx} className="tasklist-item">
                                {task}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
