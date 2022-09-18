// Create an array of todo items
let todos = []

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// Process a new todo item
function processNewTodo() {
    const newTodo = {}
    newTodo.task = document.querySelector('#todo-input').value
    newTodo.completed = false
    todos.push(newTodo)
    document.querySelector('#todo-input').value = ''
    persistTodos()
    displayTodos()
}

// Persist the todos array to local storage
function persistTodos() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Retrieve the todos array from local storage
function retrieveTodos() {
    const todosString = localStorage.getItem('todos')
    if (todosString) {
        todos = JSON.parse(todosString)
    } else {
        todos = []
    }
}

// Display the todo items
function displayTodos() { 
    const todoWrapper = document.createElement('div')
    todos.forEach(todo => {
        const todoDiv = document.createElement('div')
        // create checkbox
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = todo.completed
        checkbox.addEventListener('change', () => {
            todo.completed = !todo.completed
            persistTodos()
            if (todo.completed) {
                checkbox.parentElement.classList.add('completed')
            } else {   
                checkbox.parentElement.classList.remove('completed')
            }   
        })
        persistTodos()
        todoDiv.appendChild(checkbox)
        // create task
        const task = document.createElement('span')
        task.textContent = todo.task
        todoDiv.appendChild(task)
        todoWrapper.appendChild(todoDiv)
    })
    document.querySelector('#todo-list').innerHTML = ''
    document.querySelector('#todo-list').appendChild(todoWrapper)
}

// display the todos on page load
retrieveTodos()
displayTodos()
console.log(todos)