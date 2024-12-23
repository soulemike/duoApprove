const https = require('https')
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const key      = 'DI34HD0DRLHKKGDA9KJZ'//core.getInput('integration-key')
  const secret   = '2MzzG0YUWX5yWoxcMyWiksJxEcx9HJyNfw75PpoR'//core.getInput('integration-secret')
  const hostname = 'api-44d6982b.duosecurity.com'//core.getInput('api-hostname')
  const targets  = core.getInput('who-to-auth')

  var options = {
    host: hostname,
    port: 443,
    path: '/auth/v2/ping',
    method: 'GET'
  };

  let result = {};
  https.request(options, function(res) {
    console.log(res.statusCode);
    result.statusCode = res.statusCode;
  }).end();

  if(result.statusCode == 200){
    console.log('success');
  }else{
    console.log(result.statusCode);
  }

  /*
  https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
*/
  // GET /auth/v2/ping > 200
// GET /auth/v2/check > 200 || 401
// POST /auth/v2/preauth > 200 || 400
// POST /auth/v2/auth > 200 || 400
// GET /auth/v2/auth_status > 200 || 400
/*
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  */
} catch (error) {
  core.setFailed(error.message);
}