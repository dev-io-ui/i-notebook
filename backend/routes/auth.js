const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser =require('../middleware/fetchuser');
const JWT_SECRET = 'inotebook.com';

// Route 1 :create a user using :POST "/api/auth/". not require authentication
router.post('/createuser', [
  body('name', 'Enter valid name').isLength({ min: 3 }),
  body('email', 'Enter valid email').isEmail(),
  body('password', 'password must be atlist 5 character').isLength({ min: 5 })
], async (req, res) => {
  //if there is error return bad request and error
  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.send({ errors: result.array() });
  }

  //check if this email exist alrady 
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ error: 'sorry email alrady exixst...' });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    res.json({ authtoken });

    //  res.json({user});
  } catch (error) {
    res.status(500).send("some error occured");

  }

})

// Route 2: authenticate user using POST "/api/auth/login"

router.post('/loginuser', [body('email', 'Enter valid email').isEmail(),
body('email', 'Password can not be blank').exists()
], async (req, res) => {

  const result = validationResult(req);
  if (!result.isEmpty()) {
    res.send({ errors: result.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'please enter correct credintial' });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: 'please enter correct credintial' });
    }


    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);

    res.json(authtoken);

  } catch (error) {

    res.status(500).send("Internal Server error");

  }
})

// Route 3 : authenticate user using POST "/api/auth/getuser , login requireed"
router.post('/getuser',fetchuser, async (req, res) => {

  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send({user});


  } catch (error) {
    res.status(500).send("Internal Server error");

  }

})


module.exports = router