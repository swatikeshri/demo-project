function iconClick(){
    location.reload();
}
function forgotPassword(){
    alert("Page under construction...Coming soon!!!");
} 
function createAccount(){
    alert("Page under construction...Coming soon!!!");
}
function logIn(){
   debugger;
    var uName=document.getElementById("username");
    var pass=document.getElementById("password");
    if(!uName.value && !pass.value){
        alert("Please enter the username and password.");
    }
    else if(!uName.value){
        alert("Please enter the username.");
        document.getElementById("username").focus();
    }
    else if(!pass.value){
        alert("Please enter the password.");
        document.getElementById("password").focus();
    }
    else{
        alert("Logged in but the page is not built yet. Stay tuned!!!");
        uName.value="";
        pass.value="";
    }
}