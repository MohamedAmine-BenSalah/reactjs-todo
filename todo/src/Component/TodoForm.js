import React from "react";
import shortid from "shortid";
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    const {name,value } = event.target;
    this.setState({
        [name] : value,
    })
  }
  handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
          text: this.state.text,
          id : shortid.generate(),
          complete : false,
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input
          type="text"
          placeholder="todos.."
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit} >add</button>
        
      </form>
    );
  }
}
export default TodoForm;
