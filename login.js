
//       function signin(){
// document.getElementById("signin_form").style="display:block";
// document.getElementById("signup_form").style="display:none";
//       }
//       function sign_up(){
// document.getElementById("signup_form").style="display:block";
// document.getElementById("signin_form").style="display:none";
//       }

$(document).ready(function () {

$("#signin").click(function () {
    $("#signin_form").slideToggle();
    $("#signup_form").hide();
    $("#side_hl").slideToggle();
    $("#side_hs").hide()
   })
})
$(document).ready(function () {

    $("#for_signup").click(function () {
        $("#signup_form").slideToggle();
        $("#signin_form").hide();
        $("#side_hs").slideToggle();
        $("#side_hl").hide()
       })
    })
    
     
function for_signup(){
let name=document.getElementById("get_name").value;
let email_s=document.getElementById("email_get").value;
let pass=document.getElementById("passcode").value;

if(!name){
  document.getElementById("alert_n").style="color:red";
  document.getElementById("alert_n").innerHTML="Please fill out this field!"
}

else if(name.length<=2){
  document.getElementById("alert_n").style="color:red";
  document.getElementById("alert_n").innerHTML="username must have 3 characters or more"
}
else{
  document.getElementById("alert_n").innerHTML=" ";
  window.location.href="./index.html";
  alert("Welcome"+" "+name)
}


if(!email_s){
  document.getElementById("alert_em").style="color:red";
  document.getElementById("alert_em").innerHTML="Please fill out this field!"
}
else{
  document.getElementById("alert_em").innerHTML=" "
}


if(!pass){
  document.getElementById("alert_pas").style="color:red";
  document.getElementById("alert_pas").innerHTML="Please fill out this field!"
}
else if (pass.length<=5){
  document.getElementById("alert_pas").style="color:red";
  document.getElementById("alert_pas").innerHTML="passcode must have 6 characters or more"
} 
else {
  document.getElementById("alert_pas").innerHTML=" "
}
}
// function registeruser(name, email, password) {
//     let users = localStorage.getItem("users");
//     users = JSON.parse(users);
//     if (!users) {
//       users = [];
//     }
//     users = [...users, { name, email, password }];
//     localStorage.setItem("users",JSON.stringify(users));
//   } 


 function for_login() {
  let name=document.getElementById("get_name").value;
 const email_add = document.getElementById("get_email").value;
 const passcode = document.getElementById("get_pass").value;


 if (!email_add) {
 document.getElementById("alert_e").style = "color:red";
 document.getElementById("alert_e").innerHTML ="Please fill out this field!"
 } 
 else {
          document.getElementById("alert_e").innerHTML = "";
          window.location.href="./index.html";
          alert("Welcome Back"+" "+name)
        }

        if (!passcode) {
          document.getElementById("alert_p").style = "color:red";
          document.getElementById("alert_p").innerHTML =
            "Please fill out this field!";
        } else {
          document.getElementById("alert_p").innerHTML = " ";
        }

        // if (email_add && passcode) {
        //   let users = localStorage.getItem("users");
        //   users = JSON.parse(users);
        //   if (!users) {
        //     users = [];
        //   }
        //   const loggedIn = users.filter((item, index) => {
        //     const foundUser =item.email == email_add && item.password == passcode;
        //     return foundUser;
        //   });

        //   if (loggedIn.length == 0) {
        //     alert("user not found");
        //   } else {
        //     alert(`Welcome ${loggedIn[0].name}`);
        //   }
        // }
      }

    
  