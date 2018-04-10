import React, {Component} from "react";
import I from "immutable";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoView extends Component {
  render() {
    const {dispatch, todoList} = this.props;

    return (
      <div className="todo">
        <ul className="todoUl" onClick={helper.removeToDo(dispatch, singleDataAction, "REMOVE_LIST_ELEMENT")}>
          {helper.viewListElements(todoList)}
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
