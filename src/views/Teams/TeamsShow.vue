<template>
  <div class="teams-show">
    <h1> {{team.name}} </h1>

    <h3> Record: {{team.wins}} - {{team.losses}} - {{team.ties}} </h3>
    
    <h4>Roster and Stats</h4>

    <!-- <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush" v-for='player in team.players'>
        <li class="list-group-item"> {{player.name}} </li>
      </ul>
    </div> --> <!-- end .card -->

    <table class="table table-striped table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">POS</th>
          <th scope="col">AB</th>
          <th scope="col">H</th>
          <th scope="col">2B</th>
          <th scope="col">3B</th>
          <th scope="col">HR</th>
          <th scope="col">R</th>
          <th scope="col">RBI</th>
          <th scope="col">AVG</th>
          <th scope="col">OBP</th>
          <th scope="col">BB</th>
          <th scope="col">HBP</th>
          <th scope="col">SB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='player in team.players'>
          <th scope="row"> {{player.number}} </th>
          <td> {{player.name}} </td>
          <td> {{player.position}} </td>
          <td> {{player.hitting_stats.at_bats}} </td>
          <td> {{player.hitting_stats.hits}} </td>
          <td> {{player.hitting_stats.doubles}} </td>
          <td> {{player.hitting_stats.triples}} </td>
          <td> {{player.hitting_stats.home_runs}} </td>
          <td> {{player.hitting_stats.runs}} </td>
          <td> {{player.hitting_stats.rbis}} </td>
          <td> {{player.hitting_stats.avg}} </td>
          <td> {{player.hitting_stats.obp}} </td>
          <td> {{player.hitting_stats.walks}} </td>
          <td> {{player.hitting_stats.hbp}} </td>
          <td> {{player.hitting_stats.stolen_bases}} </td>
        </tr>
      </tbody>
    </table>

  </div> <!-- end .teams-show -->
</template>

<style>
  li {
    list-style: none;
  }

  .card {
    text-align: center;
    margin: auto;
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