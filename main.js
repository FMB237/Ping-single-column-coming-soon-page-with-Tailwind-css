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
    //Let send some backend
    fetch('/subscribe',{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email})
    })
    .then(res=>res.json())
    .then(data =>{
      if(data.error){
        document.getElementById('error').innerHTML=data.error;
        document.getElementById('email').style.border= "2px solid red";
      }
      else{
           document.getElementById('error').innerHTML = "Subscribed!";
           document.getElementById('error').style.color="green";
           document.getElementById('error').style.fontSize="1.2rem";
        document.getElementById('email').style.border = "2px solid green";
      }
    })
    .catch(()=>{
      document.getElementById('error').innerHTML="An error occured";
      document.getElementById('email').style.border="2px solid red";
    })
   }

  });
    

});