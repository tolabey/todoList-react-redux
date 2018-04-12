import React, {Component} from "react";
import {helper} from "../helper.js";
import {connect} from "react-redux";
import {singleDataAction} from "../action/action.js";

class TodoAdd extends Component {

  render() {
    const {dispatch, userInput, debounceTimeout} = this.props;
    const {handleUserText, handleSubmit, debounce} = helper;

    return (
      <div className="todoAdd">
        <form onSubmit={e => e.preventDefault()}>
          <input
              autoFocus
              type="text"
              onChange={handleUserText(dispatch, singleDataAction)}
              value={userInput}
              onKeyUp={() => debounce(dispatch, handleSubmit, userInput, singleDataAction, "ADD_TODO", debounceTimeout || null)}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    userInput: store.get("userInput", ""),
    debounceTimeout: store.get("debounceTimeout")
  };
}

export default connect(mapStateToProps)(TodoAdd);
