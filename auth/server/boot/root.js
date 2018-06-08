'use strict';

module.exports = function (server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    router.get('/', server.loopback.status());
    server.use(router);

    server.models.accountService.count(process.env.ACCOUNT_SERVICE_BASEURL+'/agendaJobs').then(res=>{console.log('promise count',res);});

    server.models.accountService.count(process.env.ACCOUNT_SERVICE_BASEURL+'/agendaJobs',(err,body,resp)=>{
    	console.log('callback body',body);
    	//console.log('callback resp',resp);
    });
};
