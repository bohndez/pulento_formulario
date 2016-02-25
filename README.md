Pulento Formulario
==========================

Validador de formularios con javascript.
No necesita jQuery ni librerías extra.


Tipos de campo para validar
--------------------------



Por ahora puedes validar todos estos campos:

- Campo Obligatorio.
- Campo Numerico.
- Campo Email.
- Campo Sólo Texto.
- Rut Chileno.
- Teléfono Chileno.
- Campo de Fecha
- Radio Button
- Lista (Select).
- Checkbox.

Luego se irán añadiendo más tipos de validación, más formatos de rut y teléfonos.



Uso
--------------------------

- 1- Incluir el archivo PulentoFormulario.min.js o PulentoFormulario.js dentro del directorio del proyecto y llámalo desde tu html.
```sh
<script src="js/PulentoFormulario.min.js"></script>
```


- 2- Si quieres puedes hacer tus validaciones en un archivo propio. En este caso yo le pondré functions.js y lo incluiré en mi html.
```sh
<script src="js/functions.js"></script>
```

- 3- En tu HTML deberás tener un campo con su "name" y un elemento html con un "id" donde irá el mensaje de error (puede ser un p, span, div, etc) y el elemento que al hacer click lo validará. Por ejemplo:

```sh
<form name="unFormulario" action="">
  <input name="obligatorio" type="text" placeholder="obligatorio">
  <p id="obligatorioError"></p>

  <input name="numerico" type="text" placeholder="numerico">
  <p id="numericoError"></p>

  <input name="email" type="text" placeholder="email">
  <p id="emailError"></p>

  <input name="soloTexto" type="text" placeholder="soloTexto">
  <p id="soloTextoError"></p>

  <input name="rut" type="text" placeholder="rut">
  <p id="rutError"></p>

  <input name="telefono" type="text" placeholder="+569 123456789">
  <p id="telefonoError"></p>

  <input name="fecha" type="text" placeholder="DD-MM-AAAA">
  <p id="fechaError"></p>
  
  <input name="opcion" type="radio" value="uno"> uno
  <input name="opcion" type="radio" value="dos"> dos
  <input name="opcion" type="radio" value="tres"> tres
  <p id="opcionError"></p>

  <textarea name="textArea" id="" cols="30" rows="10"></textarea>
  <p id="textAreaError"></p>

  <select name="select" id="">
      <option value="">elija uno</option>
      <option value="1">1</option>
      <option value="2">2</option>
  </select>
  <p id="listaError"></p>

  <input type="checkbox" name="checkbox" value="chequeado"> seleccione.
  <p id="checkboxError"></p>

  <input name="btn" id="enviar" type="submit" value="enviar">
</form>
```

En el caso de arriba está cada campo con su "name" y un elemento "p" que contendrá el error. Cada "p" debe tener un id.
El elemento que lo envia es un input del tipo submit con un "id" llamado "enviar".

- 4- En tu archivo javascript donde pondrás el código que valida (en mi caso functions.js) deberás hacerlo de la siguiente forma:
Escribir una variable tipo JSON con todos los campos a validar donde se indica el tipo de validación, name del campo, el ide del elemento donde se mostrará el error y el mensaje de error que aparecerá en él.

```sh
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
    tipo           : '3',
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
```


- 5- Finalmente llamamos al método que valida y le pasamos el JSON con los campos y los isguientes parámetros:
```sh
PulentoFormulario.validarEnviar(
  'unFormulario',          // Formulario a validar. Tipo: string con el name del formulario.
  'enviar',                // Botón o elemento que al hacer click valida los datos. Tipo: string con el id del elemento.
  formulario1,             // Array con los elementos a validar. Tipo: Array con JSON dentro.
  true,                    // Envío por ajax a un PHP que lo procese. Tipo boolean. Con true envía, con false sólo valida y no envía.
  'POST',                  // Método de envío. Tipo string y acepta sólo "POST" o "GET"
  "controlador.txt",       // Archivo (o ruta del archivo) que lo procesa. Tipo: string con la ruta del archivo que lo procesa.
  todoBien,                // Función si se procesó bien. Tipo: function. Sólo debe pasarse el nombre de la función sin "()".
  todoMal                  // Función si se procesó bien. Tipo: function. Sólo debe pasarse el nombre de la función sin "()".
);
```
Los últimos 2 parámetros (que en este caso se llaman "todoBien" y "todoMal" son funciones que puedes crear para mostrar algún mensaje de éxito o fracaso una vez que se haya validado y enviado el formulario.
Éstas funciones las defines tú.

En el demo he creado las funciones para que muestre una modal con el éxito o fracaso del envío de los datos del formulario a un archivo .txt. Tú puedes hacerlo con un archivo php o lo que sea siempre y cuando devuelvas un "ok" si todo salió bien y un "ko" si no se concretó la operación.


Demo en vivo
---------------------
[cajonarium.cl/github/PulentoFormulario/](http://cajonarium.cl/github/PulentoFormulario/)

Espero que les sirva.




Licencia
---------------------
MIT


Boris Hernández.
[cajonarium.cl](http://www.cajonarium.cl/)