//Variables

const addTask=document.getElementById('add-task');
const taskContainer=document.getElementById('task-container')
const inputTask=document.getElementById('input-task');

//Event Listner for Add button

addTask.addEventListener('click', function(){

    let task=document.createElement('div');
    task.classList.add('task');

    let li=document.createElement('li');
    li.innerText- `${inputTask.value}`;
    task.appendChild(li);

    let chechButton=document.createElement("button");
    chechButton.innerHTML='<i class="fa-solid fa-check"></i>';
    chechButton.classList.add('checkTask');
    task.appendChild(checkbutton);

    let deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deletebutton);

    if(inputTask.value===""){
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value="";

    chechButton.addEventListener('click', function(){

        chechButton.parentElement.style.textDecoration="line-through";
    });

    deleteButton.addEventListener('click', function(e){

        let target=e.target;

        target.parentElement.parentElement.remove();

    });
});
