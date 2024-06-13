/*let express = require("express");
let router = new express.router();
let user = require("./models/User")
router.post("/register",async(req,res)=>{
       let{userName,email,password}=req.body;
       if(!userName){
        res.send(500).json({
            message:"please enter your user name"
        })
       }
       else if(!email){
        res.send(500).json({
            message:"please enter your email"
        })
       }
       else if(!password){
        res.send(500).json({
            message:"please enter your password"
        })
       }
       try {
          let preuser= user.findOne({email:email});
          if(preuser){
            res.send(500).json({
                message:"email already exist"
            })
          }
          else if(password !== cpassword){
            res.send(500).json({
                message:"email already exist"
            })
          }
          else{
            
          }
       } catch (error) {
        
       }
})*/