import Component from "../lib/Component.js";

export default class CounterContainer extends Component {
  template() {
    return `
          <span class="todo-count">총 <strong>0</strong> 개</span>
          <ul class="filters">
            <li>
              <a class="all selected" href="#">전체보기</a>
            </li>
            <li>
              <a class="active" href="#active">해야할 일</a>
            </li>
            <li>
              <a class="completed" href="#completed">완료한 일</a>
            </li>
          </ul>
          `;
  }
}
