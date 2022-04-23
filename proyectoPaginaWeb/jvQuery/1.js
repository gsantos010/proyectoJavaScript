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
//Gayleeee - Presupuesto
let listaGastos = document.getElementById("presupuesto");
let listaServicios = [];
let node;
let gastosTotal=0;
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
            node.textContent = `${nombre} €${precioServicio}/hora`;
            listaGastos.appendChild(node);
            gastosAgregar(precioServicio);
            break;
                             
    }
}

function gastosAgregar(precio){
    gastosTotal+=precio;
    let gastosContenedor = document.getElementById("gastosTotal").innerHTML="TOTAL €"+gastosTotal;
}