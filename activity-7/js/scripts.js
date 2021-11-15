function getEl(toGet) {
    return document.getElementById(toGet);
}

//this array holds the tasks
var tasks = [];

//enum for task status
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task class
class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}

//function used to created new tasks and add to DOM
function addTaskElement(task) {
    //create the elements
    var listEl = getEl('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);
    taskEl.appendChild(textEl);
    listEl.appendChild(taskEl);
}

//click handler for adding new tasks
function addTask(event) {
    var inputEl = getEl('input-task');

    if (inputEl.value != '') {
        var id = 'item-' + tasks.length;

        //create new task and add to array
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add to DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

//click handler for completing tasks
function completeTask(event) {
    var taskEl = event.target;
    var id = taskEl.id;

    //loop through tasks and find id that needs to be update to completed
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //move task to completed list
    taskEl.remove();
    getEl('completed-list').appendChild(taskEl);
}


//function to init app
function init() {
    //when button is clicked, add task
    getEl('add-task').onclick = addTask;
    
    //when task is clicked, add to completed task
    getEl('active-list').onclick = completeTask;
}

init();