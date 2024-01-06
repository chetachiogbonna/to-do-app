const todoList = [];

const todoNameInput = document.querySelector('.js-name-input');
const todoDueDateInput = document.querySelector('.js-due-date-input');

function addTodo() {
  const todoName = todoNameInput.value;
  const todoDueDate = todoDueDateInput.value;

  if (todoName || (todoName && todoDueDate)) {
    todoList.push({
      todoName,
      todoDueDate
    });

    todoNameInput.value = '';
    todoDueDateInput.value = '';

    renderTodoList();
  }
}

document.querySelector('.js-add-to-do-button')
  .addEventListener('click', addTodo)
  

function renderTodoList() {
  let todoHTML = '';

  todoList.forEach((todo, index) => {
    const { todoName, todoDueDate } = todo;

    todoHTML += `
      <div class="todo-name"><input class="checkbox" type="checkbox">${todoName}</div>
      <div class="due-date">${todoDueDate}</div>
      <span title="See more" class="dot">
        <div class="update">
          <h4 class="delete-todo" title="Delete">Delete</h4>
          <h4 class="edit-todo" title="Edit">Edit</h4>
        </div>
      </span>
    `;
  });

  document.querySelector('.js-todo-container').innerHTML = todoHTML;

  document.querySelectorAll('.checkbox')
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
        renderTodoList();
      });
    });

  document.querySelectorAll('.edit-todo')
    .forEach((editTodo, index) => {
      editTodo.addEventListener('click', () => {

        todoNameInput.value = todoList[index].todoName;
        todoDueDateInput.value = todoList[index].todoDueDate;

        function addNewTodo() {
          const newTodoName = todoNameInput.value;
          const newTodoDueDate = todoDueDateInput.value;

          todoList[index].todoName = newTodoName;
          todoList[index].todoDueDate = newTodoDueDate;
          
          
          document.querySelector('.js-add-to-do-button').removeEventListener('click', addNewTodo);
          document.querySelector('.js-add-to-do-button').addEventListener('click', addTodo);
          
          todoNameInput.value = '';
          todoDueDateInput.value = '';
          
          renderTodoList();
        }
        
        document.querySelector('.js-add-to-do-button').removeEventListener('click', addTodo);
        document.querySelector('.js-add-to-do-button').addEventListener('click', addNewTodo);
      });
    });
}