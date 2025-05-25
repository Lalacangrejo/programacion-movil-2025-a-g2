<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">Lista de Pacientes</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-purple-600 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Edad</th>
            <th class="p-4">Correo</th>
            <th class="p-4">Tipo de Afiliación</th>
            <th class="p-4">Número de Historia Clínica</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="paciente in pacientes" 
            :key="paciente.id" 
            class="border-b text-gray-700 text-center hover:bg-purple-100 transition duration-300"
          >
            <td class="p-4">{{ paciente.nombre }}</td>
            <td class="p-4">{{ paciente.apellido }}</td>
            <td class="p-4">{{ paciente.edad }}</td>
            <td class="p-4">{{ paciente.correo }}</td>
            <td class="p-4">{{ paciente.tipoAfiliacion }}</td>
            <td class="p-4">{{ paciente.numeroHistoriaClinica }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const pacientes = ref(BaseData.pacientes);
</script>

<style scoped>
/* Contenedor principal */
.container {
  max-width: 1200px;
  background: #f9f5ff; /* Lila claro */
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e9d8fd; /* Lila suave */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

/* Título */
h1 {
  color: #2d3748; /* Gris oscuro */
}

/* Tabla */
table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ligera */
}

/* Encabezado de la tabla */
thead {
  background: #6b46c1; /* Lila oscuro */
  color: white;
}

th {
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px;
}

/* Celdas */
td {
  padding: 12px;
  color: #2d3748; /* Gris oscuro */
}

/* Filas alternadas */
tbody tr:nth-child(even) {
  background: #f7fafc; /* Gris claro */
}

tbody tr:nth-child(odd) {
  background: #edf2f7; /* Gris más claro */
}

/* Hover en filas */
tr:hover {
  background: #e9d8fd; /* Lila claro al pasar el mouse */
  transition: background 0.3s ease; /* Transición suave */
}
</style>