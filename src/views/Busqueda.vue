<template>
    <div>
         <h1>Búsqueda de producto Disponible</h1>
    <input type="text" v-model="filtroPorId" />
    <ul v-if="productoDisponiblePorId.length > 0">
      <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
        <label>nombre: {{producto.nombre}} | stock: {{producto.stock}} | precio: ${{producto.precio}}</label>
      </li>
    </ul>
   
        
    </div>
</template>


<script>

export default {
  name: "Busqueda",
  data() {
    return {
      filtroPorId: "",
    };
  },
  computed: {
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.filtroPorId);
    },
  },
};
</script>

<style></style>

