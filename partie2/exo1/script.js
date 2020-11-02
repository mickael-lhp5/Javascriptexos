var a=prompt("rentre ton chiffre")
function testNum(a) {
    let result;
    if (a > 21) {
      result = "c'est bon";
    } else {
      result = "echec!";
    }
    return result;
  }
  
   alert(testNum(a))



