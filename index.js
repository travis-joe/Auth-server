/**
 * Created by apple on 7/28/16.
 */
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT ||3090
const router = require('./router')
//app setup
app.use(morgan('combined'))
app.use(bodyParser.json({type:'*/*'}))
router(app)
//server setup
const server = http.createServer(app)
server.listen(port)
console.log('server is listening on:', port)