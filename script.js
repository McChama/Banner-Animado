function Animacion(){
    var Animacion = document.getElementById("div");
    Animacion.classList.toggle("Banner-Inicia");
    
    setTimeout(function(){
        Animacion.classList.toggle("Banner-Inicia");
    },4000 );
}