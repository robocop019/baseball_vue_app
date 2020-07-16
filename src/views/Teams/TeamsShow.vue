<template>
  <div class="teams-show">
    <h1> {{team.name}} </h1>

    <h3> Record: {{team.wins}} - {{team.losses}} - {{team.ties}} </h3>

    <h4>Roster</h4>
    <ul v-for='player in team.players'>
      <li> {{player.name}} </li>
    </ul>

  </div> <!-- end .teams-show -->
</template>

<style>
  li {
    list-style: none;
  }
</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        team: {}
      };
    },
    created: function() {
      axios.get('/api/teams/' + this.$route.params.id).then(response => {
        this.team = response.data;
      });
    },
    methods: {}
  }
</script>