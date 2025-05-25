<template>
  <div class="container mx-auto p-6">
    <div class="card">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Acciones</h1>
      <div class="buttons-container">
        <button class="btn btn-primary" @click="agregar">Agregar</button>
        <button class="btn btn-warning" @click="modificar">Modificar</button>
        <button class="btn btn-danger" @click="eliminar">Eliminar</button>
        <button class="btn btn-info" @click="consultar">Consultar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    agregar() {
      alert('Agregar funcionalidad no implementada aún.');
    },
    modificar() {
      alert('Modificar funcionalidad no implementada aún.');
    },
    eliminar() {
      alert('Eliminar funcionalidad no implementada aún.');
    },
    consultar() {
      alert('Consultar funcionalidad no implementada aún.');
    }
  }
};
</script>

<style scoped>
/* Contenedor principal */
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #f9fafb; /* Fondo gris claro */
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Tarjeta */
.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra más ligera */
  text-align: center;
}

/* Contenedor de botones */
.buttons-container {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Espaciado entre botones */
  margin-top: 20px;
}

/* Botones */
.btn {
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease; /* Transición suave */
}

/* Botón primario */
.btn-primary {
  background-color: #4f46e5; /* Azul moderno */
  color: white;
}

.btn-primary:hover {
  background-color: #4338ca; /* Azul más oscuro */
}

/* Botón de advertencia */
.btn-warning {
  background-color: #f59e0b; /* Amarillo */
  color: white;
}

.btn-warning:hover {
  background-color: #d97706; /* Amarillo más oscuro */
}

/* Botón de peligro */
.btn-danger {
  background-color: #ef4444; /* Rojo */
  color: white;
}

.btn-danger:hover {
  background-color: #dc2626; /* Rojo más oscuro */
}

/* Botón de información */
.btn-info {
  background-color: #3b82f6; /* Azul claro */
  color: white;
}

.btn-info:hover {
  background-color: #2563eb; /* Azul más oscuro */
}
</style>
