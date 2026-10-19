//Github (15%) si
//Array, al menos 5 elementos 15%
//Al menos 2 (push, unshift, pop, shift) elemento se muestra en mensaje 20% si
//Valor de buqueda validados con includes y su posicion con indexOf 15%
//Un splice que remplace el elemento de un indice concreto 20%
//funcion con for of que liste los elementos 15% si




function menu(productos){

    let elegir
     do {
        console.clear()

        console.log("1- Mostrar todos los productos")
        console.log("2- Agregar producto")
        console.log("3- Eliminar ultimo producto")
        console.log("4- Eliminar o remplazar producto")
        console.log("5- Salir")

        elegir = prompt("Elegir opcion")

        if (elegir == "1"){
            MostrarProductos(productos)
        }
        else if (elegir == "2"){
            AgregarProducto(productos)
        }
        else if (elegir == "3"){
            EliminarUltimoProducto(productos)
        } 
        else if (elegir == "4"){
            RemplazarProducto(productos)
        }
        else if (elegir != "5"){
            console.log("Opcion invalida")
        }

        
    } while (elegir != "5")

    console.log("Gracias por usar el programa")
}

function MostrarProductos(productos){
    console.clear()

    for (let producto of productos){
        console.log("-", producto)
    }
    prompt()
}

function AgregarProducto(productos){
    console.clear()
    
    let NuevoProducto = prompt("Ingresar nuevo producto")
    productos.push(NuevoProducto)
    console.log("Se agregó ", NuevoProducto, " a la lista")

    prompt()
}
function EliminarUltimoProducto(productos){
    console.clear()
    console.log(productos[productos.length-1])
    console.log("El producto ", productos[productos.length-1], "fue eliminado")
    productos.pop()

    prompt()
}
function RemplazarProducto(productos){
    console.clear()
    let EliminarProducto 
    
    do {
        EliminarProducto = prompt("Ingresar el nombre del producto que desea eliminar/remplazar. (0 para elegir por indice)")

        if (productos.includes(EliminarProducto) === false && EliminarProducto != "0"){
            console.log("No se encuentra el producto")
        }

    } while (productos.includes(EliminarProducto) == false && EliminarProducto != "0")
    
    let Eliminar

    if (EliminarProducto == "0"){
        let n = 0
        for (let producto of productos){
            n += 1 
            console.log(n, "- ", producto)
        }
        do {
            Eliminar = prompt("Que producto desea eliminar o remplazar?")
            Eliminar -= 1
        } while (Number(Eliminar) < 0 || Number(Eliminar) >= productos.length || Eliminar % 1 != 0)
    }
    else{
        Eliminar = productos.indexOf(EliminarProducto)
    }

    let Eleccion
    do {
        Eleccion = prompt("Desea eliminar(1) o remplazar(2) el producto?")
    } while (Eleccion != "1" && Eleccion != "2")


    if (Eleccion == "1"){
        productos.splice(Eliminar, 1)    
    }

    else{
        const remplazar = prompt("Con que producto desea remplazar el producto " + productos[Eliminar] + "?")
        productos.splice(Eliminar, 1, remplazar)
    }

    prompt()
    
}

console.log("--Bienvenido/a a la libreria--")
alert("--Bienvenido/a a la libreria--")
alert("Ir a consola")



let productos = ["Tijera", "Hoja A4", "Plasticola", "Abrochadora", "Afiche Blanco", "Silicona", "Lapicera"]

menu(productos)