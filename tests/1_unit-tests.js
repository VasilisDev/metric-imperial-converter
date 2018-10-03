/*
*
*
*       UNIT TEST
*
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      var input = '150kg';
      assert.equal(convertHandler.getNum(input),150);
      done();
    });

    test('Decimal Input', function(done) {
      var input = '52.2222222222';
      assert.equal(convertHandler.getNum(input), 52.2222222222)
      done();
    });

    test('Fractional Input', function(done) {
      var input = '1/2kg';
      assert.equal(convertHandler.getNum(input), 0.5)
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {

      var input = '1.0/2km';
      assert.equal(convertHandler.getNum(input), 0.5)
      done();
    });

    test('Invalid Input (double fraction)', function(done) {

      var input = '9/2/3km';
      assert.equal(convertHandler.getNum(input),null);
      done();
    });

    test('No Numerical Input', function(done) {

      var input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit('10000000000000000'+ele), ele.toLowerCase());
                });
      done();
    });

    test('Unknown Unit Input', function(done) {

      assert.equal(convertHandler.getUnit('3000000000dolars'),null);
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();

    });

    test('Mi to Km', function(done) {
          var input = [5, 'mi'];
          var expected = 8.04672;
          assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
          done();
    });

    test('Km to Mi', function(done) {
          var input = [5, 'km'];
          var expected = 3.10686;
          assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
          done();
    });

    test('Lbs to Kg', function(done) {
           var input = [5, 'lbs'];
           var expected = 2.26796;
           assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
           done();
    });

    test('Kg to Lbs', function(done) {
            var input = [5, 'kg'];
            var expected = 11.0231;
            assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
            done();
    });

  });

});
