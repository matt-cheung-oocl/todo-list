import React, { Component } from "react";
import { Button, Space, Popconfirm, message } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
    this.removeTodoItem = this.removeTodoItem.bind(this);

    this.state = {
      isExisting: true
    };
  }

  onClickDone(event) {
    event.target.classList.toggle("crossed-line");
    this.props.onMarkAsDone(this.props.todo.id);
  }

  removeTodoItem(event) {
    this.setState({ isExisting: false });
    message.success("The item is sucessfully deleted.");
  }

  render() {
    const todo = this.props.todo;
    if (!this.state.isExisting) {
      return null;
    }
    return (
      <Space>
        <Button
          type="dashed"
          shape="round"
          block
          style={{ width: 350, textAlign: "left" }}
        >
          <div onClick={this.onClickDone}>{todo.content}</div>
        </Button>
        <Popconfirm
          title="Are you sure to delete?"
          onConfirm={this.removeTodoItem}
        >
          <Button
            danger
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
          ></Button>
        </Popconfirm>
      </Space>
    );
  }
}

TodoItem.protoTypes = {};
