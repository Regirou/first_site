
let imgElement = document.getElementById('premierephoto');

let changerImage = function(){

    if (imgElement.getAttribute('src') === img1){
        imgElement.src = img2
    } 
    else {
        imgElement.src = img1
    }  
};

imgElement.addEventListener ('click', changerImage)


$(function() {
    console.log('page html chargé !');
    $("#taille").selectmenu();

})
