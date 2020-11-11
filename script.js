function Animacion(){
    /*Obtener objeto de la animacion*/
    var Animacion = document.getElementById("Banner-Inicia");

    /*Activar animacion*/ 
    Animacion.style.animationPlayState="running";

    /*Reiniciar animacion*/ 
    setTimeout(function(){
        Animacion.style.animation = 'none'; 
        setTimeout(function() {
            Animacion.style.animation = '';
        }, 0); /*En cuanto acabe la animacion, reiniciala*/
    },4000)   /*Espera a que acabe el tiempo de la animacion*/
}