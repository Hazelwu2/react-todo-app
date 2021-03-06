import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    title: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title)

    // Clear Data
    this.setState({
      // title: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">新增</button>
      </form>
    )
  }
}

export default InputTodo