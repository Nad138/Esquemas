var body = document.getElementById("body");
var coral = document.createElement("div");
var lila = document.createElement("div");
var amarillo = document.createElement("div");
var negro = document.createElement("div");
var verde = document.createElement("div");
var azul = document.createElement("div");

function createElements(){
  body.appendChild(coral);
  coral.setAttribute("id", "coral");
  coral.appendChild(lila);
  lila.setAttribute("id", "lila");
  lila.appendChild(amarillo);
  amarillo.setAttribute("id", "amarillo");
  }
createElements();
