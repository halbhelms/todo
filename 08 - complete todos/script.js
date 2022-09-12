// Create an array of todo items
const todos = []

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// Process a new todo item
function processNewTodo() {
    const newTodo = {}
    newTodo.task = document.querySelector('#todo-input').value
    newTodo.completed = false
    todos.push(newTodo)
    document.querySelector('#todo-input').value = ''
    displayTodos()
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
            if (todo.completed) {
                checkbox.parentElement.classList.add('completed')
            } else {   
                checkbox.parentElement.classList.remove('completed')
            }   
        })
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