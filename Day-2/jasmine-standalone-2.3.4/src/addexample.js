function add(){
    var sum = 0;
    var d = 0;
    for(var i = 0; i<arguments.length; i++){
        if(typeof arguments[i]==="function"){
            d  = arguments[i]();
        }
        else{
            d = arguments[i];
        }
        sum = sum + d;
    }
    return sum;
}