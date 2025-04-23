# Documentación del Módulo 4: Creación de Sitios Web Dinámicos con JavaScript

## Introducción
En este módulo del curso "Fundamentos del Desarrollo Web", aprendí sobre JavaScript, un lenguaje clave para crear sitios web dinámicos e interactivos. JavaScript puede ejecutarse tanto en el frontend (navegadores) como en el backend (servidores con Node.js). Se usa para modificar HTML, manejar CSS, gestionar datos y responder a interacciones del usuario.

## Integración de JavaScript en HTML
JavaScript puede incluirse en un documento HTML de tres formas principales:

- **En el cuerpo del documento**: Usando `<script>` dentro del `<body>`. Aunque funcional, puede afectar el rendimiento de carga.
- **En el encabezado del documento**: Usando `<script>` en el `<head>`. Carga el script antes del contenido, lo que puede retrasar la visualización.
- **En un archivo externo**: Usando `<script src="archivo.js">`. Es la mejor práctica para mantener un código limpio y modular.

## Manipulación del DOM
El DOM es la representación estructurada del HTML como objetos. JavaScript puede acceder y modificar estos elementos.

**Métodos comunes**:
- `getElementById()` – Selecciona un elemento por su id.
- `querySelector()` – Usa un selector CSS para seleccionar elementos.

**Ejemplo práctico**:
```javascript
document.getElementById("miParrafo").style.color = "red";
```

## Eventos en JavaScript
Los eventos permiten que la página reaccione a acciones del usuario (clics, teclas, formularios).

**Formas de manejar eventos**:
- Atributos en HTML: `onclick`, `onmouseover`.
- Escuchadores de eventos: `addEventListener()`.

**Ejemplo**:
```javascript
function cambiarEstilo() {
  document.getElementById("miParrafo").style.fontWeight = "bold";
}
```

## Modelos de Programación en JavaScript

### Programación Orientada a Objetos (POO)
JavaScript permite crear objetos con propiedades y métodos.

**Ejemplo**:
```javascript
const usuario = {
  nombre: "Juan",
  apellido: "Pérez",
  saludar: function() {
    return "Hola, " + this.nombre + " " + this.apellido;
  }
};
```

### Programación Funcional
Funciones como ciudadanos de primera clase.

**Ejemplo**:
```javascript
function saludar(nombre) {
  return function() {
    console.log("Hola, " + nombre);
  };
}
const saludoJuan = saludar("Juan");
saludoJuan(); // "Hola, Juan"
```

## Variables y Funciones
JavaScript es débilmente tipado y permite declarar variables con `var`, `let` o `const`.

**Ejemplo**:
```javascript
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 5)); // 8
```

## Expresiones y Operadores
JavaScript ofrece expresiones y operadores para realizar operaciones:

- Aritméticos: `+`, `-`, `*`, `/`
- Comparación: `==`, `!=`, `>`, `<`
- Lógicos: `&&`, `||`, `!`

## Trabajo con Datos
**Tipos comunes**:
- Booleanos: `true`, `false`
- Números
- Strings
- `null`
- `undefined`

## Operaciones CRUD y SQL
CRUD permite gestionar bases de datos:

- `SELECT`: Leer datos
- `INSERT`: Crear nuevos registros
- `UPDATE`: Modificar existentes
- `DELETE`: Eliminar datos

## Node.js y Backend
Node.js ejecuta JavaScript en el servidor.

**Ventajas**:
- Uso de JavaScript en frontend y backend.
- Uso de NPM para gestionar librerías.

## Bibliotecas y Frameworks
- **jQuery**: Facilita la manipulación del DOM.
- **React, Angular, Vue**: Frameworks para interfaces dinámicas.

## Ejemplo: Manipulación de Estilos
```html
<style>
div { font-weight: bold; color: black; font-size: 30px; }
</style>

<script>
function myClickFunction(){
  var elementName = document.getElementById("click-demo");
  elementName.style.fontStyle = (elementName.style.fontStyle != "italic") ? "italic" : "normal";
}
</script>
```

## Conclusión
Este módulo me proporcionó las bases para usar JavaScript en la creación de sitios web interactivos. Aprendí a integrarlo con HTML, manipular el DOM, responder a eventos, trabajar con datos y aplicar tanto POO como programación funcional. También exploré herramientas del backend con Node.js y frameworks modernos.