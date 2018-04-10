import React, {Component} from "react";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoAdd extends Component {

  render() {
    const {dispatch} = this.props;

    return (
      <div className="todoAdd">
        <input
            autoFocus
            type="text"
            onChange={helper.handleTextBar(dispatch, singleDataAction, "UPDATE_INPUT")}
            value={this.props.controlledInput}
            onKeyUp={helper.handleTextBar(dispatch, singleDataAction, "SUBMIT_INPUT")}
        />
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
