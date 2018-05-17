//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//initialize all event listeneres
loadEventListeners();

//load all event listener

function loadEventListeners(){

    //Add Task Event
    form.addEventListener('submit',addTask);

    //remove Task event
    taskList.addEventListener('click',removeTask);

    //Remove All Event
    clearBtn.addEventListener('click',removeAllTask);

    //Filter Event
    filter.addEventListener('keyup',filterTask);


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

    taskInput.value='';

    e.preventDefault();
}


//Remove task
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }

    e.preventDefault();
}
//Remove all Task
function removeAllTask(){
    //taskList.innerHTML="";


    //Faster
    while(taskList.firstChild){
           taskList.removeChild(taskList.firstChild);
    }
}

//Filter task
function filterTask(e){
    const text = e.target.value.toLowerCase();
        document.querySelectorAll('.collection-item').forEach(function(task){
            const itemText = task.firstChild.textContent.toLowerCase();
            if(itemText.indexOf(text) != -1){
               task.style.display = 'block';
            }else{
                task.style.display = 'none'; 
            }
     });
    e.preventDefault();
    }
   
    

    

