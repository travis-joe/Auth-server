/**
 * Created by apple on 8/2/16.
 */
const passport = require('passport')
const User = require('../models/user')
const config = require('../config')
const JWT = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt