//Un parte de codigo escrito 18/4/2022 - Para projecto java - 
//Gayleeee - mainIndex
function cambiarColorFondo(){
    let bg = document.body;
    let valor = 0xFFFFFF;
    let random = Math.random() * valor; 
    random = Math.floor(random);
    random = random.toString(16);//16 para convertir el numero en hexadecimal.
    console.log(random);
    let randColor = random.padStart(6, 0);//para rellenar el codigo del color acaso que es menos que 6
    
    bg.style.backgroundColor =`#${randColor}`;
};
function blancoColorFondo(){
    let bg = document.body;
    bg.style.backgroundColor =`#ffffff`;

}

//Gayleeee - Presupuesto - 22-4-2022


let listaGastos = document.getElementById("presupuesto");
let listaServicios = [];
let node;
let gastosTotal=Number(0);
let gastosContenedor = document.getElementById("gastosTotal");

//Recibe un parametro de numero que esta pre-introducido en su parte HTML
//Segun eleccion del usuario , se crea un nodo nuevo de "span" con clases de bootstrap
//Añade el nodo al <div> del HTML, y pasar el precioServicio al otro funcion para actualizar el gasto total

//24-4-2025
//añadir el opcion de borrar el servicio
//funcion que recibe 2 parametros,  el ID del nodo que se ha creado con funcion de agregarServicio()
//y el precio del servicio del nodo, el id sirve para identificar el elemento que queremos eliminar
//el precio para actualizar el gastos total.

//PAGINA PRESUPUESTO ACABADO.

function agregarServicio(numeroServicio){
    let nombre;
    let precioServicio;
    switch(numeroServicio){
        case 1:
            nombre="Pintar Casa";
            precioServicio=500;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 mt-1");
            node.setAttribute("id","pintar");
            node.setAttribute("onclick",`removerServicio("pintar",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            
            break;
        case 2:
            nombre="Reformar Edificio";
            precioServicio=1500;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","reformar");
            node.setAttribute("onclick",`removerServicio("reformar",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
        case 3:
            nombre="Meter Jardin";
            precioServicio=2000;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","jardin");
            node.setAttribute("onclick",`removerServicio("jardin",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
        case 4:
            nombre="Mantenimiento Especial";
            precioServicio=5000;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","mantenimiento");
            node.setAttribute("onclick",`removerServicio("mantenimiento",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
        case 5:
            nombre="Diseñar Destino";
            precioServicio=10000;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","destino");
            node.setAttribute("onclick",`removerServicio("destino",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
        case 6:
            nombre="Asiaticos";
            precioServicio=20;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","asiaticos");
            node.setAttribute("onclick",`removerServicio("asiaticos",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
        case 7:
            nombre="P***s";
            precioServicio=20;
            node = document.createElement("span");
            node.setAttribute("class","badge beigeC w-75 p-3 m-1");
            node.setAttribute("id","peons");
            node.setAttribute("onclick",`removerServicio("peons",${precioServicio})`);
            node.textContent = `${nombre} €${precioServicio}/hora`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
                             
    }
}

//Recibe un parametro, el precio del servicio.
//Sumar lo con la variable en ambito global y actualizar lo en el html 
function gastosAgregar(precio){
   gastosTotal+=precio;
   gastosContenedor.innerHTML=`TOTAL €${gastosTotal}`;
}

function removerServicio(id,precioServicio){
   let remover = document.getElementById(`${id}`);
   remover.remove();
   gastosAgregar(-precioServicio);
}