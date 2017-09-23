<template>
 <div>  
   <div v-if="docks && docks.length">
      <h2>
        {{ docks[0].company.name }} - {{ docks[0].company.initials }}
      </h2>
     <div class="hello" v-for="dock of docks">
      <h4>{{ dock.date }} - {{dock.value}}</h4>
     </div>
   </div>
   <div class="hello" v-else>
     nothing to show
   </div>
 </div>
</template>

<script>
  import axios from 'axios';
export default {
  name: 'company_docks',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      docks: []
    }
  },
  created () {
    let id = this.$route.params.id;
    axios.get('http://127.0.0.1:8000/docks/' + id)
      .then(response => {
        // JSON responses are automatically parsed.
        this._data.docks = response.data;
      })
      .catch(e => {
        alert('erro ao buscar quotations')
        console.log(
          e.response.data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2, h4 {
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
