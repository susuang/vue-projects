<template>
 <div class="login">
 	<cell></cell>
 </div>
</template>

<script>
import Cell from 'components/cell/cell'
export default {
  name: 'login',
  components: {
    Cell
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
