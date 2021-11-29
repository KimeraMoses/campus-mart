//====CART CONTROLLER====
const cartController = (function(){

    //Some code here
})()


//====UI CONTROLLER====

const uiController = (function(){

})()


//====GLOBAL APP CONTROLLER

const controller = (function(CARTCTRL, UICTRL){


})(cartController, uiController)

function MenuToggleHandler(){
    var element = document.getElementById("navigation__menu");
  element.classList.toggle("active");
}