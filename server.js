//Let set our express js server app
const { error } = require('console');
const express=require('express');
const fs=require('fs');
const path=require('path');
const app=express();
const PORT=3000;


//Now let set up our middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Set up the static server file to frontend
app.use(express.static(__dirname));

//Now let handle our form submission

app.post('/subscribe', (req,res) =>{
    const {email} =req.body;
    if(!email){
        return res.status(400).json({error:'Email is required'});
    }


    /*Let improve our email validation
   const emailRegex=/^[^\s@] + [^\s@] +\.[^\s@]+$/;
   if(!emailRegex .test(email)){
    return res.status(400).json({error:'Invalid email format'});
   }*/




//Now let save our email to a file apprend
   try{
fs.appendFileSync(path.join(__dirname, 'emails.txt'), email + '\n');
res.json({message:'Subscribed successfully'});
   }
   catch(err){
    res.status(500).json({ error: 'Failed to save email' });
   }


});



app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});