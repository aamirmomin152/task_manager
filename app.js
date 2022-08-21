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

  //Create li element
  const li = document.createElement('li');
  //Add class for styling
  li.className = 'collection-item';
  //Append the input from user to li child node
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement('a');
  //Add class for delete item
  link.className = 'delete-item secondary-content';
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append the link to li
  li.appendChild(link);

  //Append the li to the ul
  tasklist.appendChild(li);
  //Clear the input of the task
  taskInput.value = '';

  e.preventDefault();
}