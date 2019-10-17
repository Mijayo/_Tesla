/* Eliminar de Local Storage
localStorage.clear();*/


///// DIEGO VALLEJO MIJALLO 2 DAW /////

// Cambio el color del body de ese rosa al blanco
var body = document.getElementsByTagName("BODY")[0];
body.style.backgroundColor = 'white';

/* Practica los concepto vistos en clase getElementById y querySelector.
Define querySelectorAll() y adjunta ejemplos usando el HTML adjunto.
Envía un solo fichero js
    - 3 ejemplos con getElementById
    - 3 ejemplos con querySelector
    - 3 ejemplos con querySelectorAll  */

/******  3 ejemplos con getElementById  ********/
/* UNO */
// Detectamos cuando el usuario hace scroll-down
window.onscroll = function() { stickyHeader() };
// Variable header para guardar el header
var header = document.getElementById('header');
header.style.height = '90px';
// Variable sticky para usar la propiedad offsetTop
var sticky = header.offsetTop;
// Creamos la funcion stickyHeader()
function stickyHeader() {
    // controlamos el flujo
    if (window.pageYOffset > sticky) {
        // cuando esta condicion sea true añadimos la clase sticky definida en el CSS
        header.classList.add("sticky");
        // añado un margen azul para diferenciar la barra de menu del resto
        header.style.borderBottom = '10px solid rgb(13,4,136)';
    } else {
        header.classList.remove("sticky");
        header.style.borderBottom = 'none';
    }
}

/* DOS */
// Vamos a modificar las proporciones del logo para que aparezca proporcionado usando JS
var logo = document.getElementById('logo');
// Height = auto soluciona los problemas de dimension
logo.style.height = 'auto';

/* TRES */
// Modifico el icono carrito
var carrito = document.getElementById('img-carrito');
// alineo con el logo de Tesla
carrito.style.marginTop = '25px';
// Lo hago mas pequeño
carrito.style.width = '20px';

/******  3 ejemplos con querySelector  ********/
/* UNO */
// Selecciono el primer <h2> y les cambio la familia fuente y el color
var h = document.querySelector('h2');
h.style.fontFamily = 'Monaco, monospace';
h.style.color = 'white';

/* DOS */
// Cambio la IMG de portada
var imgPortada = document.querySelector('#portada');
// pongo la propiedad en none
imgPortada.style.backgroundImage = 'none';
// añado la nueva imagen de portada
imgPortada.style.backgroundImage = 'url(../img/inventory-header.jpg)';
// ponogo un min-height para que siempre mida lo mismo
imgPortada.style.minHeight = '450px';

/* TRES */
// Quito la linea del footer
var hrFooter = document.querySelector('#footer');
hrFooter.style.borderTop = 'none';
// cambio el color del fondo del footer
hrFooter.style.backgroundColor = '#ebebeb';
// le doy mas height para que respire 
hrFooter.style.minHeight = '190px';

/******  3 ejemplos con querySelectorAll  ********/

/* DEF de querySelectorAll => Es similar a un getElementsByTagName. Nos permite conseguir todos 
los elementos de una o varias consultas, simplemente separando con comas, como hacemos en CSS.
Nos devolverá un Array con los elementos y ya podremos manipular el DOM a nuestro gusto. */

/* UNO */
// Selecciono el texto del footer
var txtFooter = document.querySelectorAll('.enlace');
// Cambio el color del azul a la posicion par o impar del texto asignando asi un color
for (var i = 0; i < txtFooter.length; i++) {
    if (i % 2 == 0) {
        // los de posicion par tienen este color de texto
        txtFooter[i].style.color = '#bbb';
    } else {
        // los de posicion impar tienen este color de texto
        txtFooter[i].style.color = '#555';
    }
}

/* DOS */
// Seleccionamos las tarjetas de los coches
var cajaCar = document.querySelectorAll('.card');
// Recorremos todas
for (var i = 0; i < cajaCar.length; i++) {
    // las pares tendran una clase de CSS diferente al hacer hover
    if (i % 2 == 0) {
        cajaCar[i].classList = '.card:hover';
    }
}

/* TRES */
// Selecciono los iconos
var icono = document.querySelectorAll('icono1 icono2 icono3');
// modifico el tamaño
// icono.style.backgroundSize = 'auto';

///// DIEGO VALLEJO MIJALLO 2 DAW /////


//// localStorage ////

let carro = document.getElementById('img-carrito');
carro.addEventListener('click', function() {
    if (carro) {
        // alert('Hola');
        carro.classList.add('.submenu .carrito');
        // carro.style.display = 'block';
    } else {
        carro.classList.remove('.carrito');
    }
});