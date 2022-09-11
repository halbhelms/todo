// Create an array of todo items
const todos = []

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// Process a new todo item
function processNewTodo() {
    const newTodo = document.querySelector('#todo-input').value
    document.querySelector('#todo-input').value = ''
    todos.push(newTodo)
    displayTodos()
}

// Display the todo items
function displayTodos() { 
    const ul = document.createElement('ul')
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.innerText = todo
        li.addEventListener('click', event => {
            alert('You clicked ' + li.innerText)
        })
        ul.appendChild(li)
    })
    document.querySelector('#todo-list').innerHTML = ''
    document.querySelector('#todo-list').appendChild(ul)
}