import React, {Component} from "react";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoAdd extends Component {

  render() {
    const {dispatch, controlledInput} = this.props;
    const {handleUserText, handleSubmit} = helper;

    return (
      <div className="todoAdd">
        <form onSubmit={handleSubmit(dispatch, singleDataAction, "ADD_TODO", controlledInput)}>
          <input
              autoFocus
              type="text"
              onChange={handleUserText(dispatch, singleDataAction)}
              value={controlledInput}
          />
          <button type="button" onClick={handleSubmit(dispatch, singleDataAction, "ADD_TODO", controlledInput)}>submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    controlledInput: store.get("controlledInput", "")
  };
}

export default connect(mapStateToProps)(TodoAdd);
