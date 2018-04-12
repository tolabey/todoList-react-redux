import React, {Component} from "react";
import I from "immutable";
import {connect} from "react-redux";
import TodoElement from "./TodoElement.js";

class TodoView extends Component {
  render() {
    const {todoList, searchText} = this.props;
    const todoItemsTbShown = todoList.filter(each => each.get("value", "").includes(searchText));

    return (
      <div className="todo">
        <ul className="todoUl">
          {
            todoItemsTbShown.map(each => (
              <TodoElement key={each.get("todoId")} each={each} />
            ))
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(store) {
  return {
    todoList: store.get("todoList", I.List()),
    searchText: store.get("searchText", "")
  };
}


export default connect(mapStateToProps)(TodoView);
