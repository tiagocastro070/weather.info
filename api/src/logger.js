fs = require('fs');

module.exports = function(req, res, next) {

  const { headers, url, method, params, query } = req;
  const info = {
    headers,
    url,
    method,
    params,
    query
  };

  const msg = `${new Date()} ${JSON.stringify(info)} \r\n`;

  fs.appendFile('log.txt', msg, function (err) {
    if (err) throw err;
  });

  next();
}