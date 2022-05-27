let hamburger = document.getElementById('hamburger');  //Je déclare mon button
let slideoutmenu = document.getElementById('slideout-menu'); //Je déclare le menu sur le côté
let body = document.body; //Je déclare le body

hamburger.addEventListener("click", hideshowmenu); //J'affecte une fonction au clique du boutton

function hideshowmenu() {

    let position = window.getComputedStyle(body).left; //Je récupère la valeur du display du menu
    
    if (position == "0px"){
        console.log(position);
        body.classList.toggle("transition-toright-body");
        slideoutmenu.classList.toggle("transition-to0px");
    }  
    else {
        console.log(position);
        body.classList.toggle("transition-to0px");
        slideoutmenu.classList.toggle("transition-toleft-sidemenu");
    }
    // Si display none j'affiche le menu et j'insère une classe au body qui décale tout vers la gauche, sinon je masque le menu et je déplace le body sur la droite.
}

// function hideshowmenu2() {

//     let display = window.getComputedStyle(slideoutmenu).display; //Je récupère la valeur du display du menu

//     if (display == "none"){
//         // slideoutmenu.style.display = "block";
//         body.classList.toggle("body-push-toright");
//     }  
//     else {
//         // slideoutmenu.style.display = "none";
//         body.classList.toggle("body-push-toright");
//     }
//     // Si display none j'affiche le menu et j'insère une classe au body qui décale tout vers la gauche, sinon je masque le menu et je déplace le body sur la droite.
// }
