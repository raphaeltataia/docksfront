<template>
  <div>
    <input type="text" name="name" v-model="name">
    <input type="text" name="initials" v-model="initials">
    <input type="submit" name="enviar" value="enviar" v-on:click="enviar">
  </div>
    
  </div>
</template>

<script>
  import axios from 'axios'



export default {
  name: 'hello',
  data () {
    return {
      name:"",
      initials:"",
    }
  },
  created(){

  },
  methods:{
    enviar:function(){
      axios.post('http://localhost:8000/companys/', {
        name: this._data.name,
        initials: this._data.initials,
      })
      .then(response=>{
        alert("Enviou")
      }).catch(e=>{
        
        console.log(e.response.data)

      })
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
