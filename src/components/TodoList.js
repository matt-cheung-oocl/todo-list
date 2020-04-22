import React, { Component } from "react";
import { Space } from "antd";
import "antd/dist/antd.css";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todoList, onMarkAsDone } = this.props;

    return (
      <Space direction="vertical">
        {todoList.map(todo => (
          <TodoItem key={todo.index} todo={todo} onMarkAsDone={onMarkAsDone} />
        ))}
      </Space>
    );
  }
}