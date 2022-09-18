// BEGIN MAIN

// Get all todos as a nodelist
const todosNL = document.querySelectorAll('li')

// Turn the nodelist into an array
const todosArr = Array.from(todosNL)

// Loop over each todo in the array
todosArr.forEach(todo => {
    // Add a click event listener to each todo
    todo.addEventListener('click', event => {
        // When clicked, produce an alert
        alert('You clicked ' + event.target.innerText)
    })
})

// END MAIN