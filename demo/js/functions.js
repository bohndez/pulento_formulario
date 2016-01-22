// ARRAY CON LOS ELEMENTOS DEL FORMULARIO  PARA VALIDAR.
var formulario1 = [
    {
        tipo           : 'campoObligatorio',
        nameCampo      : 'obligatorio',
        idMuestraError : 'obligatorioError',
        mensajeError   : 'Campo Obligatorio'
    },
    {
        tipo           : 'campoNumerico',
        nameCampo      : 'numerico',
        idMuestraError : 'numericoError',
        mensajeError   : 'Debe ser un número'
    },
    {
        tipo           : 'campoEmail',
        nameCampo      : 'email',
        idMuestraError : 'emailError',
        mensajeError   : 'Debe ser un email'
    },
    {
        tipo           : 'campoSoloTexto',
        nameCampo      : 'soloTexto',
        idMuestraError : 'soloTextoError',
        mensajeError   : 'Debe escribir sólo texto'
    },
    {
        tipo           : 'rutCL',
        nameCampo      : 'rut',
        idMuestraError : 'rutError',
        mensajeError   : 'Debe escribir un rut'
    },
    {
        tipo           : 'telefonoCL',
        nameCampo      : 'telefono',
        idMuestraError : 'telefonoError',
        mensajeError   : 'Debe escribir un teléfono'
    },
    {
        tipo           : 'campoFecha',
        nameCampo      : 'fecha',
        idMuestraError : 'fechaError',
        mensajeError   : 'Debe escribir una fecha'
    },
    {
        tipo           : 'radioButton',
        nameCampo      : 'opcion',
        idMuestraError : 'opcionError',
        mensajeError   : 'Debe seleccionar uno'
    },
    {
        tipo           : 'campoObligatorio',
        nameCampo      : 'textArea',
        idMuestraError : 'textAreaError',
        mensajeError   : 'Debe escribir algo'
    },
    {
        tipo           : 'lista',
        nameCampo      : 'select',
        idMuestraError : 'listaError',
        mensajeError   : 'Debe elegir uno'
    },
    {
        tipo           : 'checkbox',
        nameCampo      : 'checkbox',
        idMuestraError : 'checkboxError',
        mensajeError   : 'Debe chequearlo'
    }
];
document.getElementById('modal1').getElementsByClassName('cerrar')[0].addEventListener('click', function(){
    document.getElementById('modal1').classList.add('oculto');
    document.getElementById('modal1').style.display = "";

});
document.getElementById('modal2').getElementsByClassName('cerrar')[0].addEventListener('click', function(){
    document.getElementById('modal2').classList.add('oculto');
    document.getElementById('modal2').style.display = "";
});

//FUNCIÓN PARA QUE SE EJECUTE SI SE PROCESÓ BIEN.
function todoBien(){
    document.getElementById('modal1').classList.remove('oculto');
    document.getElementById('modal1').style.display = "table";
}

//FUNCIÓN PARA QUE SE EJECUTE SI SE PROCESÓ BIEN.
function todoMal(){
    document.getElementById('modal2').classList.remove('oculto');
    document.getElementById('modal2').style.display = "table";
}


// LLAMADO AL MÉTODO QUE VALIDA - - - - - - - - - - - - - - - - - - - - - - - - - - - -

PulentoFormulario.validarEnviar(
    'unFormulario',          // Formulario a validar. Tipo: string con el name del formulario.
    'enviar',                // Botón o elemento que al hacer click valida los datos. Tipo: string con el id del elemento.
    formulario1,             // Array con los elementos a validar. Tipo: Array con JSON dentro.
    true,                    // Envío por ajax a un PHP que lo procese. Tipo boolean. Con true envía, con false sólo valida y no envía.
    'POST',                   // Método de envío. Tipo string y acepta sólo "POST" o "GET"
    "controlador.txt",       // Archivo (o ruta del archivo) que lo procesa. Tipo: string con la ruta del archivo que lo procesa.
    todoBien,                // Función si se procesó bien. Tipo: function. Sólo debe pasarse el nombre de la función sin "()".
    todoMal                  // Función si se procesó bien. Tipo: function. Sólo debe pasarse el nombre de la función sin "()".
);


// PulentoFormulario.soloValidar(
//     'unFormulario',          // Formulario a validar. Tipo: string con el name del formulario.
//     'enviar',                // Botón o elemento que al hacer click valida los datos. Tipo: string con el id del elemento.
//     formulario1              // Array con los elementos a validar. Tipo: Array con JSON dentro.
// );






