var img=document.getElementById('image'),
    prev=document.getElementById('prev'),
    next=document.getElementById('next');
var url_base='../img/';

//variable globales de control de imagenes
var can=4,
    pos=1

//escucha al evento click  del boton prev
prev.addEventListener('click',function(){
    //disminuye la posicion de la imagen a mostrar
    pos--;
    //si la posicion es menor que el primero
    if(pos<1)
        pos=4;
    //muestra la imagen segun la posicion
    img.src=url_base + pos +'.jpg';

})
next.addEventListener('click',function(){
    //aumente la posicion  de la imagen a mostrar
    pos++
    if (pos>4)
        pos=1;
    //muestra la imagen 
    img.src=url_base + pos +'.jpg';

})  
setInterval(function(){
    next.click();
    
},2000)