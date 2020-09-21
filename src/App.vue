<template>
<div>
  <h1>soy app</h1>
  <router-link :to="{name:'Inicio'}">Inicio</router-link>
  <router-link :to="{name:'Ventas'}">Ventas</router-link>
  <router-link :to="{name:'Busqueda'}">Busqueda</router-link>
  <router-link :to="{name:'Inventario'}">Inventario</router-link>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: "App",
};
</script>
