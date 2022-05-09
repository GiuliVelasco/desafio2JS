class Producto {
    constructor(id, nombre, color, talle, precio) {
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.color = color;
        this.talle = talle;
        this.precio = parseFloat(precio);
    }
    esVisto(nombre){
        return this.nombre == nombre.toLowerCase();
    }
}
const producto1 = new Producto(1, "Judogi", "Blanco", "S", 30);
const producto2 = new Producto(2, "Cinturon", "Amarillo", "Unico", 8);
const producto3 = new Producto(3, "Guante", "Rojo", "12/14 oz", 35);
const producto4 = new Producto(4, "Tibial", "Blanco", "Unico", 30);
const producto5 = new Producto(5, "Venda", "Rojo", "Unico", 7);
const producto6 = new Producto(6, "Remera", "Blanco", "M/L", 12);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
//const carrito = [];
let usuarios = [];

const container = document.querySelector(".tituloPrincipal");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
let formulario = document.getElementById('idForm');

//funcion saludar(){}
const saludar = () => {
    let nombre = prompt("Ingresa tu nombre");
    while (!isNaN(nombre)) {
        nombre = prompt("Ingresa tu nombre");
    }
    container.innerHTML = `<h1>${nombre.toUpperCase()}, te damos la bienvenida a Equipamiento Marcial Mendoza.</h1>`;
};

//LLamado de la funcion
saludar();

//botones
boton1.addEventListener('click', ()=>{
    console.log("Le gusta");
});
boton2.addEventListener('click', ()=>{
    console.log("No le gusta");
});

//buscador bootstrap
inputBuscador.addEventListener('input',(e) => {
    e.preventDefault();
    let buscador = inputBuscador.value;
    console.log(buscador.toLowerCase());
    console.log(productos.filter(productos => productos.nombre.includes(buscador.toLowerCase())));
});

//formulario
formulario.addEventListener('submit',(event) =>{
    event.preventDefault()
    let nombreCompleto = document.getElementById('usernameId').value
    let email = document.getElementById('emailId').value
    let edad = document.getElementById('edadId').value

    console.log(nombreCompleto)
    console.log(email)
    console.log(edad)

    let usuario = {nombre: nombreCompleto, email: email, edad: edad}
    usuarios.push(usuario)
    console.log(usuarios)
})