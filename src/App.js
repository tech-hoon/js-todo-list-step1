import Component from "./lib/Component.js";
import TodoList from "./components/TodoList.js";
import CountContainer from "./components/CountContainer.js";

export default class App extends Component {
  setup() {
    const localStorageData = [];

    this.$state = {
      items: [{ id: 0, contents: "test", isChecked: false }],
    };
  }

  template() {
    return `
        <h1>TODOS</h1>
        <input id="new-todo-title" class="new-todo" placeholder="할일을 추가해주세요" autofocus />
         <main>
            <ul id="todo-list" class="todo-list"></ul>
            <div class="count-container"></div>
        </main>
    `;
  }

  mounted() {
    const $todoList = document.querySelector("#todo-list");
    const $countContainer = document.querySelector(".count-container");

    new TodoList($todoList, {
      items: this.$state.items,
    });
    new CountContainer($countContainer);
  }

  setEvent() {
    this.addEvent("keyup", "input", ({ key, target: { value } }) => {
      key === "Enter" &&
        this.setState({
          items: [...this.$state.items, { id: this.$state.items.length, contents: value, isChecked: false }],
        });
    });
  }

  appendList() {}
}
