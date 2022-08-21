// Define UI variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  //Add task event
  form.addEventListener('submit', addTask);
}

//Add task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task')
  }

  e.preventDefault();
}