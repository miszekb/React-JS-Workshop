import React, { useState } from 'react';
import './App.css';
import Task from './tasks/Task/Task';

class App extends React.Component {
  state = {
    tasks: [
      {number: '1', id: 1000 + Math.floor(Math.random() * 8999)},
      {number: '2', id: 1000 + Math.floor(Math.random() * 8999)},
      {number: '3', id: 1000 + Math.floor(Math.random() * 8999)}
    ],
    showTasks: false
  }

  switchIDHandler = (newID) => {
    this.setState({
      tasks: [
      {number: newID, id: Math.floor(Math.random() * 9999)},
      {number: newID, id: Math.floor(Math.random() * 9999)},
      {number: newID, id: Math.floor(Math.random() * 9999)}
    ]});
  }

  IDChangedHandler = (event, id) => {
    const taskIndex = this.state.tasks.findIndex(tsk => {
      return tsk.id === id
    });

    const task = {
      ...this.state.tasks[taskIndex]
    };

    task.number = event.target.number;
    const tasks = [...this.state.tasks];
    tasks[taskIndex] = task;

    this.setState({
      tasks: [
        {number: '1', id:  Math.floor(Math.random() * 9999)},
        {number: '2', id:  event.target.value},
        {number: '3', id:   Math.floor(Math.random() * 9999)}
      ]
    })
  }

  toggleTaskHandler = () => {
    const doesShow = this.state.showTasks;
    this.setState({showTasks:  !doesShow});
  }

  deleteTaskHandler = (taskIndex) => {
    //const tasks = this.state.tasks.slice();
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks})
  }

  render() {
    const style = {
      backgroundColor: "grey",
      padding: '20px'
    };

    let tasks = null;

    if(this.state.showTasks) {
      tasks = (
      <div>
        {this.state.tasks.map((task, index) => {
          return <Task 
            number = {task.number} 
            key={task.id}
            id = {index}
            click = {() => this.deleteTaskHandler(index)}
            changed = {(event) => this.IDChangedHandler(event, task.id)}
          />
        })}     
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <h4>This is my first React app!</h4>
        <button onClick={this.toggleTaskHandler}>Click me!</button>
        {tasks}
      </div>
    );  
  }
}
export default App;
