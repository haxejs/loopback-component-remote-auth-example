'use strict';
const basicAuth = require('express-basic-auth')

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  server.use(basicAuth({
	  users: { 'admin': 'supersecret' },
	  challenge: true,
      realm: 'Imb4T3st4pp'
  }));
};
