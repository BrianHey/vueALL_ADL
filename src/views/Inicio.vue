<template>
<div class="home container px-5">
  <label for>Id</label>
  <select class="form-control">
    <option v-for="(juguete,i) in juguetes" :key="i" :value="juguete.nombre">{{juguete.nombre}}</option>
  </select>
  <!-- <b-form-input id="input-2" v-model="id" placeholder="Nombre"></b-form-input> -->
  <label for>Nombre</label>
  <b-form-input :disabled="true" id="input-2" v-model="juguete.nombre" placeholder="Nombre"></b-form-input>
  <label for>Stock</label>
  <b-form-input :disabled="true" id="input-2" v-model="juguete.stock" placeholder="Stock"></b-form-input>
  <label for>Precio</label>
  <b-form-input :disabled="true" id="input-2" v-model="juguete.precio" placeholder="Precio"></b-form-input>
  <b-button type="submit" @click="Descontar" variant="primary">Comprar</b-button>
</div>
</template>

<script>
import {
  mapState,
  mapGetters
} from "vuex";
export default {
  name: "Home",
  methods: {
    Descontar() {
      this.$store.dispatch("descontar", this.id);
    },
  },
  data() {
    return {
      id: "",
    };
  },
  computed: {
    ...mapState(["juguetes"]),
    juguete() {
      let juguete = {
        nombre: "",
        precio: "",
        stock: "",
      };
      return this.juguetes.find((j) => j.id == this.id) || juguete;
    },
    ...mapGetters(["ids"]),
  },
};
</script>
