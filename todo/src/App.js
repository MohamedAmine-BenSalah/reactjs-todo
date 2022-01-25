import React,{Component} from "react"
import './App.css'
import TodoListForm from "./Component/TodoListForm"
export default class App extends Component {
 
 
  render() {
    return (
      <div className="App" >
        <TodoListForm/>
      </div>
    )
  }
}
