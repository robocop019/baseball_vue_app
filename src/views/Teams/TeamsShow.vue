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
              <tr v-for='team in sortedTeams'>
                <td> {{team.name}} </td>
                <td> {{team.wins}} </td>
                <td> {{team.losses}} </td>
                <td> {{team.ties}} </td>
                <td> {{teams[0].differential - team.differential}} </td>
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
              <th v-on:click="setHittingSortAttribute('number')" scope="col">#</th>
              <th  v-on:click="setHittingSortAttribute('name')" scope="col">Name</th>
              <th v-on:click="setHittingSortAttribute('position')" scope="col">POS</th>
              <th v-on:click="setHittingSortAttribute('at_bats')" scope="col">AB</th>
              <th v-on:click="setHittingSortAttribute('hits')" scope="col">H</th>
              <th v-on:click="setHittingSortAttribute('doubles')" scope="col">2B</th>
              <th v-on:click="setHittingSortAttribute('triples')" scope="col">3B</th>
              <th v-on:click="setHittingSortAttribute('home_runs')" scope="col">HR</th>
              <th v-on:click="setHittingSortAttribute('runs')" scope="col">R</th>
              <th v-on:click="setHittingSortAttribute('rbis')" scope="col">RBI</th>
              <th v-on:click="setHittingSortAttribute('walks')" scope="col">BB</th>
              <th v-on:click="setHittingSortAttribute('hbp')" scope="col">HBP</th>
              <th v-on:click="setHittingSortAttribute('stolen_bases')" scope="col">SB</th>
              <th v-on:click="setHittingSortAttribute('avg')" scope="col">AVG</th>
              <th v-on:click="setHittingSortAttribute('obp')" scope="col">OBP</th>
              <th v-on:click="setHittingSortAttribute('slg')" scope="col">SLG</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='player in sortedPlayers'>
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
              <th v-on:click="setPitchingSortAttribute('number')" scope="col">#</th>
              <th v-on:click="setPitchingSortAttribute('name')" scope="col">Name</th>
              <th v-on:click="setPitchingSortAttribute('wins')" scope="col">W</th>
              <th v-on:click="setPitchingSortAttribute('losses')" scope="col">L</th>
              <th v-on:click="setPitchingSortAttribute('era')" scope="col">ERA</th>
              <th v-on:click="setPitchingSortAttribute('appearances')" scope="col">APP</th>
              <th v-on:click="setPitchingSortAttribute('starts')" scope="col">GS</th>
              <th v-on:click="setPitchingSortAttribute('saves')" scope="col">S</th>
              <th v-on:click="setPitchingSortAttribute('innings')" scope="col">IP</th>
              <th v-on:click="setPitchingSortAttribute('hits')" scope="col">H</th>
              <th v-on:click="setPitchingSortAttribute('runs')" scope="col">R</th>
              <th v-on:click="setPitchingSortAttribute('earned_runs')" scope="col">ER</th>
              <th v-on:click="setPitchingSortAttribute('strikeouts')" scope="col">K</th>
              <th v-on:click="setPitchingSortAttribute('walks')" scope="col">BB</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for='pitcher in sortedPitchers'>
              <th scope="row"> {{pitcher.number}} </th>
              <td> {{pitcher.name}} </td>
              <td> {{pitcher.pitching_stats.wins}} </td>
              <td> {{pitcher.pitching_stats.losses}} </td>
              <td> {{pitcher.pitching_stats.era}} </td>
              <td> {{pitcher.pitching_stats.appearances}} </td>
              <td> {{pitcher.pitching_stats.starts}} </td>
              <td> {{pitcher.pitching_stats.saves}} </td>
              <td> {{pitcher.pitching_stats.innings}} </td>
              <td> {{pitcher.pitching_stats.hits}} </td>
              <td> {{pitcher.pitching_stats.runs}} </td>
              <td> {{pitcher.pitching_stats.earned_runs}} </td>
              <td> {{pitcher.pitching_stats.walks}} </td>
              <td> {{pitcher.pitching_stats.strikeouts}} </td>
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
        pitchers: [],
        currentHitSort: 'avg',
        currentPitchSort: 'appearances',
        currentHitSortDir: -1,
        currentPitchSortDir: -1
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
    methods: {
      setHittingSortAttribute: function(inputAttribute) {

        if (this.currentHitSort === inputAttribute) {
          this.currentHitSortDir *= -1;
        } else {
          this.currentHitSort = inputAttribute;
          this.currentHitSortDir = -1;
        }
      },

      setPitchingSortAttribute: function(inputAttribute) {
        if (this.currentPitchSort === inputAttribute) {
          this.currentPitchSortDir *= -1;
        } else {
          this.currentPitchSort = inputAttribute;
          this.currentPitchSortDir = -1;
        }
      }
    },

  computed: {
    sortedTeams: function() {

      return this.teams.sort(compare)

      function compare(a, b) {
        const teamA = a.differential
        const teamB = b.differential

        let comparison = 0
        
        if (teamA < teamB) {
          comparison = 1
        } else if (teamB < teamA) {
          comparison = -1
        }
        return comparison
      }
    },

    sortedPlayers: function() {

      return this.players.sort((a,b) => {
        let modifier = 1;
        if(this.currentHitSortDir === -1) modifier = -1;

        if(this.currentHitSort === 'number'  || this.currentHitSort ===  'name' || this.currentHitSort ===  'position') {
          if(a[this.currentHitSort] < b[this.currentHitSort]) return -1 * modifier;
          if(a[this.currentHitSort] > b[this.currentHitSort]) return 1 * modifier;
          return 0;
        } else {
          if(a.hitting_stats[this.currentHitSort] < b.hitting_stats[this.currentHitSort]) return -1 * modifier;
          if(a.hitting_stats[this.currentHitSort] > b.hitting_stats[this.currentHitSort]) return 1 * modifier;
          return 0;
        }
      });
    },

    sortedPitchers: function() {
      return this.pitchers.sort((a,b) => {
        let modifier = 1;
        if(this.currentPitchSortDir === -1) modifier = -1;

        if(this.currentPitchSort === 'number'  || this.currentPitchSort ===  'name') {
          if(a[this.currentPitchSort] < b[this.currentPitchSort]) return -1 * modifier;
          if(a[this.currentPitchSort] > b[this.currentPitchSort]) return 1 * modifier;
          return 0;
        } else {
          if(a.pitching_stats[this.currentPitchSort] < b.pitching_stats[this.currentPitchSort]) return -1 * modifier;
          if(a.pitching_stats[this.currentPitchSort] > b.pitching_stats[this.currentPitchSort]) return 1 * modifier;
          return 0;
        }
      });
    }
  }
}
</script>