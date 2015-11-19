window.addEventListener("load",init);

function init(){
     document.getElementById("add").addEventListener("click",addTask);
    document.getElementById("save").addEventListener("click",saveTask);
    loadTask();
}
var taskId = 1;
function addTask(){
    var taskName = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;
    taskOperation.addTask(taskId, taskName,taskDesc);

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML=taskId+ " "+taskName+ " "+taskDesc;
    li.addEventListener("click",toogleTask);
    ul.appendChild(li);

    taskId++;
}
function toogleTask(event){
    event.srcElement.classList.toggle("completedTask");
}
function loadTask(){
    var ul = document.getElementById("taskList");
    if(localStorage){
        if(localStorage.taskjson){
            var jsonTaskListArr = JSON.parse(localStorage.taskjson);
            taskOperation.taskList=jsonTaskListArr;
            taskId = taskOperation.taskList.length+1;
            jsonTaskListArr.forEach(function(taskObject,index){
                console.log("Task Object "+taskObject.id+" "+taskObject.name+" Index "+index);
                var li = document.createElement("li");
                li.innerHTML=taskObject.id + " "+taskObject.name+" "+taskObject.desc;
                if(taskObject.status){
                    li.classList.add("completedTask")
                }
                else{
                    li.classList.remove("completedTask");
                }

                li.addEventListener("click",toogleTask);
                ul.appendChild(li);
            });
        }
        else{
            doAjaxCall();
        }
    }
}
function saveTask(){
var taskList = taskOperation.getAllTask();

    var ul = document.getElementById("taskList");
    for(var i = 0; i<ul.childNodes.length; i++)
    {
        if(ul.childNodes.item(i).classList.contains("completedTask")){
            taskList[i].status=true;
        }
        else{
            taskList[i].status=false;
        }
    }
    taskOperation.taskList=taskList;
    var jsonString = JSON.stringify(taskList);
    if(localStorage){
    localStorage.taskjson = jsonString;
        alert("Data Store....");
    }
    else
    {
        alert("Your Browser Doesn't Support Local Storage...");
    }
}