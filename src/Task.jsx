const Task = (props) => {
  return (
    <div className="task-item">
      <p className="task-description">
        This is task {props.id}
        <span>
          <button className="btn-confirm" type="button">
            Edit
          </button>
        </span>
        <span>
          <button className="btn-confirm" type="button">
            Delete
          </button>
        </span>
      </p>
    </div>
  );
};

export default Task;
