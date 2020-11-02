
   var a=prompt("rentre ton age")
function testNum(a) {
    let result;
    if (a > 18) {
      result = "Vous etes majeur";
    } else {
      result = "vous etes mineur!";
    }
    return result;
  }
  
   alert(testNum(a))