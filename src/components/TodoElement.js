import React, {Component} from "react";

class TodoView extends Component {
  render() {
    const {each} = this.props;

    return (
      <li key={each.todoId}>
        <div className="todoText">{each.value}</div>
        <button className="todoRemoveButton" id={each.todoId}>
          {"remove"}
        </button>
      </li>
    );
  }
}


export default TodoView;
