import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Space } from "antd";
import "antd/dist/antd.css";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todoList } = this.props;
    return (
      <Space direction="vertical">
        {todoList.map((todo) => (
          <TodoItem key={todo.index} todo={todo} />
        ))}
      </Space>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf([
    {
      value: PropTypes.string,
    },
  ]),
};
