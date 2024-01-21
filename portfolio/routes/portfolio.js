var express = require('express');
var router = express.Router();

var projects = [
  {
    "name": "NetD 3201 Lab 6",
    "description": "An Asp.net application. Calculated gross pay, and paychecks for empolyees of inc inc. Shoutout Kyle Chapman.",
    "language":"C#",
    "image":"img(src='images/aye.gif' alt='')"
  },
  {
    "name": "Deliverable 3, WebD Enterprise",
    "description": "A college interface for enetering and viewing marks. Never got finished fully :( Darren is a G tho",
    "language":"Java"

  },
  {
    "name": "Webd 3201 Deliverable",
    "description": "Yknow what they say. Never Haggle Over Real Estate. This website was a real estate website, for searching local listings in durham. Had Functionality for agents and admins. Good Stuff. Shoutout Simon and Jesse.",
    "language":"PHP"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio', projectData: projects});
});

module.exports = router;
