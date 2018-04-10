import I from "immutable";

export function reducer(store = I.Map(), action) {
  switch (action.type) {
  case "UPDATE_INPUT":
    return store.set("controlledInput", I.fromJS(action.payload.value));
  case "SUBMIT_INPUT":
    return store.set("todoList",
      store.get("todoList",
        I.List()).push({todoId: action.payload.time, value: action.payload.value})
    );
  case "REMOVE_LIST_ELEMENT":

    const newTodoList = store.get("todoList").filter(each => {
      if (each.todoId.toString() !== action.payload) {
        return each;
      }
      return null;
    });

    store = store.remove("todoList").set("todoList", newTodoList);

    return store;
  default:
    return store;
  }
}
