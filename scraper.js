const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const request = require('request');

request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var contents = []
    var $ = cheerio.load(body);
    $('tr').each(function(i, elem) {
      var firstTD = $(this).children().first().text();
      var lastTD = $(this).children().last().text();
      console.log(lastTD);
      // console.log(contents);
    });
    
  }
})