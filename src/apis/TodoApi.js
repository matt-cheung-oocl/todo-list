import axios from "axios";

class TodoApi {
  static getTodoList() {
    const COUNTER_API_BASE_URI =
      "https://5e9ec500fb467500166c4658.mockapi.io/todos";
    return axios.get(COUNTER_API_BASE_URI);
  }

  static updateCounterSize(newTask) {
    const COUNTER_API_BASE_URI =
      "https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/1";
    return axios.put(COUNTER_API_BASE_URI, { size });
  }
}
export default TodoApi;
