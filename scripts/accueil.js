
$(function(){
    
    let imgHomme = $(".imghomme");

    imgHomme.mouseover(function() {
        imgHomme.attr('src', 'images/hommes2.png');
    });

    imgHomme.mouseout(function() {
        imgHomme.attr('src', 'images/hommes.png');
    });

    let imgFemme = $(".imgfemme");

    imgFemme.mouseover(function() {
        imgFemme.attr('src', 'images/femmes2.png');
    });

    imgFemme.mouseout(function() {
        imgFemme.attr('src', 'images/femmes.png');
    });

})
