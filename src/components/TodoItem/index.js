 
import React, { Component } from "react";
import { MdModeEdit } from "react-icons/md";
import "./index.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      editedTask: this.props.item.task,
    };
  }

  handleDelete = () => {
    this.props.deleteTask(this.props.item.task_id);
  };

  handleEdit = () => {
    this.setState({ editMode: true });
    
  };

  handleSave = () => {
    this.props.editTask(this.props.item.task_id, this.state.editedTask);
    this.setState({ editMode: false });
    this.props.incrementEditCount(this.props.item.task_id);
  };

  render() {
    const { item } = this.props;
    const { task_id, task, updatedTimes } = item;
    const { editMode, editedTask } = this.state;

    return (
      <li>
        <div className="task-item">
          {editMode ? (
            <input
              type="text"
              value={editedTask}
              onChange={(e) => this.setState({ editedTask: e.target.value })}
              onBlur={this.handleSave}
            />
          ) : (
            <>
              <span className="span-tag" style={{ marginRight: "5px" }}>
                {`${task} (Updated ${updatedTimes} Times)`}
              </span>
              <div>
                <button onClick={this.handleEdit} className="button-edit">
                  <MdModeEdit />
                </button>

                <button onClick={this.handleDelete} className="button-delete">
                  X
                </button>
              </div>
            </>
          )}
        </div>
      </li>
    );
  }
}

export default TodoItem;
