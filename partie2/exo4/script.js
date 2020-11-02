var note=prompt("choisissez une note")
function testNum(note) {
    let result;
    if (note <3) {
      result = "Nul";
    } if (4< note <6) {
      result = "moyen";
    
    } if (6< note <8) {
      result = "Assez bien";
    
    } if (8< note <9) {
      result = "bien";
    
    } if (4< note <6) {
      result = "moyen";
    
    } if (note==10) {
      result = "Excellent";
    }

    return result;
      }
  
  
   alert(testNum(note))




//    Demander une note à l'utilisateur :

// Si elle est entre 0 et 3 afficher Nul
// Si elle est entre 4 et 6 afficher Moyen
// Si elle est entre 6 et 8 afficher Assez Bien
// Si elle est entre 8 et 9 afficher Bien
// Si elle est égale à 10 afficher Excellent