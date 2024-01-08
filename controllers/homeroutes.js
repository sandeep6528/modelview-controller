const router = require('express').Router();

router.get("/",async (req,res)=>{
    try {
     res.render("homepage")   
    } catch (err) {
    console.error(err)
    res.status(500).json(err)    
    }
} )
router.get("/signup",async (req,res)=>{
    try {
     if(req.session.loggedIn) {
        res.redirect("/")
        return
     } 
     res.render("signup")
    } catch (err) {
        console.error(err)
        res.status(500).json(err)    
    }
})

router.get("/login",async (req,res)=>{
    try {
     if(req.session.loggedIn) {
        res.redirect("/")
        return
     } 
     res.render("login")
    } catch (err) {
        console.error(err)
        res.status(500).json(err)    
    }
})
router.get("/profile",async (req,res)=>{
   try {
    res.render("profile")
   } catch (err) {
    console.error(err)
    res.status(500).json(err)    

    
   }
})



module.exports=router