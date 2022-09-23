// BEGIN FUNCTIONS

// Save the todos array to local storage
function saveTodos() {
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
    displayTodos()
}

// Create an incrementing id
const id = 0
function getId() {
    return id++
}

// Process a new todo item
function processNewTodo() {
    // create a new todo object
    const newTodo = {}
    // add the task property, id
    newTodo.id = getId()
    // add the task property, task, from the input
    newTodo.task = document.querySelector('#todo-input').value
    // add the task property, category, from the select
    newTodo.category = document.querySelector('#category-select').value
    // add the task property, completed (default to false)
    newTodo.completed = false
    // add the new todo to the todos array
    todos.push(newTodo)
    // save the todos array to local storage
    saveTodos()
    // clear the text input
    document.querySelector('#todo-input').value = ''
    // clear the category input
    document.querySelector('#category-select').selectedIndex = 0
    // display the todos
    displayTodos()
}

// Display the todo items
function displayTodos(selectedTodos=todos) { 
    // create a wrapper div for todos
    const todoWrapper = document.createElement('div')
    // loop through the selectedTodos
    selectedTodos.forEach(todo => {
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
        // create category for each todo
        const category = document.createElement('span')
        // set the category innerText to the todo category property
        category.innerText = `  : ${todo.category}`
        // append the category to the todoDiv
        todoDiv.appendChild(category)
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
    // update the class of the parent element
    if (foundTodo.completed) {
        event.target.parentElement.classList.add('completed')
    } else {   
        event.target.parentElement.classList.remove('completed')
    } 
}

function selectTodosForCategory(event) {
    // find the category that was selected
    const selectedCategory = event.target.id
    // filter the todos array based on the selected category
    const filteredTodos = todos.filter(todo => todo.category === selectedCategory)
    // set selectedTodos to the filtered todos
    selectedTodos = filteredTodos
    displayTodos(filteredTodos)
}

function allTodosForCategory(event) {
    displayTodos()
}

// END FUNCTIONS

// BEGIN MAIN


// Add event listener to the Add Todo button
document.querySelector('#todo-button').addEventListener('click', processNewTodo)

// Add event listener to the individual category buttons
document
    .querySelectorAll('.category-select-button')
    .forEach(button => {
        button.addEventListener('click', selectTodosForCategory)
    })

// Add event listener to the all category button
document
    .querySelectorAll('.category-all-button')
    .forEach(button => {
        button.addEventListener('click', allTodosForCategory)
    })

// Create todos array
let todos = []

// Retrieve the todos array from local storage
retrieveTodos()

// END MAIN