document.querySelector("#login").addEventListener("click",()=>{
    document.querySelector("#sign-div").style.display="block";
})

document.querySelector("#closein").addEventListener("click",()=>{
    document.querySelector("#sign-div").style.display="none";
})

document.querySelector("#accbtn").addEventListener("click",()=>{
    document.querySelector("#sign-div").style.display="none";
    document.querySelector("#signupdiv").style.display="block";
})

document.querySelector("#closeup").addEventListener("click",()=>{
    document.querySelector("#signupdiv").style.display="none";
})

document.querySelector("#sign-login").addEventListener("click",()=>{
    document.querySelector("#signupdiv").style.display="none";
    document.querySelector("#sign-div").style.display="block";
})

//    Register part

document.querySelector("#registerbtn").addEventListener("click",register);
 var userdata=JSON.parse(localStorage.getItem("userdatabase"))||[];
function register(){
   var firstname=document.querySelector("#fname").value;
   var lastname=document.querySelector("#lname").value;
   var email=document.querySelector("#email").value;
   var password=document.querySelector("#password").value;
   
   
   var usercred={
       fname:firstname,
       lname:lastname,
       emailId:email,
       pass:password,
       
   };

   userdata.push(usercred);
   localStorage.setItem("userdatabase",JSON.stringify(userdata));
   window.location.href="landing.html";
 }

     // login part

     document.querySelector("#loginbtn").addEventListener("click",login);
 var regduser=JSON.parse(localStorage.getItem("userdatabase"));
 
 function login(){
     var email=document.querySelector("#email").value;

     var password=document.querySelector("#password").value;

     let user_found=false;
     for(var i=0;i<regduser.length;i++){
         if(regduser[i].emailId===email && regduser[i].pass===password){
             user_found=true;
             window.location.href="account.html";

         }
     }
     if(user_found===false){
     alert("wrong credientials");
     }
 }


 // dropdown functionallity---->

 document.querySelector("#shop").addEventListener("mouseover",()=>{
     document.querySelector("#popupdivsec").style.display="none";
 document.querySelector("#popupdiv").style.display="block";
 })
 document.querySelector(".toggledisp").addEventListener("mouseleave",()=>{
 document.querySelector("#popupdiv").style.display="none";
 })

 document.querySelector("#learn").addEventListener("mouseover",()=>{
     document.querySelector("#popupdiv").style.display="none";
 document.querySelector("#popupdivsec").style.display="block";
 })
 document.querySelector(".toggledispsec").addEventListener("mouseleave",()=>{
 document.querySelector("#popupdivsec").style.display="none";
 })


 