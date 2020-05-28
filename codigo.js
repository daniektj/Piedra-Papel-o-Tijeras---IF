var usuario = prompt("Selecciona una de las siguientes opciones" + "  1- Piedra   2-Papel   3-Tijeras");
var opciones = ["incorrecto", "Piedra", "Papel", "Tijeras"];
var maquina = Math.floor((Math.random() * 3) + 1);
var num = maquina.toFixed(0);

if (usuario == 0) {
    document.getElementById("resultado").innerHTML = "No valido";
} else if (usuario > 3) {
    document.getElementById("resultado").innerHTML = "No valido";
} else {
    analisis()
}

function analisis() {
    if (usuario == num) {
        document.getElementById("resultado").innerHTML = "EMPATE";
        resultados()
    } else if (usuario == 1) {
        if (num == 2) {
            document.getElementById("resultado").innerHTML = "PERDISTE";
            resultados()
        } else {
            document.getElementById("resultado").innerHTML = "GANASTE";
            resultados()
        }
    } else if (usuario == 2) {
        
        if (num == 3) {
            document.getElementById("resultado").innerHTML = "PERDISTE";
            resultados()
        } else {
            
            document.getElementById("resultado").innerHTML = "GANASTE";
            resultados()
        }
    } else if (usuario == 3) {
        if (num == 1) {
            document.getElementById("resultado").innerHTML = "PERDISTE";
            resultados()
        } else {
            document.getElementById("resultado").innerHTML = "GANASTE";
            resultados()
        }
    }
}


function resultados() {
    document.getElementById("maquina_resultado").innerHTML = opciones[maquina];
    document.getElementById("usuario_eleccion").innerHTML = opciones[usuario]
}
