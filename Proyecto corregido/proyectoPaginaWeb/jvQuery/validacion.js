//Documento js para las validaciones del formulario
function validar() {
    //Variables
    const name = document.getElementById("fname").value;
    const apellido = document.getElementById("lname");
    const telefono = document.getElementById("lnumero");




    //funciones

    

//Fucnion para validar el nombre

    function nombre() {
        if (name == ""){
            //este if lo que hace es que si el campo está vacio nos salta un alert para que comprobemos el campo que no estamos rellenando
            alert("Comprueba que el nombre esta bien escrito, recuerda que solo están permitidas las letras!!");
            document.getElementById("fname").style.borderColor = "#FF0000";
        } else {
            if ((name != "") ) {
                document.getElementById("fname").style.borderColor = "black;"
            }
        }
    }       
    nombre();

    
//Funcion para validar el numero de telefono
    function numero() {
    //Si el campo está vacio sale una alerta y se ponen los bordes del campo rojos
        if (telefono == "") {
            alert("Inserte su numero por favor");
            document.getElementById("lnumero").style.borderColor = "#FF0000";
        } else {
            //Si se rellena se queda el campo de color negro (eso lo ponemos pq sino se queda el campo en rojo)
            if (name != "") {
                document.getElementById("lnumero").style.borderColor = "black;"
            }
        }
    }
    numero();
    

    //preventDefaults

    const enviar = document.getElementById("enviar");

    enviar.addEventListener("click", function (e) {
        e.preventDefault();
    });

}