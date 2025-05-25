<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 text-center">Lista de Enfermeros</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-green-600 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Edad</th>
            <th class="p-4">Correo</th>
            <th class="p-4">Turno Asignado</th>
            <th class="p-4">Área de Atención</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="enfermero in enfermeros" 
            :key="enfermero.id" 
            class="border-b text-gray-700 text-center hover:bg-green-100 transition duration-300"
          >
            <td class="p-4">{{ enfermero.nombre }}</td>
            <td class="p-4">{{ enfermero.apellido }}</td>
            <td class="p-4">{{ enfermero.edad }}</td>
            <td class="p-4">{{ enfermero.correo }}</td>
            <td class="p-4">{{ enfermero.turnoAsignado }}</td>
            <td class="p-4">{{ enfermero.areaAtencion }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const enfermeros = ref(BaseData.enfermeros);
</script>

<style scoped>
.container {
  max-width: 1200px;
  background: #e6f4ea; /* Verde claro */
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #c3e6cb; /* Verde suave */
}

h1 {
  color: #2d3748; /* Gris oscuro */
}

th {
  font-weight: bold;
  text-transform: uppercase;
  background: #38a169; /* Verde oscuro */
  color: white;
}

td {
  padding: 12px;
  color: #2d3748; /* Gris oscuro */
}

tr:hover {
  background: #c6f6d5; /* Verde claro al pasar el mouse */
}

table {
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

thead {
  background: #38a169; /* Verde oscuro */
  color: white;
}

tbody tr:nth-child(even) {
  background: #f7fafc; /* Gris claro */
}

tbody tr:nth-child(odd) {
  background: #edf2f7; /* Gris más claro */
}
</style>