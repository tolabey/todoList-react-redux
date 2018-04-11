export const helper = {
  handleUserText(dispatch, action, toReset) {
    return e => {
      dispatch(action("CONTROLLED_INPUT", {value: toReset ? "" : e.target.value}));
    };
  },

  handleSubmit(dispatch, action, type, data) {
    return e => {
      data = data.trim();
      helper.handleUserText(dispatch, action, true)();
      e.preventDefault();
      if (data !== "") {
        dispatch(action(type, {time: Date.now(), value: data}));
      }
    };
  },

  removeToDo(dispatch, action, type) {
    return e => {
      if (e.target.type === "submit") {
        dispatch(action(type, e.target.id));
      }
    };
  }
};
