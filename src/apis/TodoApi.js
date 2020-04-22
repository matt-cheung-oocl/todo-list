import axios from "axios";

class TodoApi {
  static getTodoList() {
    const COUNTER_API_BASE_URI =
      "https://5e9ec500fb467500166c4658.mockapi.io/todos";
    return axios.get(COUNTER_API_BASE_URI);
  }

  static addNewTodoTask(newTask) {
    const COUNTER_API_BASE_URI =
      "http://5e9ec500fb467500166c4658.mockapi.io/todos";
    return axios.post(COUNTER_API_BASE_URI, { content: newTask });
  }
}
export default TodoApi;
