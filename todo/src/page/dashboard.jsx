import React from 'react';
import {Header} from '../components/Header';
import {TaskList} from '../components/TaskList';
import {AddTask} from '../components/AddTask';
import '../style/dashboad.css'

export const Dashboard = () => {
  return (
    <div className="home-container">
            <div className="home-box">
                <Header />
                <AddTask />
                <TaskList />
            </div>
        </div>
  )
}
