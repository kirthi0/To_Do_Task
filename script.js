document.querySelector('#newtask').innerHTML += `
<div class = "newtask">
    <input type="text" placeholder="Add a new task">
            <button>
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
</div>
`;

document.querySelector(".newtask button").onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class = "task">
            <span id = "taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa fa-minus-circle" aria-hidden="true"></i>                
            </button>
        </div>
        `;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        } 

        var tasks = document.querySelectorAll(".task");
        for(var i = 0; i < tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }            
        }

        document.querySelector("#newtask input").value = "";
    }
}