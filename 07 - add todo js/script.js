// BEGIN FUNCTIONS

// Process a new todo item
function processNewTodo() {
    // get the value of the input field
    const newTodo = document.querySelector('#todo-input').value
    // clear the input field
    document.querySelector('#todo-input').value = ''
    // add the new todo to the todos array
    todos.push(newTodo)
    // display the todos
    displayTodos()
}

// Display the todo items
function displayTodos() {
    // create a ul element to hold individual todo items 
    const ul = document.createElement('ul')
    // loop through the todos array
    todos.forEach(todo => {
        // create a li element for each todo
        const li = document.createElement('li')
        // set the li innerText to the todo
        li.innerText = todo
        // add a click event listener to the li
        li.addEventListener('click', event => {
            // when clicked, produce an alert
            alert('You clicked ' + li.innerText)
        })
        // append the li to the ul
        ul.appendChild(li)
    })
    // clear the todo list
    document.querySelector('#todo-list').innerHTML = ''
    // append the ul to the todo list
    document.querySelector('#todo-list').appendChild(ul)
}

// END FUNCTIONS

// BEGIN MAIN

// Add event listener to the button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// Create an array of todo items
const todos = []

// END MAIN