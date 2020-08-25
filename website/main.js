'use strict'

const http = require('http');
const log4js = require('log4js');
const express = require('express');
const serveIndex = require("serve-index")

const host = "0.0.0.0";
const port = 8080
const logger = log4js.getLogger();
logger.level = "info"
const router = express();

router.use(serveIndex('./public'))
router.use(express.static('./public'))

const http_server = http.createServer(router);
logger.info(host, port)
http_server.listen(port, host);
