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
      <div class="todo-name"><input type="checkbox">${todoName}</div>
      <div class="due-date">${todoDueDate}</div>
      <span title="See more" class="dot">
        <div class="update">
          <h4 class="delete-todo">Delete</h4>
          <h4>Edit</h4>
        </div>
      </span>
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


  document.querySelectorAll('.dot')
    .forEach((spanElem) => {
      let isActive = true;
      spanElem.addEventListener('click', () => {

        if(isActive) {
          spanElem.classList.add('dot-is-active');

          spanElem.removeAttribute('title', 'see more')
          spanElem.setAttribute('title', 'Hide')
          
          isActive = false;
        } else {
          spanElem.classList.remove('dot-is-active');
          
          spanElem.removeAttribute('title', 'Hide')
          spanElem.setAttribute('title', 'See more')

          isActive = true;
        }
      });
    });

  document.querySelectorAll('.delete-todo')
    .forEach((deleteTodo, index) => {
      deleteTodo.addEventListener('click', () => {
        todoList.splice(index, 1);
        addTodo();
      });
    });
}
