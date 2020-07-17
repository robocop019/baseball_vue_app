<template>
  <div class="teams-index">
    <h1>Central League</h1>
    <div v-for="team in teams">
      <router-link :to="'/teams/' + team.id"> 
        <h3> {{team.name}} </h3> 
      </router-link>
    </div>
  </div>
</template>

<style>
  
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        teams: []
      };
    },
    created: function() {
      axios.get('/api/teams').then(response => {
        this.teams = response.data;
      });
    },
    methods: {}
  };
</script>