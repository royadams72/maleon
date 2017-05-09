var request = require('request');
var config = require('./config');

functions = {
  authorise: function(req, res){
    var header = config.consumerKey + ':' + config.consumersecret;
    var encheader = new Buffer(header).toString('base64');
    var finalheader = 'Basic ' + encheader;

    request.post('https://api.twitter.com/oauth2/token', {form:{'grant_type': 'client_credentials'},
    headers: {Authorization: finalheader}}, function(err, response, body){
      if(err){
        console.log(err);
        return response.status(500).json({
          title: 'An error has occured',
          error: err
        })
      }else{
          config.bearertoken = JSON.parse(body).access_token;
          res.json({success: true, data:config.bearertoken});
      }
    })
  },
  search: function(req, res){
    var searchQuery = req.body.query;
    var encSearchQuery = encodeURIComponent(searchQuery);
    var bearerHeader = 'Bearer ' + config.bearertoken;
    //var header = config.consumerKey + ':' + config.consumersecret;
    //var encheader = new Buffer(header).toString('base64');
    //var finalheader = 'Basic ' + encheader;
    console.log(encSearchQuery)
    request.get('https://api.twitter.com/1.1/search/tweets.json?q='+encSearchQuery+'&result_type=recent', {headers: {Authorization: bearerHeader}},
    function(err, response, body){
      if(err){
        console.log(err);
        return response.status(500).json({
          title: 'An error has occured',
          error: err
        })
      }else{

          res.json({success: true, data: JSON.parse(body)});
      }
    })
  }
}
//
module.exports = functions;
