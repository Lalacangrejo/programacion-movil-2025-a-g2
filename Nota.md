📌 Programación Móvil – Clase del 25/02/2025
🔹 Actividades Realizadas
✅ Revisión y análisis de los tableros en Trello
✅ Resolución de dudas sobre la estructura y gestión de tareas
📍 Conceptos Claves
🔹 Entendimiento del Negocio en un Proyecto
📌 Análisis detallado de las Historias de Usuario (HU)
📌 Definición de criterios de aceptación y finalización
📌 Creación de mockups en Figma como ejercicio práctico
📌 Estructura de una Historia de Usuario
Descripción: Define el papel del usuario y su necesidad
Criterios de Aceptación: Funcionalidades esenciales
Criterios de Finalización: Condiciones necesarias para dar por terminada la HU
📌 Ejemplo:

json
Copiar
Editar
{
    "usuario": "Administrador del sistema",
    "objetivo": "Gestionar categorías de productos",
    "acciones": ["Registrar", "Actualizar", "Eliminar", "Consultar"]
}


🏗️ Modelado y Diseño del Proyecto
📌 Elementos Mínimos del Proyecto
✔️ Base de datos organizada
✔️ Definición de entidades y relaciones
📌 Ejemplo de Entidad Cliente:

json
Copiar
Editar
{
    "cliente": {
        "nombre": "Fernanda",
        "apellido": "Robayo",
        "fecha_nacimiento": "2004-08-20",
        "correo": "fernanda@email.com"
    }
}
📦 Módulos del Sistema
📊 Inventario
💳 Facturación
⚙ Parametrización
🛒 Ventas
🔒 Seguridad
📌 Modelado de Datos
✔️ El modelo debe ser incremental
✔️ Debe incluir diagramas de base de datos y secuencias
⚙️ Parametrización del Sistema
✔️ Inserciones controladas en la base de datos
✔️ Definición de parámetros clave:
🌍 Idioma
⏰ Jornadas y horarios
📅 Agenda y reservas
⏳ Segmentación de tiempo
📌 Diseño y Entrega de Tareas
✔️ Desglose de tareas en componentes:

🎨 Mockup
🔙 Backend
🖥 Frontend
🗄 Base de datos
⚙ DevOps
📄 Documentación
📊 Estimación y Criterios de Entrega

📌 Ejemplo de Historia de Usuario:

json
Copiar
Editar
{
    "usuario": "Administrador",
    "objetivo": "Gestionar categorías de productos",
    "criterios_aceptacion": [
        "Registro de categorías",
        "Edición de categorías",
        "Eliminación controlada",
        "Consulta optimizada"
    ]
}
✔️ Criterios de Finalización:
✅ Implementación completa y probada
✅ Código revisado y aprobado en Pull Request
✅ Demostración al Product Owner
✅ Documentación y pruebas actualizadas