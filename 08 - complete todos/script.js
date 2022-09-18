// BEGIN FUNCTIONS

// Create a random id
function createRandomId() {
    return Math.floor(Math.random() * 100000)
}

// Process a new todo item
function processNewTodo() {
    // create a new todo object
    const newTodo = {}
    // add the task property, id
    newTodo.id = createRandomId()
    // add the task property, task, from the input
    newTodo.task = document.querySelector('#todo-input').value
    // add the task property, completed (default to false)
    newTodo.completed = false
    // add the new todo to the todos array
    todos.push(newTodo)
    // clear the input
    document.querySelector('#todo-input').value = ''
    // display the todos
    displayTodos()
}

// Display the todo items
function displayTodos() { 
    // create a wrapper div for todos
    const todoWrapper = document.createElement('div')
    // loop through the todos array
    todos.forEach(todo => {
        // create a div for each todo
        const todoDiv = document.createElement('div')
        // create checkbox for each todo
        const checkbox = document.createElement('input')
        // set the checkbox type to checkbox
        checkbox.type = 'checkbox'
        // set the checkbox checked property to the todo completed property
        checkbox.checked = todo.completed
        // set the checkbox id to the todo id
        checkbox.id = todo.id
        // add an event listener to the checkbox
        checkbox.addEventListener('change', toggleCompleted)
        // append the checkbox to the todoDiv
        todoDiv.appendChild(checkbox)
        // create task for each todo
        const task = document.createElement('span')
        // set the task innerText to the todo task property
        task.innerText = todo.task
        // append the task to the todoDiv
        todoDiv.appendChild(task)
        // append the todoDiv to the todoWrapper
        todoWrapper.appendChild(todoDiv)
    })
    // clear the todo list
    document.querySelector('#todo-list').innerHTML = ''
    // append the todoWrapper to the todo list
    document.querySelector('#todo-list').appendChild(todoWrapper)
}

function toggleCompleted(event) {
    // find the todo item in the todos array based on the id of the checkbox
    const foundTodo = todos.find(todo => todo.id === parseInt(event.target.id))
    // toggle the completed property
    foundTodo.completed = !foundTodo.completed
    // update the class of the parent div
    if (foundTodo.completed) {
        event.target.parentElement.classList.add('completed')
    } else {   
        event.target.parentElement.classList.remove('completed')
    } 
    console.log(todos)
}

// END FUNCTIONS

// BEGIN MAIN

// Create an array of todo items
const todos = []

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// END MAIN