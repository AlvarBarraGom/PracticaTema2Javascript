let inicializar = function () {
    let boton = document.getElementById('agregar');
    boton.onclick = agregarLinea;
}


// Inicialización de la aplicación cuando se carga el DOM.
document.body.onload = inicializar;

//Inicialización Variables.

let precioTotal = 0;
let iva = 0; 
let totalFactura = 0;
let añadirAlSiguiente = 0;
let ivaAlSiguiente = 0;
let totalFacturaAlSiguiente = 0;

//Variable Fecha a día de hoy, que se colocará debajo de la tabla.

let fecha = new Date();

    fechaHoy = document.getElementById("fecha").innerHTML = +fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();

//Función Agregar Línea, donde irá incluída la información de la tabla y los correspondientes cálculos de la factura.

let agregarLinea = function () {

//Inicialización Variables de introducción de valores del imput.

    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let precioUnitario = document.getElementById("precio-unitario").value;

//Cálculo del precio total, donde añade variable *añadirAlSiguiente* que permite que no se pise el valor anterior.

    precioTotal = precioUnitario * cantidad;
    añadirAlSiguiente += precioTotal;

//Inicialización variable fila, qué permitirá añadir los diferentes productos que componen la factura.

    let fila = document.createElement("tr");

//Uso de la variable fila para añadir los valores correspondientes de los imputs con sus variables previamente declaradas.

    fila.innerHTML = "<td>" + producto + "</td> <td>" + cantidad + "</td> <td> " + precioUnitario + "</td> <td>" + precioTotal.toFixed(2) + "</td>";

//Inicialización variable tbody, donde irán las diferentes líneas de productos de la factura y posicionándola en cero, ya que es una variable array que controla las diferentes líneas de los productos en la factura. 

    let tbody = document.getElementsByTagName("tbody")[0];

//Con la función appendChild podremos agregar cada fila en el tbody.

    tbody.appendChild(fila);

//Cálculo del IVA, donde se añade variable *ivaAlSiguiente*, que permite que no se pise el valor anterior.

    iva = precioTotal * 0.21 ;
    ivaAlSiguiente += iva;

//Cálculo del Total de la Factura, donde se añade variable *totalFacturaAlSiguiente*, que permite que no se pise el valor anterior.
    
    totalFactura = precioTotal + iva;
    totalFacturaAlSiguiente += totalFactura;


//Añadir valores de la Base Imponible, el IVA, el Total de la Factura con las variables previamente declaradas.

    baseImponible = document.getElementById("base-imponible").innerHTML = añadirAlSiguiente;

    ivaResultado = document.getElementById("iva").innerHTML = ivaAlSiguiente.toFixed(2);

    totalFacturaResultado = document.getElementById("total").innerHTML = totalFacturaAlSiguiente.toFixed(2);

//Declaración de la variable hora.

    let hora = new Date();
    
//Uso de la variable hora para poder determinar la hora del último producto agregado a la Factura.

    horaAhora = document.getElementById("hora").innerHTML = +hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
        
}

