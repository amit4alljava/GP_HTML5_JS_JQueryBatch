window.addEventListener("load",init);
function init(){
    document.getElementById("btn").addEventListener("click",doValidation);
}
function doValidation(){
nameValidation();
ageValidation();
    genderValidation();
}

function nameValidation(){
    document.getElementById("nameSpan").innerHTML="";

    var txtName = document.getElementById("txtName").value;
    if(!txtName){
        document.getElementById("nameSpan").innerHTML="Name Can't be Blank";
    }
    else
    if(txtName && !txtName.match(/^[a-zA-Z]+$/)){
        document.getElementById("nameSpan").innerHTML="Only Character Allowed";
    }
}

function ageValidation(){
    document.getElementById("ageSpan").innerHTML="";

    var txtAge = document.getElementById("txtAge").value;
    if(!txtAge){
        document.getElementById("ageSpan").innerHTML="Age Can't be Blank";
    }
    else
    if(txtAge && !txtAge.match(/^[0-9]+$/)){
        document.getElementById("ageSpan").innerHTML="Only Number Allowed";
    }
}

function genderValidation(){
    var isChecked = false;
    document.getElementById("genderSpan").innerHTML="";
    var gender = document.getElementsByName("gender");
    for(var i = 0 ; i<gender.length; i++){
        if(gender[i].checked){
             isChecked = true;
            break;
        }
    }
    if(!isChecked){
        document.getElementById("genderSpan").innerHTML="Select Gender";
    }

    /*if(!$("input:radio[name='gender']").is(":checked")){

    }*/
}