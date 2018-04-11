import I from "immutable";

export function reducer(store = I.Map(), action) {
  switch (action.type) {

  case "CONTROLLED_INPUT":
    return store.set("controlledInput", I.fromJS(action.payload.value));

  case "ADD_TODO":
    return store.set("todoList",
      store.get("todoList", I.List()).push({todoId: action.payload.time, value: action.payload.value})
    );

  case "REMOVE_LIST_ELEMENT":
    const newTodoList = store.get("todoList").filter(each => each.todoId.toString() !== action.payload);

    return store.remove("todoList").set("todoList", newTodoList);

  default:
    return store;
  }
}
