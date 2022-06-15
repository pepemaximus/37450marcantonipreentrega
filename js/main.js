alert ("Bienvenido a Watch Argentina");

//BASE DE DATOS DE PRODUCTOS
const baseDeDatos = [
    {
        "id": 1,
        "descripcion": "Smartwatch 5000",    
        "precio": 6000,
        "cantidad": 1,
        "cardText": "Un smartwatch con amplia funcionalidad especialmente pensado para deportistas.",
        "imagen": "./assets/smartwatchDeportivo.png",
    },
    {
        "id" : 2,
        "descripcion": "Applewatch",
        "precio": 10000,
        "cantidad": 1,
        "cardText": "Deportivo con múltiples funciones. 100% compatible con Iphone y Mac.",
        "imagen": "./assets/applewatch.jpg",
    },
        {
        "id" : 3,
        "descripcion": "Rider",    
        "precio": 15000,
        "cantidad": 1,
        "cardText": "El clásico reloj analógico que nunca pasa de moda. Elegante y funcional.",
        "imagen": "./assets/rideranalogico.jpg",
    },
    {
        "id": 4,
        "descripcion": "Rolex Deep Sea",
        "precio": 80000,
        "cantidad": 1,
        "cardText": "Rolex Deep Sea, ideal para realizar buceo con gran estilo. Profundidad hasta 100 metros.",
        "imagen": "./assets/rolexBuceo.jpg",
    }
    ]

// Establecimiento de la función "datosCliente" para saber los datos del comprador y de entrega
//momentáneamente se ingresa esa información por Prompt
function datosCliente (nombre, apellido, celular, direccion, localidad, codigoPostal) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.direccion = direccion;
    this.localidad = localidad;
    this.codigoPostal = codigoPostal;
}

// Pido datos al cliente y ejecuto función para validar su ingreso
let nombre = prompt ("Ingrese su nombre");
function validarDatos(nombre) {
    if (nombre = "") {
        alert ("ingrese un nombre válido");
    }
}
let apellido = prompt ("Ingrese su apellido");
function validarDatos(apellido) {
    if (apellido = "") {
        alert ("Ingrese un apellido válido");
    }
}
let celular = prompt ("Ingrese su número de teléfono móvil");
function validarDatos(celular) {
    if ((celular = "") || (celular != Number)) {
        alert ("Ingrese un número de celular válido");
    }
}
let direccion = prompt ("Ingrese su dirección");
function validarDatos(direccion) {
    if (direccion = "") {
        alert ("Ingrese una dirección válida");
    }
}
let localidad = prompt ("Ingrese su localidad");
function validarDatos(localidad) {
    if (localidad = "") {
        alert ("Ingrese una localidad válida");
    }
}
let codigopostal = prompt ("Ingrese su código postal");
function validarDatos(codigoPostal) {
    if ((codigoPostal = "") || (codigoPostal != Number)) {
        alert ("Ingrese un número de código postal válido");
    }
}

//carrito de compras
const carrito = [];

let total = 0;


function renderizarCarrito() {
    let tienda = document.getElementById('tienda');
    let filtro = document.getElementById('filtrarProductos');
    filtro.innerHTML = `
    <div class = container row col-12>
        <button class="filterbutton" onclick="filtroPrecio()">Filtrar menor a $11.000</button> 
    </div>
    `
    baseDeDatos.forEach ((e) => {
        
        let productoHTML = `
    
    <div class="card col-xl-4 col-lg-4 col-md-6 col-sm-12" style="width: 18rem;">
        <img src="${e.imagen}" class="card-img-top" alt="Card image cap">
        <div data-aos="flip-left"></div> 
        <div class="card-body">
            <h5 class="card-title">${e.descripcion}</h5>
            <p class="card-text">${e.cardText}</p>
            <p>$ ${e.precio}</p>
            <a href="#" class="btn btn-primary"  onClick="agregarProductos(${e.id})">¡Lo merezco!</a>
        </div>
    </div>
`
tienda.innerHTML += productoHTML
        });
}

renderizarCarrito ();

function agregarProductos (id) {

    let producto = baseDeDatos.find(producto => producto.id == id);
    
    let productoEnCarrito = carrito.find(producto => producto.id == id);

    if(productoEnCarrito){
        productoEnCarrito.cantidad ++;
    }else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    actualizarCarrito();
}

function actualizarCarrito () {

    let carritoHTML = document.getElementById('carrito');

    html = '';

    carrito.forEach((producto, id)=>{
        
        html += `
        <div class="card col-xl-4 col-lg-4 col-md-6 col-sm-12" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="Card image cap">
        <div data-aos="flip-left"></div> 
        <div class="card-body">
            <h5 class="card-title">${producto.descripcion}</h5>
            <p>$ ${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <button class="btn btn-danger" onClick="eliminarProducto(${id})">Eliminar</button>
        </div>
    </div>
        `
    })

    carritoHTML.innerHTML = html;

    calcularTotal();

}

//función para calcular el total a pagar
function calcularTotal(){

    carrito.forEach((producto) => {
        
        total += producto.precio * producto.cantidad;
    });
    
    alert("El total a pagar es de $" + total);

}

//función para eliminar un producto del carrito
const eliminarProducto = (id)=> {

    carrito[id].cantidad--;

    if(carrito[id].cantidad == 0){
        
        carrito.splice(id, 1);
    }
    
    actualizarCarrito();
}

// función para filtrar por precio  y mostrarlo por CONSOLE.LOG
function filtroPrecio(){

    let bd = baseDeDatos.filter(producto => producto.precio < 11000);
    console.log(bd);
}



//función para un pedido
function pedido() {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    let fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    this.fecha = fecha;
}
