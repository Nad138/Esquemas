var body = document.getElementById("body");
var div = document.createElement("div");

function createElements(){
  function create(){
    body.appendChild(div);
    div.setAttribute("id", "amarillo");
    }
  function create(){
    body.appendChild(div);
    div.setAttribute("id", "lila");
    }
  function create(){
    body.appendChild(div);
    div.setAttribute("id", "coral");
    }
    create();
  }
createElements();
