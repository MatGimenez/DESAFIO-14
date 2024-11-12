const listaNav = [
    {
        id:1,
        nombre: "En venta",
        url: "./propiedades_venta.html"
    },
    {
        id:2,
        nombre: "Alquiler",
        url: "./propiedades_alquiler.html"
    },
]

let bodyItem = document.querySelector('body')
let itemId = bodyItem.id
console.log (itemId)


let listaNavegador = document.querySelector(".navProductos")
let arrayLista = ""

for (let lista of listaNav){
    if( itemId != lista.id){
        console.log("ingresa " + lista.id)
        arrayLista+= `
            <li class="nav-item">
                <a id="item-${lista.id}"class="nav-link active" aria-current="page" href="${lista.url}">${lista.nombre}</a>
            </li>
        `
    }else{
    }
    
}
listaNavegador.innerHTML = arrayLista
