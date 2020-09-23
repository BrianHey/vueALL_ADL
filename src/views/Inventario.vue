<template>
<div>
  <h1>Inventario</h1>
  <b-table striped hover :items="juguetes"></b-table>
</div>
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  computed: {
    ...mapState(["juguetes"]),
  },
};
</script>
