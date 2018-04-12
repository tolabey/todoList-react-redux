import React, {Component} from "react";
import TodoElementView from "./TodoElementView.js";
import TodoElementEdit from "./TodoElementEdit.js";

class TodoElement extends Component {

  render() {
    const {each} = this.props;

    return (
      each.get("editable") ? <TodoElementEdit each={each}/> : <TodoElementView each={each}/>
    );
  }
}


export default TodoElement;
