<template>
  <div class="teams-show">
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1> {{currentTeam.name}} </h1>
        </div>

      </div> <!-- end .row -->

      <h3> Record: {{currentTeam.wins}} - {{currentTeam.losses}} - {{currentTeam.ties}} </h3>

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
                <th>Team</th>
                <th>W</th>
                <th>L</th>
                <th>T</th>
                <th>GB</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for='team in teams'>
                <td> {{team.name}} </td>
                <td> {{team.wins}} </td>
                <td> {{team.losses}} </td>
                <td> {{team.ties}} </td>
                <td> GBS </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        
        <h4>Roster and Hitting Stats</h4>

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

       <div class="row">
        
        <h4>Pitching Stats</h4>

        <table class="table table-striped table-dark table-hover">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">APP</th>
              <th scope="col">GS</th>
              <th scope="col">W</th>
              <th scope="col">L</th>
              <th scope="col">S</th>
              <th scope="col">IP</th>
              <th scope="col">H</th>
              <th scope="col">R</th>
              <th scope="col">ER</th>
              <th scope="col">K</th>
              <th scope="col">BB</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='pitcher in pitchers'>
              <th scope="row"> {{pitcher.number}} </th>
              <td> {{pitcher.name}} </td>
              <td> {{pitcher.pitching_stats.appearances}} </td>
              <td> {{pitcher.pitching_stats.starts}} </td>
              <td> {{pitcher.pitching_stats.wins}} </td>
              <td> {{pitcher.pitching_stats.losses}} </td>
              <td> {{pitcher.pitching_stats.saves}} </td>
              <td> {{pitcher.pitching_stats.innings}} </td>
              <td> {{pitcher.pitching_stats.hits}} </td>
              <td> {{pitcher.pitching_stats.runs}} </td>
              <td> {{pitcher.pitching_stats.earned_runs}} </td>
              <td> {{pitcher.pitching_stats.strikeouts}} </td>
              <td> {{pitcher.pitching_stats.walks}} </td>
            </tr>
          </tbody>
        </table>

      </div> <!-- end .row -->

    </div> <!-- end .container -->
  </div> <!-- end .teams-show -->
</template>

<style>

</style>

<script>
  import axios from 'axios';

  export default {
    data: function() {
      return {
        currentTeam: {},
        division: '',
        teams: [],
        players: [],
        pitchers: []
      };
    },
    created: function() {

      axios.get('/api/teams/' + this.$route.params.id).then(response => {
        this.currentTeam = response.data;
        this.division = response.data.division;

        axios.get('/api/teams?division=' + this.division).then(response => {
          this.teams = response.data
        });
      });


      axios.get('/api/players?team_id=' + this.$route.params.id).then(response => {
        this.players = response.data;
      });

      axios.get('/api/players?team_id=' + this.$route.params.id + '&pitcher=true').then(response => {
        this.pitchers = response.data;
      });
    },
    methods: {}
  }
</script>