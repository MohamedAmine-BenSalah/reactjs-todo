import React,{Component} from "react"
import TodoList from "./Component/TodoList"
import './App.css'
export default class App extends Component {
  state={
    todos : [],
  }
 
  render() {
    return (
      <div className="App" >
        <TodoList/>
      </div>
    )
  }
}
