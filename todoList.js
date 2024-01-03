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

    console.log(todoList)
  });