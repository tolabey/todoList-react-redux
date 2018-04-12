import React, {Component} from "react";
import I from "immutable";
import {connect} from "react-redux";
import TodoElement from "./TodoElement.js";

class TodoView extends Component {

  viewTodoElements(todoList) {
    return (
      todoList.map(each => (
        <TodoElement key={each.get("todoId")} each={each} />
      ))
    );
  }


  render() {
    const {todoList} = this.props;

    return (
      <div className="todo">
        <ul className="todoUl">
          {this.viewTodoElements(todoList)}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(store) {
  return {
    todoList: store.get("todoList", I.List())
  };
}


export default connect(mapStateToProps)(TodoView);
