<template>
<div>
  <h1>Ventas</h1>
<b-table striped hover :items="historialDeVentas"></b-table>
</div>
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  computed: {
    ...mapState(["historialDeVentas"]),
  },
};
</script>