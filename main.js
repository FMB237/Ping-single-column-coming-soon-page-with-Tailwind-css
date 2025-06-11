//Let add some Js code for the form validation

document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("input-form").addEventListener('submit',function(event){
   event.preventDefault();

    const email=document.getElementById("email").value.trim();
    let errormsg='';
    const NofityBtn=document.getElementById('NofityBtn');
 
   if(!email.includes("@") || !email.includes('.')){
     errormsg="Please provide a valid email address";
   }
   
   if(email==""){
     errormsg="Whoops! It looks like you forgot to add your email";
   }

   if(errormsg){
    document.getElementById('error').innerHTML=errormsg;
    document.getElementById('email').style.border="2px solid red";
   }
   else{
    document.getElementById("error").innerHTML="";
    document.getElementById('email').style.border="2px solid green";
   }

  });

  



});