var doc = document;
var body = doc.querySelector("body");
var initialCode = doc.querySelector("#initialCode");
var result = doc.querySelector("#result");
var svgDefs = doc.querySelector("#svgDefs");

console.log(initialCode);

initialCode.onkeyup = function  () {
    showSvg (this);
    console.log("onkeyup");
}

function showSvg (elem) {
    svgDefs.innerHTML = elem.value;

    var symbols = doc.querySelectorAll("symbol");

    for(var i = 0; i< symbols.length; i++){
      var svg_id = symbols[i].getAttribute("id");

      result.innerHTML += "<div class=\"icons-list__item\"><h3 class=\"icons-list__title\">#" + svg_id + "</h3><svg class=\"svg-icon\"><use xlink:href=\"#" + svg_id + "\"></svg></div>";
    }
}
