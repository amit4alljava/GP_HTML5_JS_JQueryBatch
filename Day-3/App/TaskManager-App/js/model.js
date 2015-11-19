function Task(id , name ,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
}

var taskOperation = {
    taskList :[],
    addTask:function(id,name,desc){
        var taskObject = new Task(id,name,desc);
        this.taskList.push(taskObject);
    },
    getAllTask:function(){
        return this.taskList;
    }


}