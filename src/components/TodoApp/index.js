 
import React, { Component } from "react";
import "./index.css";
import TodoItem from "../TodoItem";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      todoList: [],
    };
  }

  onAddItem = () => {
    const { taskInput, todoList } = this.state;
    if (taskInput.trim() !== "") {
      const [taskName, count] = taskInput.split(/\s+(\d+)$/);
      const numberOfTasks = parseInt(count) || 1;
      const newTasks = Array.from({ length: numberOfTasks }, (_, index) => ({
        task_id: todoList.length + index + 1,
        task: taskName,
        updatedTimes: 0,
      }));
      this.setState({
        todoList: [...todoList, ...newTasks],
        taskInput: "",
      });
    }
  };

  onEditTask = (task_id, editedTask) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((each) =>
        each.task_id === task_id ? { ...each, task: editedTask } : each
      ),
    }));
  };

  onUpdatedNoOfTimesEdited = (task_id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((each) =>
        each.task_id === task_id
          ? { ...each, updatedTimes: each.updatedTimes + 1 }
          : each
      ),
    }));
  };

  onDeleteTask = (task_id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((each) => task_id !== each.task_id),
    }));
  };

  render() {
    const { taskInput, todoList } = this.state;
    return (
      <div className="main-container">
        <div className="task-form-container">
          <h1 className="main-heading">Day Goals!</h1>
          <div>
            <input
              type="text"
              className="input-box box"
              placeholder="Add a Todo"
              value={taskInput}
              onChange={(e) => this.setState({ taskInput: e.target.value })}
            />
            <br />
            <button className="box input-button" onClick={this.onAddItem}>
              Add a Todo
            </button>
          </div>
          <ul className="un-ordered-list">
            {todoList.map((each) => (
              <TodoItem
                key={each.task_id}
                item={each}
                deleteTask={this.onDeleteTask}
                editTask={this.onEditTask}
                incrementEditCount={this.onUpdatedNoOfTimesEdited}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoApp;
