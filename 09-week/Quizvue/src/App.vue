<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Gestión de Personal</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/medico">Médico</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/enfermero">Enfermero</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recepcionista">Recepcionista</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/paciente">Paciente</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
