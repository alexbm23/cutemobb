/* Web de Cutemobb                                                                   */
/* Funciones JavaScript para para index.html                                               */
/* Autor Alejandro Barnestein Martos                                                       */
/* Versión 1.0                                                                             */
/* 07 Noviembre                                                                     */
/*******************************************************************************************/



/********** JS QUE REGULA LA BARRA DE NAVEGACIÓN *******************************************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }