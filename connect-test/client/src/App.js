import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

class App extends Component {
  state = {
    todoTitle: "",
    todoContent: "",
  };

  // loadItem = Axios({
  //   method: "GET",
  //   url: "http://localhost:5000/",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // }).then((res) => {
  //   this.setState({ username: res.data.message });
  // });
  onChangeTodoTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  onChangeTodoContent = (e) => {
    this.setState({ todoContent: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      title: this.state.todoTitle,
      content: this.state.todoContent,
    };

    Axios.post("/", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ todoTitle: "", todoContent: "" });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AddTodo
              onCtitle={this.onChangeTodoTitle}
              onCcontent={this.onChangeTodoContent}
              titleValue={this.state.todoTitle}
              contentValue={this.state.todoContent}
              onSubmit={this.onSubmit}
            />
            <Todos testname={this.state.username} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
