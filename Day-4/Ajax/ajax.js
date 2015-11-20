var ajaxObject ={
    type: "GET", //The type of HTTP method (post, get, etc)
    url: "tasks.json?taskId=1001", //The URL from the form element where the AJAX request will be sent
    dataType: "json",
    async:true,
    data: $( "#loginform" ).serialize()

}
function doAjaxCall(){
var promise = $.ajax(ajaxObject);
promise.success(ajaxSuccess);
promise.error(ajaxError);
}
function ajaxSuccess(response){
    localStorage.taskjson=response;
    alert("Response "+response[0]);
    var json = JSON.stringify(response);
    localStorage.taskjson = json;

    //var taskListData = JSON.parse(localStorage.taskjson);
    //console.log("Task List Data ",taskListData);
    taskOperation.taskList=JSON.parse(localStorage.taskjson);
    taskOperation.taskList.forEach(function(taskListObject,index){
        $("<li></li>")
            .hide()
            .html(taskListObject.id+" "+taskListObject.name+" "+taskListObject.desc)
            .appendTo("#taskList")
            .show(1000);

    });

}
function ajaxError(promiseObject,errorCode, error){
    alert("Error in Ajax Call "+promiseObject +" "+errorCode+" "+error);
}

/*
function doAjaxCall(){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
    xmlHttpRequest.open("GET", "tasks.json", true);
    xmlHttpRequest.send(null);
}

function getReadyStateHandler(xmlHttpRequest) {

    // an anonynous function returned
    // it listens to the XMLHttpRequest instance
    return function() {
        console.log("Ajax Call Start "+xmlHttpRequest.readyState);
        if (xmlHttpRequest.readyState == 4) {
            if (xmlHttpRequest.status == 200) {

                localStorage.taskjson=xmlHttpRequest.responseText;

                var ulTag = document.getElementById("taskList");
                var taskListData = JSON.parse(localStorage.taskjson);
                //var taskListData = localStorage.taskjson;
                taskOperation.taskList=taskListData;
                // Code for Loading the Data
                taskListData.forEach(function(taskListObject,index){

                    var liTag = document.createElement("li");

                    liTag.innerHTML=taskListObject.id+" "+ taskListObject.name+" : "+taskListObject.desc;
                    if(taskListObject.status){
                        liTag.classList.add("completeTask");
                    }
                    ulTag.appendChild(liTag);
                    liTag.addEventListener("click",toogleTask);
                });
                //document.getElementById("divId").innerHTML = xmlHttpRequest.responseText;
            } else {
                alert("Http error " + xmlHttpRequest.status + ":" + xmlHttpRequest.statusText);
            }
        }
    };
}*/
