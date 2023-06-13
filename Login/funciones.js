let mostrador= document.getElementById("mostrador");
let seleccion= document.getElementById("seleccion");
let imgSeleccionada= document.getElementById("img");
let modeloSeleccionado=document.getElementById("modelo");
let descripSeleccionada= document.getElementById("descripcion");
let preSeleccionado =document.getElementById("precio");

let contadorCarrito=0;



function cargar(item){
    noBordes();
    mostrador.style.width="60%";
    seleccion.style.width="40%";
    seleccion.style.opacity="1";
    item.style.border="2px solid red";
    
    imgSeleccionada.src= item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML=item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML ="Información adicional";

    preSeleccionado.innerHTML=item.getElementsByTagName("span")[0].innerHTML;
}
function noBordes(){
    var items= document.getElementsByClassName("item");
    for(i=0;i<items.length;i++){
        items[i].style.border="none";

    }
}
function cerrar(){
    mostrador.style.width="100%";
    seleccion.style.width="0";
    seleccion.style.opacity="0";
    noBordes();

}

function listo(){
    
    const modelo = modeloSeleccionado.innerHTML;
    const precio = parseFloat(preSeleccionado.innerHTML);
   
    let total=0;
    let suma=0;
    
    total+=precio;
    contadorCarrito++;
    suma=total*contadorCarrito;
    alert('AÑADIDO A CARRITO:'+"\nModelo Seleccionado:"
    +modelo+"\nCANTIDAD: "+contadorCarrito+"\nSuma:"+suma);

  
    
  
}
