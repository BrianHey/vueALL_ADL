<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for='(item, indice) in items' :key="indice">
      <img :src="item.links[0].href" width="100" alt="">
      <h6>{{item.data[0].title}}</h6>
      <p>{{item.data[0].description}}</p>

    </div>
  </div>
</template>
<script>
export default {
  computed: {
    items(){
      return this.$store.state.data.collection.items
    } 
  },
 
}
</script>
