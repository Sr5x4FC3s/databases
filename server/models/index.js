var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages');  //select all from messages
    }, // a function which produces all the messages
    post: function (req, callback) {
      var queryToAdd = `INSERT message FROM messages VALUE ('${req}')`
      db.query(queryToAdd, function(err, data) {
        if (err) {
          console.log(err);
        }
        callback(err, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM usernames');
    },
    post: function (req, callback) {
      var queryToAdd = `INSERT username FROM usernames VALUE (\'${req}\')`;
      db.query(queryToAdd, function(err, data) {
        console.log('QUERY TO ADD BRO', data)
        if (err) {
          console.log(err);
        }
        callback(err, queryToAdd); //this is the res.send(data) in the controllers.post
      });
    }
  }
};
