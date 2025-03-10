📌 Historia de Usuario: Crear una App para Pedidos de Restaurante
🏷 01_HU - Funcionalidad Base
Como cliente de la aplicación de pedidos para pizzas, Quiero seleccionar productos del menú y conocer el valor total de mi pedido, Para poder confirmar mi compra de manera informada.

🎯 Prioridad: Alta
🏆 Estimación: 8 puntos en Scrum
✅ Criterios de aceptación
El cliente puede navegar por el menú y ver los productos disponibles.
El cliente puede agregar productos a su pedido.
El sistema muestra el valor total de la cuenta antes de confirmar el pedido.
El pedido solo se confirma si hay productos en el carrito.
Se muestra un mensaje de confirmación del pedido con el resumen de la compra.
📊 Modelo Relacional - App de Domicilios de Pizzas
🗂 Tablas principales
1️⃣ Tabla de usuarios
id_usuario (PK, serial)
nombre (varchar(100))
correo electrónico (varchar(100))
contraseña (varchar(255))
tipo_usuario (varchar(20))
2️⃣ Tabla de pedidos
id_pedido (PK, número de serie)
id_usuario (FK, entero)
total (numérico(10,2))
fecha_pedido (marca de tiempo)
3️⃣ Tabla detalle_pedidos
id_detalle (PK, número de serie)
id_pedido (FK, entero)
id_producto (FK, entero)
cantidad (entero)
subtotal (numérico(10,2))
4️⃣ Tabla de productos
id_producto (PK, número de serie)
nombre (varchar(100))
precio (numerico(10,2))
stock (entero)
5️⃣ Tabla de facturas
id_factura (PK, serial)
id_pedido (FK, entero)
fecha_emision (sello de tiempo)
total (numérico(10,2))
6️⃣ Tabla sugerencias_reclamos
id_sugerencia (PK, serial)
id_usuario (FK, entero)
mensaje (texto)
estado (varchar(20))
fecha (sello de tiempo)
7️⃣ Tabla de inventario
id_insumo (PK, número de serie)
nombre (varchar(100))
cantidad (entero)
umbral_minimo (entero)
fecha_actualizacion (marca de tiempo)
🔗 Relaciones principales
usuarios → pedidos (1:N)
pedidos → detalle_pedidos (1:N)
detalle_pedidos → productos (N:1)
pedidos → facturas (1:1)
usuarios → sugerencias_reclamos (1:N)
inventario gestiona la cantidad de insumos disponibles.
📌 Análisis del Modelo de Base de Datos
1️⃣ Usuario
🏷 Atributos:
id_usuario: entero
nombre: cadena
correo electrónico: cadena
contraseña: cadena
tipo_usuario: enum (cliente, cajero, domiciliario)
🛠 Métodos:
iniciarSesion()
Registrarse()
enviarSugerencia(mensaje: string)
RealizarPedido()
verHistorialPedidos()
2️⃣ Cajero (Extiende Usuario)
🏷 Atributos:
id_cajero: entero
🛠 Métodos:
tomarPedido()
generarFactura(id_pedido: entero)
procesarPago(id_pedido: entero)
3️⃣ Domiciliario (Extiende Usuario)
🏷 Atributos:
id_domiciliario: entero
🛠 Métodos:
verPedidosAsignados()
marcarPedidoEntregado(id_pedido: entero)
📌 Diagramas de secuencia
1️⃣ Diagrama Secuencial - Usuario
Resumen:
Proceso desde el acceso al sistema hasta la generación de la factura.

Pasos:
Registro/Iniciar sesión
Selección de productos
Cálculo del total del pedido
Confirmación del pedido
Generación de factura
2️⃣ Diagrama Secuencial - Administrador
Resumen:
Interacción del Administrador con el Sistema y el Cliente.

Pasos:
Iniciar sesión
Consultar menú y disponibilidad
Confirmar y procesar pago
Generar factura electronica
Registrar pedido del cliente
Notificar confirmación del pedido
Calcular el total del pedido
Finalizar transacción
3️⃣ Diagrama Secuencial - Domiciliario
Resumen:
Interacción del domiciliario con el sistema en la entrega de pedidos.

Pasos:
Recibir notificación del pedido
Acepta pedido
Consultar detalles del pedido
Confirmar recolección
Entrega el pedido
Confirma entrega y finaliza
🚀 Conclusión
Esta estructura define un sistema robusto para la gestión de pedidos, facturación e inventario en un restaurante. Se detallan las interacciones clave entre clientes, administradores y domiciliarios, garantizando eficiencia en el flujo de compra. 🎯