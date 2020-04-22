import React, { Component } from "react";
import { INIT_TODO_LIST, INIT_TODO_TASK } from "../constants/constant";
import TodoList from "../components/TodoList";
import update from "immutability-helper";
import { Card, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TodoApi from "../apis/TodoApi";

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkAsDone = this.onMarkAsDone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      todoList: [],
      todoTask: INIT_TODO_TASK
    };
  }

  componentDidMount() {
    TodoApi.getTodoList().then(response => {
      const initTodoList = response.data;
      this.setState({ todoList: initTodoList });
    });
  }

  onMarkAsDone(index) {
    const { todoList } = this.state;
    const todo = todoList[index];
    const updatedTodoList = update(todoList, {
      [index]: { $merge: { done: !todo.done } }
    });
    this.setState({
      todoList: updatedTodoList
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const { todoList } = this.state;
    if (this.state.todoTask != INIT_TODO_TASK) {
      const newTask = {
        id: todoList.size,
        content: this.state.todoTask,
        status: true
      };
      const updatedTodoList = update(todoList, {
        $push: [newTask]
      });
      this.setState({ todoList: updatedTodoList });

      TodoApi.addNewTodoTask(this.state.todoTask).then(response => {});
      this.setState({
        todoTask: INIT_TODO_TASK
      });
    }
  }

  onChange(event) {
    this.setState({
      todoTask: event.target.value
    });
  }

  render() {
    return (
      <Space direction="vertical">
        <Card
          title="To-Do List"
          style={{ width: 350, height: 150, background: "grey" }}
        >
          <form onSubmit={this.onSubmit}>
            <Input
              placeholder="+ Add New To-Do Task ..."
              type="text"
              value={this.state.todoTask}
              onChange={this.onChange}
            />
            <button
              type="submit"
              // shape="circle"
            >
              <PlusOutlined />
            </button>
          </form>
        </Card>
        <TodoList
          todoList={this.state.todoList}
          onMarkAsDone={this.onMarkAsDone}
        />
      </Space>
    );
  }
}

TodoContainer.protoTypes = {};
