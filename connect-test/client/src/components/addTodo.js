import React from "react";

const AddTodo = (props) => {
  return (
    <div className="wrapper">
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <label>Enter Title</label>
          <input
            type="text"
            className="form-control"
            onChange={props.onCtitle}
            value={props.titleValue}
          />
        </div>
        <div className="form-group">
          <label>Enter Content</label>
          <input
            type="text"
            className="form-control"
            onChange={props.onCcontent}
            value={props.contentValue}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-success btn-block"
            onClick={props.onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
