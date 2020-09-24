<template>
<div>
  <h1>Inventario</h1>
  {{id}}
  <b-table striped hover :items="juguetes"></b-table>
</div>
</template>

<script>
import {
  v4 as uuidv4
} from "uuid";
import {
  mapState
} from "vuex";
export default {
  computed: {
    ...mapState(["juguetes"]),
  },

  data() {
    return {
      id: "",
    };
  },

  mounted() {
    this.id = uuidv4().slice(30);
  },
};
</script>
