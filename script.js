let hamburger = document.getElementById('hamburger');  //Je déclare mon button
let side_menu = document.getElementById('side-menu'); //Je déclare le menu sur le côté
let body = document.body; //Je déclare le body

hamburger.onclick = hideshowmenu; //J'affecte une fonction au clique du boutton

function hideshowmenu() {

    let position = window.getComputedStyle(body).left;
    let x = body.getBoundingClientRect().left; //Je récupère la valeur de la position sur l'axe X du body
    
    if (x == 0){
        console.log(x);
        body.classList.remove("transition-to0px-body");
        side_menu.classList.remove("transition-toleft-sidemenu");
        body.classList.add("transition-toright-body");
        side_menu.classList.add("transition-to0px-sidemenu");
    }  
    else{
        console.log(x);
        body.classList.remove("transition-toright-body");
        side_menu.classList.remove("transition-to0px-sidemenu");
        body.classList.add("transition-to0px-body");
        side_menu.classList.add("transition-toleft-sidemenu");
    }
    // Si le body est en 0, j'insère les classes nécessaires pour afficher le menu, sinon je masque le menu : l'ensemble du body se déplace sur la droite et la gauche.
}