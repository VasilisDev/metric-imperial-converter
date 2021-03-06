/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){

      var input = req.query.input;

      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);

      // input validation
      var inv = initNum ? (initUnit ? null : 'invalid unit') :
                (initUnit ? 'invalid number' : 'invalid number and unit');

      if (inv) {
        res.status(200)
           .type('text')
           .send(inv);
        return;
      }
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      //res.json
      res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: toString
   });



    });

};
