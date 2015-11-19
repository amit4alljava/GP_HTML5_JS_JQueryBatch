function Task(id , name ,desc,status){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.status = status;
}

var taskOperation = {
    taskList :[],
    addTask:function(id,name,desc){
        var taskObject = new Task(id,name,desc,false);
        this.taskList.push(taskObject);
    },
    getAllTask:function(){
        return this.taskList;
    }


}