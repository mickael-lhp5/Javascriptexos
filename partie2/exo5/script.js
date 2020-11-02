let nbr = prompt("choisissez un chiffre entre 1 et 7");
let day;


switch (parseInt(nbr)) {
  default:
    day = "Ce n'est pas un jour de la semaine";
    break;
 



  case 1:
    day = "Lundi";
    break;

  case 2:
    day = "Mardi";
    break;


  case 3:
    day = "mercredi";
    break;


  case 4:
    day = "jeudi";
    break;

  case 5:
    day = "vendredi";
    break;

  case 6:
    day = "samedi";
    break;

  case 7:
    day = "dimanche";
    break;

}

alert(day);



//  Créer une variable day et lui attribuer une valeur entre 1 et 7.

//  A l'aide d'un switch, afficher :


//  Lundi si day est égal à 1
//  Mardi si day est égal à 2
//  Mercredi si day est égal à 3
//  Jeudi si day est égal à 4
//  Vendredi si day est égal à 5
//  Samedi si day est égal à 6
//  Dimanche si day est égal à 7