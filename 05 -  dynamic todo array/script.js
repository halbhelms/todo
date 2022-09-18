// BEGIN MAIN

// Create an array of todo items
const todos = [
    "Take Fluffy to the vet",
    "Get birthday present for Anika",
    "Call Mom",
    "Register HP for summer camp",
    "Sign up for Carribean cruise",
]

// Create an unordered list element
const ul = document.createElement('ul')

// Loop through todos array...
todos.forEach(todo => {
    // Create a list item element
    const li = document.createElement('li')
    // Set the list item innerText to the todo
    li.innerText = todo
    // Add a click event listener to the list item
    li.addEventListener('click', event => {
        // When clicked, produce an alert
        alert('You clicked ' + li.innerText)
    })
    // Append the list item to the unordered list
    ul.appendChild(li)
})

// Find the HTML <div> with an id of "todo-list" and insert the unordered list into it
document.querySelector('#todo-list').appendChild(ul)

// END MAIN