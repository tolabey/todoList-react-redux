import React, {Component} from "react";
import I from "immutable";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";
import TodoElement from "./TodoElement.js";

class TodoView extends Component {

  viewTodoElements(todoList) {
    return (
      todoList.map(each => (
        <TodoElement key={each.todoId} each={each} />
      ))
    );
  }


  render() {
    const {dispatch, todoList} = this.props;


    return (
      <div className="todo">
        <ul className="todoUl" onClick={helper.removeToDo(dispatch, singleDataAction, "REMOVE_LIST_ELEMENT")}>
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
