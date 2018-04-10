import React from "react";

export const helper = {
  handleTextBar(dispatch, action, type) {
    return e => {
      if (e.key !== "Enter" && type === "SUBMIT_INPUT") {
        return;
      }
      dispatch(action(type, {time: Date.now(), value: e.target.value}));
    };
  },

  viewListElements(list) {
    return list.map(each => (
      <li key={each.todoId}>
        <div className="todoText">{each.value}</div>
        <button className="todoRemoveButton" id={each.todoId}>
          {"remove"}
        </button>
      </li>
    ));
  },

  removeToDo(dispatch, action, type) {
    return e => {
      if (e.target.type === "submit") {
        dispatch(action(type, e.target.id));
      }
    };
  }
};
