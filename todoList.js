const todoList = [];

document.querySelector('.js-add-to-do-button')
  .addEventListener('click', () => {

    const todoNameInput = document.querySelector('.js-name-input');
    const todoName = todoNameInput.value;

    const todoDueDateInput = document.querySelector('.js-due-date-input');
    const todoDueDate = todoDueDateInput.value;

    todoList.push({
      todoName,
      todoDueDate
    });

    todoNameInput.value = '';
    todoDueDateInput.value = '';

    addTodo();
  });

function addTodo() {
  let todoHTML = '';

  todoList.forEach(todo => {
    const { todoName, todoDueDate } = todo;

    todoHTML += `
      <div class="todo-name-container">
        <input type="checkbox">
        <div class="todo-name">${todoName}</div>
      </div>
      <div class="due-date">${todoDueDate}</div>
    `;
  });

  document.querySelector('.js-todo-container').innerHTML = todoHTML;

  document.querySelectorAll('input[type="checkbox"]')
    .forEach((checkbox, index) => {
      let isChecked = true;

      checkbox.addEventListener('click', () => {
        if (isChecked) {
          document.querySelectorAll('.todo-name')[index].style.textDecoration = "line-through";
          document.querySelectorAll('.due-date')[index].style.textDecoration = "line-through";

          isChecked = false;
        } else {
          document.querySelectorAll('.todo-name')[index].style.textDecoration = "none";
          document.querySelectorAll('.due-date')[index].style.textDecoration = "none";

          isChecked = true;
        }
      });
    });
}
