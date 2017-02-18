var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('../models/user.model');

// Define routes.
router.get('/',
	function(req, res) {
		res.render('index', {
			user: req.user
		});
	});

router.get('/login/',
	function(req, res) {
		res.render('login');
	});

router.post('/login/',
	passport.authenticate('local', {
		failureRedirect: '/login/'
	}),
	function(req, res) {
		res.redirect('/');
	});

router.get('/logout/',
	function(req, res) {
		req.logout();
		res.redirect('/');
	});
//
// router.get('/profile',
// 	require('connect-ensure-login').ensureLoggedIn(),
// 	function(req, res) {
// 		res.render('profile', {
// 			user: req.user
// 		});
// 	});

module.exports = router;
