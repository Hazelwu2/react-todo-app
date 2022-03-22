import React from 'react'
import TodoList from './TodosList'
import Header from './Header'
import InputTodo from './InputTodo'

class TodoContainer extends React.Component {
  state = {
    title: '',
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  }

  // 切換 Todo 狀態
  handleChange = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
          // todo.completed = !todo.completed
        }
        return todo
      })
    }))
    // this.setState({
    //   todos: this.state.todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed
    //     }
    //     return todo
    //   })
    // })
  }

  // 刪除 Todo
  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => todo.id !== id)
      ]
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
          />
        </div>
      </div>
    )
  }
}

export default TodoContainer