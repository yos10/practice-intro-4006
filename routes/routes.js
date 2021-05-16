'use strict';

const express = require('express');
const router = express.Router();
const passport = require('../middleware/passport');
const indexController = require('../controllers/indexController');
const photosController = require('../controllers/photosController');
const usersController = require('../controllers/usersController');
const { ensureAuthenticated } = require('../middleware/ensureAuth');

/* GET home page. */
router.get('/', indexController.doGet);

router.get('/photos', photosController.doGet);
router.get('/photos/:title', photosController.printParams);

router.get('/users', ensureAuthenticated, usersController.doGet);

router.get('/login', usersController.login);
router.get('/logout', usersController.logout);

router.get(
  '/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  function (req, res) {}
);
router.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = router;
