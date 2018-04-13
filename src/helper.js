export const helper = {
  handleUserText(dispatch, action, type, toReset) {
    return e => {
      dispatch(action(type, {value: toReset ? "" : e.target.value}));
    };
  },

  handleEditedText(dispatch, action, id, toReset, val) {
    console.log("iyi mi");
    return e => {
      const editingTodo = {};

      // when submited something e.target.value cant be used anymore
      editingTodo[id] = toReset ? val : e.target.value;
      dispatch(action("EDIT_TEXT", editingTodo));
    };
  },

  handleSubmit(dispatch, action, type, data) {
    return () => {
      const trimData = data.value.trim();

      helper.handleUserText(dispatch, action, "USER_INPUT", true)(); // reset text-area
      if (trimData !== "") {
        // when submit something, editing is over it should reset by using submitted data.
        helper.handleEditedText(dispatch, action, data.id, true, trimData)();
        dispatch(action(type, {todoId: data.id || Date.now(), value: trimData, editable: false}));
      }
    };
  },

  handleTodoButtons(dispatch, action, type, id) {
    return e => {
      if (e.target.type === "submit") {
        dispatch(action(type, id));
      }
    };
  },

  debounce(dispatch, operator, data, action, type, timeout) {
    clearTimeout(timeout);
    const newTimeout = setTimeout(operator(dispatch, action, type, {value: data}), 800);

    dispatch(action("DEBOUNCE_TIMEOUT", newTimeout));
  }
};
