import Component from "../lib/Component.js";

export default class TodoList extends Component {
  setup() {}

  template() {
    const { items } = this.$props;

    return `${items
      .map(({ id, contents, isChecked }) => {
        return `
            <li id=${id}>
                <div class="view">
                    <input class="toggle" type="checkbox"/>
                    <label class="label">${contents}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value=${contents}></input>
            </li>
        `;
      })
      .join("")}`;
  }

  setEvent() {
    this.addEvent("dblclick", ".view", ({ target }) => {
      target.parentNode.parentNode.classList = "editing";
    });

    this.addEvent("keyup", ".edit", ({ key, target }) => {
      key === "Escape" && (target.parentNode.classList = "");
    });
  }
}
