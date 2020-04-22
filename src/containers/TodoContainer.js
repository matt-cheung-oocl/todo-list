import React, { Component } from "react";
import { INIT_TODOS } from "../constants/constant";
import TodoList from "../components/TodoList";
import update from "immutability-helper";
import { Card, Input, Button, Space, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TodoApi from "../apis/TodoApi";

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkAsDone = this.onMarkAsDone.bind(this);
    this.addNewTodoTask = this.addNewTodoTask.bind(this);

    this.state = {
      todoList: INIT_TODOS,
      todoTask
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
      todoList: updatedTodoList,
    });
  }

  addNewTodoTask() {
    CounterApi.updateCounterSize(value).then(response => {
      console.log(response.data);
    });

  }

  render() {
    return (
      <Space direction="vertical">
        <Card
          title="To-Do List"
          style={{ width: 350, height: 180, background: "grey" }}
        >
          <Form>
            <Form.Item>
              <Input
                placeholder="+ Add New To-Do Task ..."
                size="small"
                type="text"
                value={this.state.todoTask}
              />
            </Form.Item>
            <Form.Item>
              <Button shape="circle" type="dashed" onClick={this.addNewTodoTask}>
                <PlusOutlined />
              </Button>
            </Form.Item>
          </Form>
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
