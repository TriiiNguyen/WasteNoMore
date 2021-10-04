const router = require('express').Router();
const { Gardens, User } = require('../models');
const withAuth = require('../utils/auth');


// update routes to what we want to show on the home page
// create "explore page" potentially to load up garden DB

router.get('/', async (req, res) => {
  try {
    const gardenData = await Gardens.findAll({});

    // Serialize data so the template can read it
    const gardens = gardenData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      gardens, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/garden/:id', async (req, res) => {
  try {
    const gardenData = await Gardens.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['firstname', 'lastname'],
          as: 'host'
        },
      ],
    });

    const garden = gardenData.get({ plain: true });

    res.render('garden', {
      ...garden,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {model: Gardens, as: 'hostedGardens'}
      ]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// router.get('/donate', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/donate');
//     return;
//   }
  
//   res.render('login');
// })

module.exports = router;
