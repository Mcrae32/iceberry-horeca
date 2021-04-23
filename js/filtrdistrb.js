//Categories
var got = document.getElementsByClassName("got");
var ptica = document.getElementsByClassName("ptica");
var pelmen = document.getElementsByClassName("pelmen");
var polufabr = document.getElementsByClassName("polufabr");
var pizza = document.getElementsByClassName("pizza");
var ovoschi = document.getElementsByClassName("ovoschi");
var bliny = document.getElementsByClassName("bliny");
var more = document.getElementsByClassName("more");
var myaso = document.getElementsByClassName("myaso");
var allCategories = [got, ptica, pelmen, polufabr, pizza, ovoschi, bliny, more, myaso];

//wrapper categories
var rowDistrib = document.getElementsByClassName("rowDistrib");

//buttons
var gotbutton = document.getElementById("gotbutton");
var pticabutton = document.getElementById("pticabutton");
var pelmenbutton = document.getElementById("pelmenbutton");
var polufabrbutton = document.getElementById("polufabrbutton");
var pizzabutton = document.getElementById("pizzabutton");
var ovoschibutton = document.getElementById("ovoschibutton");
var blinybutton = document.getElementById("blinybutton");
var morebutton = document.getElementById("morebutton");
var myasobutton = document.getElementById("myasobutton");
var allbuttons = [gotbutton, pticabutton, pelmenbutton, polufabrbutton, pizzabutton, ovoschibutton, blinybutton, morebutton, myasobutton];

//отменяем работу кнопок по умолчанию
for (var i = 0; i < allbuttons.length; i ++) {
    allbuttons[i].addEventListener("click", function(event) {
        event.preventDefault();
    }, false);
}

//ф-ии скрыть-показать элементы
function hideElements(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
}
function showElements(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].style.display = "";
    }
}

function clickButtons(button, nohide) {
    button.onclick = function () {
        for (var i = 0; i < allbuttons.length; i++) { //включаем индикацию активности кнопки
            allbuttons[i].parentNode.classList.remove("active");
        };
        button.parentNode.classList.add("active");
        for (var i = 0; i < allCategories.length; i++) {
            hideElements(allCategories[i]);
        }
        //показываем нужные элементы
        showElements(nohide); 
        for (var i = 0; i < rowDistrib.length; i ++) {
            rowDistrib[i].style.display = "none";
            for (var j = 0; j < nohide.length; j ++) {
                if ( rowDistrib[i].contains(nohide[j]) ) {
                    rowDistrib[i].style.display = "block";
                };
            };
        };
    };
}

clickButtons(gotbutton, got);
clickButtons(pticabutton, ptica);
clickButtons(pelmenbutton, pelmen);
clickButtons(polufabrbutton, polufabr);
clickButtons(pizzabutton, pizza);
clickButtons(ovoschibutton, ovoschi);
clickButtons(blinybutton, bliny);
clickButtons(morebutton, more);
clickButtons(myasobutton, myaso);
