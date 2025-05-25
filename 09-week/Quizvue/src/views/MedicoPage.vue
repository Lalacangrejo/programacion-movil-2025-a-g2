<template>
  <div class="container mx-auto p-6 shadow-lg">
    <h1 class="text-3xl font-bold mb-6 text-gray-800 text-center">Lista de Médicos</h1>
    
    <div class="overflow-x-auto">
      <table class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white">
        <thead>
          <tr class="bg-indigo-600 text-white text-lg">
            <th class="p-4">Nombre</th>
            <th class="p-4">Apellido</th>
            <th class="p-4">Especialidad</th>
            <th class="p-4">Correo</th>
            <th class="p-4">Número de Consultorio</th>
            <th class="p-4">Número de Licencia Médico</th>
            <th class="p-4">Citas Programadas</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="medico in medicos" 
            :key="medico.id" 
            class="border-b text-gray-700 text-center hover:bg-indigo-100 transition duration-300"
          >
            <td class="p-4">{{ medico.nombre }}</td>
            <td class="p-4">{{ medico.apellido }}</td>
            <td class="p-4">{{ medico.especialidad }}</td>
            <td class="p-4">{{ medico.correo }}</td>
            <td class="p-4">{{ medico.numeroConsultorio }}</td>
            <td class="p-4">{{ medico.numeroLicenciaMedica }}</td>
            <td class="p-4">
              <ul class="list-disc list-inside text-left">
                <li v-for="(cita, index) in medico.citas" :key="index">
                  {{ cita.fecha }} - {{ cita.hora }} - {{ cita.paciente }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BaseData } from '../Components/BaseData.js';

const medicos = ref(BaseData.medicos);
</script>

<style scoped>
/* Contenedor principal */
.container {
  max-width: 1200px;
  background: #e6e8ff; /* Azul claro */
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #c3c8ff; /* Azul suave */
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
  background: #4c51bf; /* Azul oscuro */
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
  background: #c3dafe; /* Azul claro al pasar el mouse */
  transition: background 0.3s ease; /* Transición suave */
}
</style>