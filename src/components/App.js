import React, {Component} from "react";
import TodoView from "./TodoView.js";
import TodoAdd from "./TodoAdd.js";
import TodoSearch from "./TodoSearch.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../reducer/reducer.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(reducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <div className={"container"}>
            <div className={"title"}>
              {"Todo"}
            </div>
            <TodoSearch/>
            <TodoAdd/>
            <TodoView/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
