var data;
$(document).ready(function(){
    $.getJSON("data/iceCreamShop/data.json", function(responseData){
        data = responseData;
         loadEverything();
    }).fail(function(){
        console.log("An error has occurred.");
    });
});

function loadEverything() {
var element = document.getElementsByClassName("header");

for(var i = 0; i < element.length; i++) {
    element[i].innerHTML = data.header;
}

if(document.getElementsByClassName("tagline").length === 1) {
    var tag = document.getElementsByClassName("tagline");
    tag[0].innerHTML = data.tagline;
} else if(document.getElementsByClassName("jsAbout").length === 1){
    var about = document.getElementsByClassName("jsAbout");
    about[0].innerHTML = data.about + "<br><br>Located at 12345 Rocky Road Indianapolis, IN 67890";
} else {
    var flavors = document.getElementsByClassName("flavor");
    console.log(flavors);
    for(i = 0; i < data.flavors.length; i++) {
        flavors[i].children[0].style.backgroundImage = "url(data/iceCreamShop/flavorImages/" + data.flavors[i].image + ")";
        flavors[i].children[1].innerHTML = data.flavors[i].flavor;
        flavors[i].children[2].innerHTML = "$" + data.flavors[i].cost;
    }
}
}

function showFlavor(num) {
    var popUp = document.getElementById("popUp");
    popUp.setAttribute("class", "popUp");
    document.getElementById("popUpImage").src = "data/iceCreamShop/flavorImages/" + data.flavors[num].image;
    document.getElementById("popUpName").innerHTML = data.flavors[num].flavor;
    document.getElementById("popUpPrice").innerHTML = "$" + data.flavors[num].cost;
}
function hideFlavor() {
    var popUp = document.getElementById("popUp");
    popUp.setAttribute("class", "popUp hide");
}

var clicked = false;

$(".dropDownMenu").click(function() {
    $(".links").toggleClass("hide");
    clicked=!clicked;
});

$(window).resize(function(){
    if(window.innerWidth>=600&&$(".links").hasClass("hide")) {
        $(".links").removeClass("hide");
    } else if(window.innerWidth<600&&clicked) {
        $(".links").addClass("hide");
    }
});
