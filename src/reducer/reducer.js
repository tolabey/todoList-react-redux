import I from "immutable";

export function reducer(store = I.Map(), action) {
  switch (action.type) {

  case "USER_INPUT":
    return store.set("userInput", action.payload.get("value"));

  case "ADD_TODO":
    return store.set("todoList",
      store.get("todoList", I.List()).push(action.payload)
    );

    // editText created with todoIDs we know which todoElement is editing.
    // merge is working by according to id, if it has same id, merge updates the element.
  case "EDIT_TEXT":
    return store.set("editText", store.get("editText", I.Map()).merge(action.payload));


  case "EDIT_TODO": // beautify this!
    const editTodoElement = store.get("todoList", I.List()).map(each => {
      const control = each.get("todoId", "?") === action.payload.get("todoId", "*");

      return control ? action.payload : each;
    });

    return store.set("todoList", editTodoElement);

  case "CANCEL_EDIT_TODO":
    const cancelTodoEdit = store.get("todoList", I.List()).map(each => {
      const idControl = each.get("todoId") === action.payload.get("todoId", "*");

      return idControl ? action.payload : each;
    });

    return store.set("todoList", cancelTodoEdit);

  case "REMOVE_LIST_ELEMENT":
    const newTodoList = store.get("todoList").filter(each => each.get("todoId") !== action.payload);

    return store.remove("todoList").set("todoList", newTodoList);


  case "EDITABLE_LIST_ELEMENT":
    const editableTodo = store.get("todoList", I.List()).map(each => {
      return each.get("todoId") === action.payload ? each.set("editable", true) : each;
    });

    return store.remove("todoList").set("todoList", editableTodo);


  case "DEBOUNCE_TIMEOUT":
    return store.set("debounceTimeout", action.payload);

  case "SEARCH_TEXT":
    return store.set("searchText", action.payload.get("value"));

  default:
    return store;
  }
}
