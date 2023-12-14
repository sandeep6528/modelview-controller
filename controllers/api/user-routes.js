const router = require('express').Router();
const { Users } = require('../../models');

router.post("/",async (req,res)=>{
    try {
        const signup=await Users.create({
            username: req.body.username,
      password: req.body.password,
        })
        req.session.save(()=>{
            req.session.userId = signup.id;
      req.session.username = signup.username;
      req.session.loggedIn = true;
      res.json(signup)
        })
    } catch (error) {
      console.error(error)
      res.status(500).json(error)

    }
})
router.post('/login', async (req, res) => {
    try {
      const user = await Users.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      const validPassword = user.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'No user account found!' });
        return;
      }
  
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
  
        res.json({ user, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json({ message: 'No user account found!' });
    }
  });


module.exports=router