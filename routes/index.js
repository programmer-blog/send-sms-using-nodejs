var express = require('express');
var router = express.Router();
const Nexmo = require('nexmo')
const nexmo = new Nexmo({
  apiKey: 'API_KEY',
  apiSecret: 'API_SECRET'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Send SMS using nodejs' });
});

router.post('/send', function(req, res, next) {
  const from = 'Example Website';
  const to =  req.body.mobile;
  const text = 'Welcome to our website.';
  nexmo.message.sendSms(from, to, text);
  res.json({success : "true", status : 200});
});

module.exports = router;
