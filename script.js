var doc = document;
var body = doc.querySelector("body");
var initialCode = doc.querySelector("#initial-code");
var result = doc.querySelector("#result");
var svgDefs = doc.querySelector("#svg-defs");

initialCode.onkeyup = function  () {
    showSvg (this);
}

function showSvg (elem) {
    var icons = "";

    if ( !elem.value ) {
        result.innerHTML = "";
        return;
    }

    svgDefs.innerHTML = elem.value;
    var symbols = doc.querySelectorAll("symbol");

    if (symbols.length == 0 ) {
        result.innerHTML = "<span=\"result__error\">There is no symbols.</span>";
        return;
    }

    for(var i = 0; i< symbols.length; i++){
      var svg_id = symbols[i].getAttribute("id");

      icons += "<li class=\"icons-list__item\"><h5 class=\"icons-list__title\">#" + svg_id + "</h5><svg class=\"svg-icon\"><use xlink:href=\"#" + svg_id + "\"></svg></li>";
    }
    result.innerHTML = "<h4>Your icons:</h4>";
    result.innerHTML += "<ul class=\"icons-list\">" + icons + "</ul>";
}
