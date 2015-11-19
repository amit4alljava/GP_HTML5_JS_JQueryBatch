window.addEventListener("load",init);
function init(){
document.getElementById("greetbt")
    .addEventListener("click",greetMessage);
}
function greetMessage(){
    var txtName = document.getElementById("txtName");
    if(txtName) {
        if(txtName.value) {
            document.getElementsByTagName("div")[0]
                .children[0].children[0].innerHTML = txtName.value;
        }
    }
}