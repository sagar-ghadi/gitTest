<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Cake count is : {{ $store.state.cakeCount }}</p>
    <button @click="cakeCountIncrement()">Increment Cake Count by 20</button>
    <button @click="cakeCountDecrement()">Decrement Cake Count by 20</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "HelloWorld",
  data() {
    return {
      show: true,
      msg: "Welcome to Your Vue.js App Sagar Ghadi",
    };
  },
  methods: {
    ...mapActions(['setCakeCountIncrement','setCakeCountDecrement']),
    cakeCountIncrement(){
      this.setCakeCountIncrement(20);
    },
    cakeCountDecrement(){
      this.setCakeCountDecrement(20);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
   color:red !important;
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
