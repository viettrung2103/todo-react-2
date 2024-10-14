import { useState } from "react";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(props.task.value);
  const handleEditSubmit = (event) => {
    event.preventDefault();
    setEditMode((em) => false);
    props.handleEdit(props.task.id, value);
  };
  return (
    <div className="task-item">
      <div className="task-description">
        {props.task.id} -
        <span>
          {editMode ? (
            <form className="task-edit">
              <span>
                <input
                  className="task-input"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                  type="text"
                />
              </span>
              <button onClick={handleEditSubmit} className="task-button">
                Submit
              </button>
            </form>
          ) : (
            <>
              {props.task.value}
              <button
                id="edit-button"
                className="task-button"
                type="button"
                onClick={() => setEditMode((em) => true)}
              >
                Edit
              </button>
            </>
          )}
        </span>
        <span>
          <button
            id="delete-button"
            className="task-button"
            type="button"
            onClick={() => props.handleDelete(props.task.id)}
          >
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Task;
