var a=prompt("choisissez un nombre")
function testNum(a) {
    let result;
    if (a%2 == 0)  {
      result = "Votre nombre est pair";
    } else {
      result = "Votre nombre est impair!";
    }
    return result;
  }
  
   alert(testNum(a))





