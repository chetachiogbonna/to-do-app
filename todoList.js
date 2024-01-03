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
        <div>${todoName}</div>
      </div>
      <div class="due-date-container">${todoDueDate}</div>
    `;
  });

  document.querySelector('.js-todo-container').innerHTML = todoHTML;
}
