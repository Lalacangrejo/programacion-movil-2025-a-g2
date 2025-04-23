# Módulos de Desarrollo para sitios Web

## 🧭 Módulo 1: Exploradores web y marcado

### Introducción
En este módulo se analiza el papel de los desarrolladores web en la creación de experiencias digitales. Se explica cómo se desarrolla y presenta el contenido en los exploradores web, los retos de transmitir datos por Internet y cómo el lenguaje de marcado contribuye a superarlos. También se abordan aspectos importantes para garantizar una experiencia positiva a todos los usuarios.

### Objetivos del curso
- Explicar la función de los exploradores web.
- Reconocer los desafíos de transmitir contenido por Internet que el lenguaje de marcado ayuda a resolver.
- Describir la relación entre los exploradores web y el lenguaje de marcado.
- Identificar los elementos que los desarrolladores consideran al trabajar con distintos exploradores.

### ¿Qué hacen los exploradores web?
Los exploradores permiten acceder e interactuar con recursos en Internet. Para mostrar contenido (como títulos, párrafos o imágenes), requieren instrucciones en un lenguaje que entiendan: el lenguaje de marcado.

### Ejemplo de marcado:
**Texto en negrita:**
```html
<b>El desarrollo web es divertido</b>
```
**Lista sin ordenar:**
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

### Desafíos que resuelven los exploradores web y el marcado
Uno de los retos principales es la incrustación de archivos como imágenes o vídeos, lo que puede incrementar el tamaño del documento y reducir su rendimiento.

### La experiencia en el explorador web
Anteriormente, los desarrolladores debían adaptar su código a múltiples estándares de navegadores. Hoy, con estándares más consistentes, pueden enfocarse en un código más limpio y uniforme. La experiencia del usuario en todos los dispositivos es clave.

---

## 📄 Módulo 2: HTML: el lenguaje de la web

### Introducción
Este módulo revisa la evolución del lenguaje HTML, su estructura y cómo se usa para presentar contenido web. Se destacan etiquetas, atributos y su función presentacional.

### Objetivos del curso
- Explicar los hitos históricos en el desarrollo de HTML.
- Identificar la estructura típica de un documento HTML.
- Describir cómo HTML presenta el contenido web.

### Antecedentes del código HTML
**El comienzo: GML**  
En los años 60, IBM desarrolló el Generalized Markup Language (GML) para estructurar documentos.

**SGML**  
Posteriormente surgió el Standardized Generalized Markup Language (SGML), más flexible, permitiendo omitir etiquetas de cierre.

**Llega HTML**  
En 1989, Tim Berners-Lee creó HTML, basado en SGML, para visualizar información en los exploradores.

### Estructura de un documento HTML
HTML requiere una estructura definida para que el navegador interprete correctamente el contenido.

**Ejemplo:**
```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

### Utilizar HTML para presentar y dar formato
HTML es un lenguaje declarativo, lo que significa que describe cómo debe mostrarse el contenido, pero no cómo procesarlo.

---

## ⚙️ Módulo 3: HTML5: la evolución del hipertexto

### Introducción
Este módulo aborda las mejoras que HTML5 ofrece en la estructuración de documentos, la manipulación de datos y la incorporación de interactividad. Se enfatiza también la importancia de la compatibilidad entre exploradores.

### Objetivos del curso
- Reconocer las mejoras que HTML5 aporta al desarrollo web y la experiencia del usuario.
- Comprender la necesidad de que los exploradores sean compatibles con HTML5.

### Cambios importantes de HTML5
Antes de HTML5, se necesitaban herramientas externas para añadir interactividad o multimedia. Con HTML5 se integran nuevas funcionalidades como:
- Arrastrar y soltar elementos.
- Guardar cambios directamente en el servidor.
- Insertar y editar contenido multimedia de forma nativa.

---

## 🎨 Módulo 4: CSS: Estilo y Diseño

### Introducción
Las hojas de estilo en cascada (CSS) separan el contenido de su presentación. Este módulo explica cómo aplicar estilos visuales a páginas web, mejorando tanto el diseño como la experiencia del usuario.

### Objetivos
- Aplicar estilos CSS a elementos HTML.
- Comprender los selectores y el modelo de caja.
- Utilizar propiedades de CSS para mejorar el diseño visual.

### Contenido Principal
CSS controla la estética de un sitio web: colores, fuentes, espaciado, distribución de elementos. El modelo de caja es esencial para entender cómo se gestionan márgenes, bordes, rellenos y el contenido. Los estilos se aplican mediante selectores, y la naturaleza en cascada de CSS permite definir prioridades y jerarquías.

---

## 📜 Módulo 5: Introducción a JavaScript

### Introducción
JavaScript permite que las páginas web sean interactivas. Este módulo cubre conceptos esenciales, manipulación del DOM y manejo de eventos del usuario.

### Objetivos
- Comprender las bases de JavaScript.
- Manipular el DOM usando JavaScript.
- Responder a eventos del usuario para lograr interactividad.

### Contenido Principal
JavaScript permite responder a interacciones del usuario como clics, desplazamientos o formularios. Puede cambiar el contenido de una página sin recargarla, y su integración con HTML y CSS hace que los sitios sean dinámicos y adaptables.

---

## 🛠️ Módulo 6: Herramientas del Desarrollador

### Introducción
Este módulo introduce las herramientas modernas que facilitan el desarrollo web: consolas, depuradores y análisis de rendimiento.

### Objetivos
- Conocer las herramientas de desarrollo disponibles en los navegadores.
- Usar consolas y depuradores para detectar errores.
- Aplicar buenas prácticas para depuración y optimización.

### Contenido Principal
Las herramientas para desarrolladores (como Chrome DevTools) permiten inspeccionar elementos HTML, depurar JavaScript y medir el rendimiento del sitio. Son fundamentales para corregir errores en tiempo real, optimizar velocidad y asegurar accesibilidad. Las buenas prácticas ayudan a mantener un flujo de trabajo eficaz y profesional.