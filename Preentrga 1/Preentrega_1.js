function mostrarCarrito(Lista){
    for (let producto of Lista) {
        console.log(producto.nombre + " - $" + producto.precio);
    }
        
 }


function calcularTotal(Lista){
    let total= 0;
    for (let producto of Lista) {
        total = total + producto.precio;
    }
    return total;
}



let productos = [
    {id: 1, nombre: "Canarias Tradicional", precio: 9000},
    {id: 2, nombre: "Canarias Edición Especial", precio: 9500},
    {id: 3, nombre: "Canarias Serena", precio: 9500},
    {id: 4, nombre: "Baldo", precio: 9200},
]
let carrito = [];
let opcion;
let salir = false;

do {
    opcion = prompt( "Seleccione la yerba que quiera usar \n" +
        "1) Canarias Tradicional \n" + 
        "2) Canarias Edición Especial \n" + 
        "3) Canarias Serena \n" + 
        "4) Baldo \n" + 
        "5) Ver carrito \n" + 
        "6) Salir"
    )

    switch (opcion){ 
        case "1":
            carrito.push(productos[0]);
            console.log("Canarias Tradicional agregada al carrito");
            break;
        
        case "2":
            carrito.push(productos[1]);
            console.log("Canarias Edición Especial agregada al carrito");
            break;

        case "3":
            carrito.push(productos[2]);
            console.log("Canarias Serena agregada al carrito");
            break;

        case "4":
            carrito.push(productos[3]);
            console.log("Baldo agregada al carrito");
            break;

        case "5":
            console.log("Carrito: ");
            mostrarCarrito(carrito);
            break;

        case "6":
            let confirmaSalida = confirm("Estas seguro que deseas finalizar tu compra?"); 
            if (confirmaSalida) {
                console.log("Gracias por su compra, el total a pagar es: $" + calcularTotal(carrito));
                salir = true;
            }
            break;

        default:
            alert("Opción no válida");
            break;
    }
} while (!salir);



    