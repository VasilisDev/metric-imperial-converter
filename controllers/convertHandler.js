/*
*
*
*       Complete the handler logic below
*
*
*/


function ConvertHandler() {

  this.getNum = function(input) {

        const num = input.toLowerCase().split(/[a-zA-Z]/);

     if (num[0] !== "") {
          if (num[0].includes("/")) return num[0].split("/").length !== 2 ? null : eval(num[0]);
           else if (num[0].includes(".")) return  num[0].split(".").length !== 2 ? null : eval(num[0]);
            else return  parseFloat(num[0]); }
     else
        return 1;
  };

  this.getUnit = function(input) {

    let check = input.toLowerCase().match(/km|mi|kg|lbs|gal|l$/gi);

    if (check !== null) return check[0];
     else return null;

  };

  this.getReturnUnit = function(initUnit) {
        switch(initUnit.toLowerCase()) {
       case 'mi':
        return 'km'; break;
       case 'km':
        return 'mi'; break;
       case 'lbs':
        return 'kg'; break;
       case 'kg':
        return 'lbs'; break;
       case 'gal':
        return 'l'; break;
       case 'l':
        return 'gal'; break;
       default:
         return null;
     }
 };

  this.spellOutUnit = function(unit) {

    switch(unit.toLowerCase()) {
      case 'mi':
        return 'miles'; break;
      case 'km':
        return 'kilometers'; break;
      case 'lbs':
        return 'pounds'; break;
      case 'kg':
        return 'kilograms'; break;
      case 'gal':
        return 'gallons'; break;
      case 'l':
        return 'litres'; break;
      default:
        return null;
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit.toLowerCase()) {
          case "gal":
          result = initNum * galToL;  ;
            break;
          case "lbs":
          result = initNum * lbsToKg;
            break;
          case "mi":
          result = initNum * miToKm;
            break;
          case "l":
          result = initNum / galToL;
            break;
          case "kg":
          result = initNum / lbsToKg; ;
            break;
          case "km":
          result = initNum / miToKm;  
            break;
         default:
          return null;
        }
        return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return  `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
