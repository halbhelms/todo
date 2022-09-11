// Create an array of todo items
const todos = []

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

// Process a new todo item
function processNewTodo() {
    // Get the new todo item from the text box
    const newTodo = document.querySelector('#todo-input').value
    document.querySelector('#todo-input').value = ''
    todos.push(newTodo)
    displayTodos()
}

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)