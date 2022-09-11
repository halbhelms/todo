// Get all todos as a nodelist
const todosNL = document.querySelectorAll('li')

// Turn the nodelist into an array
const todosArr = Array.from(todosNL)

// Loop over each todo in the array, giving it a "click" event listener that opens alert
todosArr.forEach(todo => {
    todo.addEventListener('click', event => {
        alert('You clicked ' + event.target.innerText)
    })
})