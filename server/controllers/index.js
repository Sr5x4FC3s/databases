var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //need invoke models.messages.get to get the query from the DB
      models.messages.get(function(data) {
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var postMessage = req.body.message;
      models.messages.post(postMessage, function(err, data) {
        if (err) {
          console.log(err);
        }
        res.send(data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //need invoke models.users.get to get the query from the DB
      models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      var postUser = req.body.username;
      models.users.post(postUser, function(err, data) {
        console.log('THIS IS DATA ', data); //per test this is valjean
        if (err) {
          console.log(err);
        }
        res.send(data);
      });
    }
  }
};
