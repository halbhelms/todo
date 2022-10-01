// VARIABLES
// ----------------------------------
let todos               = []
let selectedCategory    = 0
let nextId              = 0

// FUNCTIONS
// ----------------------------------
function addToDo() {
  // create a new todo object
  const newTodo = {
    id: nextId(),
    task: document.querySelector('#todo-input').value,
    category: document.querySelector('#category-select').value,
    completed: false
  }
  // add the new todo to the todos array
  todos.push(newTodo)
  // clear the todo input
  document.querySelector('#todo-input').value = ''
  // display the todos
  displayTodos()
}

function changeCategory(event) {

}

function nextId() {
  return ++nextId
}

function persistToDos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function retrieveToDos() {
  const todosString = localStorage.getItem('todos')
  if (todosString) {
    todos = JSON.parse(todosString)
  } else {
    todos = []
  }
  displayTodos()
}