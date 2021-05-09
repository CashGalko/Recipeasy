const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, SavedRecipe, Recipe } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(dbUserData);
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    else {
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userID = dbUserData.id;
        req.session.userName = dbUserData.username

        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });

      })
    };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Update user password
router.put('/password', async (req, res) => {
  try {
    const dbPassData = await User.findOne({
      where: {
        id: req.session.userID
      },
    });
    console.log(dbPassData);
    

    const passValidate = await dbPassData.checkPassword(req.body.currentPass);

    if (!passValidate) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }
    const newPass = await bcrypt.hash(req.body.password, 10);
    const passUpdate = await User.update(
      {
        password: newPass,
      },
      {
        where: {
          id: req.session.userID,
        }
      }
    );
    res.status(200).json(passUpdate);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/current', async (req, res) => {
  try {
    console.log("Searching for all recipes for User: " + req.session.userID);
    const savedData = await User.findOne({
      include: [{ model: Recipe }],
      where: {
        id: req.session.userID,
      }

    });

    res.status(200).json(savedData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
