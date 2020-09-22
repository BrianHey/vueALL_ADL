<template>
  <div>
      <h1>Inventario</h1>
    <b-table striped hover :items="juguetes" :fields="fields"></b-table>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    data() {
      return {
        fields: ['id', 'nombre', 'stock', 'precio'],
      }
    },
    computed: {
        ...mapState([
            "juguetes"

        ])
    },
    

  }
</script>