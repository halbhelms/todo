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
    // creating a list item element for each array entry...
    // attaching an event listener to it and...
    // placing it in the unordered list
todos.forEach(todo => {
    const li = document.createElement('li')
    li.innerText = todo
    li.addEventListener('click', event => {
        alert('You clicked ' + li.innerText)
    })
    ul.appendChild(li)
})

// Find the HTML <div> with an id of "todo-list" and insert the unordered list into it
document.querySelector('#todo-list').appendChild(ul)
