<template>
	<div class="home">
    <label for=""> Id </label>
		<b-form-input id="input-2" v-model="id"  placeholder="Nombre"></b-form-input>
		<label for=""> Nombre </label>
		<b-form-input id="input-2"  placeholder="Nombre"></b-form-input>
		<label for=""> Stock </label>
		<b-form-input id="input-2"  placeholder="Stock"></b-form-input>
		<label for=""> Precio </label>
		<b-form-input id="input-2" placeholder="Precio"></b-form-input>
		<b-button type="submit" @click="Descontar" variant="primary">Comprar</b-button>
	</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    Descontar() {
       this.$store.dispatch("descontar" , this.id)
    },
  },
  data (){
    return {
      id : ""
    }
  }
};
</script>
