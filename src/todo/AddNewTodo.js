import React, { Component } from "react";

class AddNewTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value="title"
              id="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="info" />
            <input
              type="text"
              name="info"
              value="info"
              id="info"
              className="form-control"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default AddNewTodo;
