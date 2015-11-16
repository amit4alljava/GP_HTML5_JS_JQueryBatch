window.addEventListener("load",init);
function init(){
    document.getElementById("addbt").addEventListener("click",doOperation);
    document.getElementById("subtractbt").addEventListener("click",doOperation);
    document.getElementById("multiplybt").addEventListener("click",doOperation);
    document.getElementById("dividebt").addEventListener("click",doOperation);

}
function doOperation(event){
    var firstNo = document.getElementById("firstNum").value;
    var secondNo = document.getElementById("secondNum").value;
    firstNo = isNaN(parseInt(firstNo))?0:parseInt(firstNo);
    secondNo = isNaN(parseInt(secondNo))?0:parseInt(secondNo);
    var operationName = event.srcElement.getAttribute("data-operation");
    console.log("Button Value is ",operationName);
    var result = eval(firstNo + operationName + secondNo);
    document.getElementById("result").innerHTML = result;
    //calcObject[operationName](firstNo,secondNo);
    /*if(operationName==="Add"){
        add(firstNo,secondNo);
    }
    else
    if(operationName==="Subtract"){
        subtract(firstNo,secondNo);
    }
    else
    if(operationName==="Multiply"){
        multiply(firstNo,secondNo);
    }
    else
    if(operationName==="Divide"){
        divide(firstNo,secondNo);
    }*/

}

var calcObject = {add:add,subtract:subtract,multiply:multiply,divide:divide};

function add(firstNo,secondNo){

    document.getElementById("result").innerHTML=firstNo + secondNo;
}
function subtract(firstNo,secondNo){

    document.getElementById("result").innerHTML=firstNo - secondNo;
}
function multiply(firstNo,secondNo){
      document.getElementById("result").innerHTML=firstNo * secondNo;
}
function divide(firstNo,secondNo){
    document.getElementById("result").innerHTML=firstNo / secondNo;
}
