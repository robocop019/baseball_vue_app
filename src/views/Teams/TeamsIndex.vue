<template>
  <div class="teams-index">
    <div v-for="team in teams">
      <router-link :to="'/teams/' + team.id"> 
        <h2> {{team.name}} </h2> 
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