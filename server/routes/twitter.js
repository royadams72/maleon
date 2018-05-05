var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// var request = require('request');
var twit = require('twitter');

var twitter = new twit({
  consumer_key:  'ckGZrqruIukhAPodD8sGJ0Rjf',
  consumer_secret: 'u3y7l6QA7ZVEn1j3egcutYmlbZ1PpRQwH7vRHA3wvusklDs65r',
  access_token_key: '600893103-kpjbrwd5kv6nb4v19KXbecC56x99kpTqeanAYM1h',
  access_token_secret: 'Jwtey5cX6WcLemeP5aZjN6x7AriEcPh1FscRT8BYgVQu9'
});

router.get('/gettweets', function (req, res) {
  twitter.get('statuses/user_timeline', { id: 2835226509, count: 3 }, function(err, tweets, response) {
      if (!err) {
         res.json(tweets);
      }
      else {
        return res.status(500).json({
          title: 'An error has occured',
          error: err
        })
      }
    })
})
module.exports = router;
