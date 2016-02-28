'use strict';

module.exports = function (app) {

   app.route('/info')
		.get(function (req, res) {
			res.status(200).send(showHeaderInfo(req));
		});

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

	var showHeaderInfo = function(req) {
		var ip = req.ip;
		var pos1 = ip.lastIndexOf(":");
		ip = ip.substring(pos1);

		var lang = req.header('Accept-Language');
		pos1 = lang.indexOf(',');
		lang = lang.substring(0,pos1);

		var agent = req.header('User-Agent');
		pos1 = agent.indexOf('(')+1;
		var pos2 = agent.indexOf(')', pos1);
		agent = agent.substring(pos1,pos2);
		return { ipaddress: ip, language: lang, software: agent};
	}

};
