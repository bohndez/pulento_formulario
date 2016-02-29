// FUNCIÓN crearAjax ====================================================
function crearAjax(){
    var ajax;
    if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
    }else{
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return ajax;
}



// CLASE PulentoFormulario ==============================================
/**
 * Se crea la clase PulentoFormulario.
 * @param {name} formularioId toma el name de un formulario.
 */
function PulentoFormulario(formularioId){
    this.nombre = formularioId;
}

//MÉTODOS PARA VALIDAR ------------------------------------------------
PulentoFormulario.campoObligatorio = function(nameCampo, idError, txtError){
    valor = document.getElementsByName(nameCampo)[0].value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.campoNumerico = function(nameCampo, idError, txtError){
    valor = document.getElementsByName(nameCampo)[0].value;
    if( isNaN(valor) || valor.length == 0 || /^\s+$/.test(valor) ) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.campoEmail = function(nameCampo, idError, txtError){
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    valor = document.getElementsByName(nameCampo)[0].value;
    if( !expr.test(valor) || valor.length == 0 || /^\s+$/.test(valor)) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.campoSoloTexto = function(nameCampo, idError, txtError){
    expr = /^[a-zA-Z]/;
    valor = document.getElementsByName(nameCampo)[0].value;
    if(!expr.test(valor)){
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.rutCL = function(nameCampo, idError, txtError){
    var suma=0;
    var numeros=Array(3, 2, 7, 6, 5, 4, 3, 2);
    // var rut = document.getElementsByName(nameCampo);
    var rut = document.getElementsByName(nameCampo)[0];

    // console.log('rut: '+ rut)

    var rutB = rut.value.split(".");
    // console.log(rutB);

    var aux = "";
    for (var i = 0; i < rutB.length; i++) {
        aux += rutB[i];
    };
    
    // console.log('rut: '+aux);
    rut = aux;
    
    for (var i = 0; i <= rut.length-3; i++) {
            var m =(10-rut.length)+i
            suma+= numeros[m]*rut.substr(i,1);
    };
    var dv;
    if (11-(suma%11) == 10){
        dv = 'K';
    }
    else if(11-(suma%11) == 11){
        dv = 0;
    }
    else{
        dv = 11-(suma%11);
    }

    var digito = rut.substr(rut.length-1,1).toUpperCase();
    if(digito != dv  || digito.length == 0 || /^\s+$/.test(digito)){
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.telefonoCL = function(nameCampo, idError, txtError){
    valor = document.getElementsByName(nameCampo)[0].value;

    var aux = false;

    if ( (/^\+\d{2,3}\s\d{8}$/.test(valor)) ) {
        aux = true;
    } else if( (/^\+\d{10,11}$/.test(valor)) ){
        aux = true;
    }

    if( !aux ) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    } else {
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.campoFecha = function(nameCampo, idError, txtError){
    valor = document.getElementsByName(nameCampo)[0].value;
    if ( !(/^\d{2}\-\d{2}\-\d{4}$/.test(valor)) ) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.lista = function(nameCampo, idError, txtError){
    valor = document.getElementsByName(nameCampo)[0].value;
    if( valor == null || valor == 0 )  {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.checkbox = function(nameCampo, idError, txtError){
    checkbox = document.getElementsByName(nameCampo)[0];
    if( !checkbox.checked)  {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nameCampo)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nameCampo)[0].classList.remove('pulentoError');
        return true;
    }
}

PulentoFormulario.radioButton = function(nombreRadioButton, idError, txtError){
    opciones = document.getElementsByName(nombreRadioButton);
    var seleccionado = false;
    for(var i=0; i<opciones.length; i++) {
        if(opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }
    if(!seleccionado) {
        document.getElementById(idError).innerHTML = txtError;
        document.getElementsByName(nombreRadioButton)[0].classList.add('pulentoError');
        return false;

    }else{
        document.getElementById(idError).innerHTML = "";
        document.getElementsByName(nombreRadioButton)[0].classList.remove('pulentoError');
        return true;
    }
}

// MÉTODO que recorre y valida los elementos del formulario ------------------
PulentoFormulario.soloValidar = function(formulario, btnEnviar, arrayValidacion){
    var OK;

    document.getElementById(btnEnviar).addEventListener('click', function(e){
        e.preventDefault();
        OK = true;

        for (var i = 0; i < arrayValidacion.length; i++) {
            var tipoVal         = arrayValidacion[i].tipo;
            var campoVal        = arrayValidacion[i].nameCampo;
            var muestraErrorVal = arrayValidacion[i].idMuestraError;

            if (!PulentoFormulario[tipoVal](campoVal, muestraErrorVal)) {
                OK = false;
            }
        }

        if (OK) {
            document.getElementById(btnEnviar).disabled = true;
        }
        return OK;
    });
}




// MÉTODO que recorre y valida los elementos del formulario ------------------
PulentoFormulario.validar = function(formulario, btnEnviar, arrayValidacion){
    var OK;

    // document.getElementById(btnEnviar).addEventListener('click', function(e){
        
        OK = true;

        for (var i = 0; i < arrayValidacion.length; i++) {
            var tipoVal         = arrayValidacion[i].tipo;
            var campoVal        = arrayValidacion[i].nameCampo;
            var muestraErrorVal = arrayValidacion[i].idMuestraError;
            var txtError        = arrayValidacion[i].mensajeError;

            if (!PulentoFormulario[tipoVal](campoVal, muestraErrorVal, txtError)) {
                OK = false;
            }
        }

        if (OK) {
            document.getElementById(btnEnviar).disabled = true;
        }
        return OK;
    // });
}

// Metodos para enviar ==================================================
PulentoFormulario.enviarPOST = function(formulario, procesoPHP, funcionOK, funcionKO){

    // Selecciono el formulario.
    var elFormulario = document.forms[formulario].elements;
    // Creo una variable para guardar los datos del formulario.
    var datos = "";

    // Pregunto si el primer campo que voy a guardar es un Radio Button.
    if (elFormulario[0].type == "radio") {
        //Si está chequeado guardo su nombre y su valor.
        if (elFormulario[0].checked) {
            datos += elFormulario[0].name + "=" + elFormulario[0].value;
        }
    // Si no es radio Button entonces guardo de inmediato su nombre y valor.
    }else{
        datos += elFormulario[0].name + "=" + elFormulario[0].value;
    }

    // Recorro el formulario desde el segundo elemento en adelante.
    for (var i = 1; i < elFormulario.length; i++) {
        // Si el campo es un radio Button.
        if (elFormulario[i].type == "radio") {
            //Si está seleccionado guardo su nombre y valor.
            if (elFormulario[i].checked) {
                datos += "&" + elFormulario[i].name + "=" + elFormulario[i].value;
            }
        // Si no es radio Button guardo inmediatamente su nombre y valor.
        }else{
            datos += "&" + elFormulario[i].name + "=" + elFormulario[i].value;
        }
    }

    //Creo un objeto ajax con la función crearAjax();
    ajax = crearAjax();

    // Pregunto por el estado para recibir la respuesta en un elemento html.
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200) {
            respuesta = ajax.responseText;

            if (respuesta.toUpperCase() == "OK") {
                if (funcionOK != undefined) {
                    funcionOK();
                }
            }else{
                if (funcionKO != undefined) {
                    funcionKO();
                }
            }
        }
    }

    // ajax.open("POST", "controlador.php?"+datos, true);
    //Abro la conexión.
    ajax.open("POST", procesoPHP, true);
    // Genero un Header.
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // Envío los datos.
    ajax.send(datos);
}


PulentoFormulario.enviarGET = function(formulario, procesoPHP, funcionOK, funcionKO){
    var respuesta = "";
    var OK = false;
    // Selecciono el formulario.
    var elFormulario = document.forms[formulario].elements;
    // Creo una variable para guardar los datos del formulario.
    var datos = "";

    // Pregunto si el primer campo que voy a guardar es un Radio Button.
    if (elFormulario[0].type == "radio") {
        //Si está chequeado guardo su nombre y su valor.
        if (elFormulario[0].checked) {
            datos += elFormulario[0].name + "=" + elFormulario[0].value;
        }
    // Si no es radio Button entonces guardo de inmediato su nombre y valor.
    }else{
        datos += elFormulario[0].name + "=" + elFormulario[0].value;
    }

    // Recorro el formulario desde el segundo elemento en adelante.
    for (var i = 1; i < elFormulario.length; i++) {
        // Si el campo es un radio Button.
        if (elFormulario[i].type == "radio") {
            //Si está seleccionado guardo su nombre y valor.
            if (elFormulario[i].checked) {
                datos += "&" + elFormulario[i].name + "=" + elFormulario[i].value;
            }
        // Si no es radio Button guardo inmediatamente su nombre y valor.
        }else{
            datos += "&" + elFormulario[i].name + "=" + elFormulario[i].value;
        }
    }

    //Creo un objeto ajax con la función crearAjax();
    ajax = crearAjax();


    // Pregunto por el estado para recibir la respuesta en un elemento html.
    ajax.onreadystatechange = function(){
        if (ajax.readyState == 4 && ajax.status == 200) {
            respuesta = ajax.responseText;

            if (respuesta.toUpperCase() == "OK") {
                if (funcionOK != undefined) {
                    funcionOK();
                }
                OK = true;
            }else{
                if (funcionKO != undefined) {
                    funcionKO();
                }
            }
        }
    }

    //Abro la conexión.
    ajax.open("GET", procesoPHP+"?"+datos, true);
    // Envío los datos.
    ajax.send();

}
PulentoFormulario.validarEnviar = function(formulario, btnEnviar, arrayValidacion, enviar, metodo, procesoPHP, funcionOK, funcionKO){
    var OK;
    var enviarr = "enviar"+metodo;

    document.getElementById(btnEnviar).addEventListener('click', function(e){
        e.preventDefault();
        OK  = false;

        if (PulentoFormulario.validar(formulario ,btnEnviar, arrayValidacion)){
            OK = true;

            if (enviar != undefined && metodo != undefined) {
                PulentoFormulario[enviarr](formulario, procesoPHP, funcionOK, funcionKO);
            }
        }
 
    });
}