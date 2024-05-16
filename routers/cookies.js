const express = require('express');
const SendCookie = require('../controllers/cookies/sendCookies');
const SendSecureCookie = require('../controllers/cookies/sendSecureCookies');
const ShowCookies = require('../controllers/cookies/showCookies');
const DecodeCookies = require('../controllers/cookies/decodeCookies');
const ClearCookies = require('../controllers/cookies/clear');
const Timer = require('../middlewares/timer');

const cookiesRouter = express.Router();

cookiesRouter.get('/', Timer, SendCookie);
cookiesRouter.get('/secure', Timer, SendSecureCookie);
cookiesRouter.get('/show', ShowCookies);
cookiesRouter.get('/decode', DecodeCookies);
cookiesRouter.get('/clear', ClearCookies);

module.exports = cookiesRouter;