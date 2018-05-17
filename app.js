//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//initialize all event listeneres
loadEventListeners();

//load all event listener

function loadEventListeners(){

    //Add Task Event
    form.addEventListener('submit',addTask);
}

//Add Task
function addTask (e){

    if(taskInput.value===''){
        alert('Add something');
    }

    //create li
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';

    //create a text node appened to the li element
    li.appendChild(document.createTextNode(taskInput.value));
    
    //Add link to li
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to li
    li.appendChild(link);

    //Append the li to ul
    taskList.appendChild(li);



   

    e.preventDefault();
}