const router = require('express').Router();
const request = require('request');
const config = require('../config');

router.get('/data', function (req, res) {
  request({
    url: 'https://api.fingrid.fi/v1/variable/58/events/json?start_time=2019-01-01T01%3A01%3A01Z&end_time=2019-03-01T01%3A01%3A01Z',
    json: true,
    headers: {
      'x-api-key': config.xApiKey
    }
  }, (error, response, body) => {
    res.json(body);
  });

});

module.exports = router;