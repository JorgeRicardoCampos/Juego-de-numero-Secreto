let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);  
            document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        //El usuario no acierta
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número Secreto es menor')
        } else {
            asignarTextoElemento('p','El número Secreto es mayor')
        }
        intentos++;
        limpiarCaja();   
    }
    return;
}

//Limpiar la caja
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';    
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo )+1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    } else {
 
    //Revisar si el numero está en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indica Mensaje de inicio
    //Generar número aleatorio
    //Iniciar número de intentos
    condicionesIniciales();
    //Deshabilitar boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);