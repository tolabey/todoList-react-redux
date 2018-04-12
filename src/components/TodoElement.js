import React, {Component} from "react";
import TodoElementView from "./TodoElementView.js";
import TodoElementEdit from "./TodoElementEdit.js";

class TodoElement extends Component {

  view(each) {
    if (!each.get("editable")) {
      return <TodoElementView each={each}/>;
    }

    return <TodoElementEdit each={each}/>;
  }

  render() {
    const {each} = this.props;

    return (
        this.view(each)
    );
  }
}


export default TodoElement;
