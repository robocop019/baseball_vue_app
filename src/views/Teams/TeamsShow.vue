<template>
  <div class="teams-show">
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1> {{team.name}} </h1>
        </div>

      </div> <!-- end .row -->

      <h3> Record: {{team.wins}} - {{team.losses}} - {{team.ties}} </h3>

      <div class="row">
        <div class="col-6">
          <h3>Schedule</h3>
          <table class="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Final</th>
              </tr>
            </thead>
          </table>
        </div>

        <div class="col-6">
          <h3>Standings</h3>
          <table class="table table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>Central</th>
                <th>Team</th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                <th>GB</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div class="row">
        
        <h4>Roster and Stats</h4>

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
              <th scope="col">BB</th>
              <th scope="col">HBP</th>
              <th scope="col">SB</th>
              <th scope="col">AVG</th>
              <th scope="col">OBP</th>
              <th scope="col">SLG</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='player in players'>
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
              <td> {{player.hitting_stats.walks}} </td>
              <td> {{player.hitting_stats.hbp}} </td>
              <td> {{player.hitting_stats.stolen_bases}} </td>
              <td> {{player.hitting_stats.avg}} </td>
              <td> {{player.hitting_stats.obp}} </td>
              <td> {{player.hitting_stats.slg}} </td>
            </tr>
          </tbody>
        </table>

      </div> <!-- end .row -->

    </div> <!-- end .container -->
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
        team: {},
        players: []
      };
    },
    created: function() {
      axios.get('/api/teams/' + this.$route.params.id).then(response => {
        this.team = response.data;
      });

      axios.get('/api/players?team_id=' + this.$route.params.id).then(response => {
        this.players = response.data;
      });
    },
    methods: {}
  }
</script>