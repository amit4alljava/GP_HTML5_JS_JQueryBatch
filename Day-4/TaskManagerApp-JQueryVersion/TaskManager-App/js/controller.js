//window.addEventListener("load",init);
$(document).ready(init);
function init(){
    $("#add").click(addTask);
    $("#save").click(saveTask);
    $("#delete").click(deleteCompletedTask);
    $("#taskList").on("click", "li", toogleTask);
     //document.getElementById("add").addEventListener("click",addTask);
    //document.getElementById("save").addEventListener("click",saveTask);
    loadTask();
}
var taskId = 1;
function addTask(){
    /*var taskName = document.getElementById("taskName").value;
    var taskDesc = document.getElementById("taskDesc").value;*/
    var taskName = $("#taskName").val();
    var taskDesc = $("#taskDesc").val();
    taskOperation.addTask(taskId, taskName,taskDesc);

   /* var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.innerHTML=taskId+ " "+taskName+ " "+taskDesc;
    li.addEventListener("click",toogleTask);
    ul.appendChild(li);
*/
    $("<li></li>")
        .hide()

        .html(taskId+" "+taskName+" "+taskDesc)
        .appendTo("#taskList")
        //.prependTo("#taskList")
        .slideDown("slow");
    displayMessage("A new task is added");
    taskId++;
}
function displayMessage(msg){
    $("#divMessage")
        .html(msg)
        .slideDown('slow')
        .delay(3000)
        .slideUp('fast');
}

function toogleTask(event){
   // event.srcElement.classList.toggle("completedTask");
    $(this).toggleClass("completedTask");
}

function deleteCompletedTask(){
    $("#taskList > li.completedTask").fadeOut('slow', function(){
        $(this).remove();
    });
    displayMessage("Task Removed SuccessFully");
}

function loadTask(){
    var ul = document.getElementById("taskList");
    if(localStorage){
        if(localStorage.taskjson){
            var jsonTaskListArr = JSON.parse(localStorage.taskjson);
            taskOperation.taskList=jsonTaskListArr;
            taskId = taskOperation.taskList.length+1;
            jsonTaskListArr.forEach(function(taskObject,index){
                $("<li></li>")
                    .hide()

                    .html(taskObject.id+" "+taskObject.name+" "+taskObject.desc)
                    .appendTo("#taskList")
                    //.prependTo("#taskList")
                    .slideDown("slow");
                /*console.log("Task Object "+taskObject.id+" "+taskObject.name+" Index "+index);
                var li = document.createElement("li");
                li.innerHTML=taskObject.id + " "+taskObject.name+" "+taskObject.desc;
                if(taskObject.status){
                    li.classList.add("completedTask")
                }
                else{
                    li.classList.remove("completedTask");
                }*/

                //li.addEventListener("click",toogleTask);
                //ul.appendChild(li);
            });
        }
        else{
            doAjaxCall();
        }
    }
}
function saveTask(){
var taskList = taskOperation.getAllTask();
var i =0;
    $( "li" ).each(function( index ) {
        if ($(this).hasClass("completedTask")) {
            taskList[i].status = true;
        }
        else {
            taskList[i].status = false;
        }
        i++;
    });
    /*var ul = document.getElementById("taskList");
    for(var i = 0; i<ul.childNodes.length; i++)
    {
        if(ul.childNodes.item(i).classList.contains("completedTask")){
            taskList[i].status=true;
        }
        else{
            taskList[i].status=false;
        }
    }*/
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