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
}