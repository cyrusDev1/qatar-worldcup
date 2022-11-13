<template>
    <Header msg="Classement"></Header><br><br><br>
    <div class="container classement text-color: white">
        <div v-if="!loading" class="row">
            <div v-for="group in Standing" class="col-12 table-responsive tb">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="name" >Group {{ group.letter }}</th>
                            <th class="center" scope="col">MP</th>
                            <th class="center" scope="col">W</th>
                            <th class="center" scope="col">D</th>
                            <th class="center" scope="col">L</th>
                            <th class="center" scope="col">GS</th>
                            <th class="center" scope="col">GL</th>
                            <th class="center" scope="col">GD</th>
                            <th class="center" scope="col">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(team, index) in group.teams">
                            <td class="name">{{ index + 1 }} <img :src="getFlag(team.country)" width="20" height="15">
                                <span >{{ team.name }}</span>
                            </td>
                            <td class="center">{{ team.games_played ? team.games_played : 0 }}</td>
                            <td class="center">{{ team.wins ? team.wins : 0 }}</td>
                            <td class="center">{{ team.draws ? team.draws : 0 }}</td>
                            <td class="center">{{ team.losses ? team.losses : 0 }}</td>
                            <td class="center">{{ team.goals_for ? team.goals_for : 0 }}</td>
                            <td class="center">{{ team.goals_against ? team.goals_against : 0 }}</td>
                            <td class="center">{{ team.goal_differential ? team.goal_differential : 0 }}</td>
                            <td class="center">{{ team.group_points ? team.group_points : 0 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            

        </div>
        <div v-else class="chargement">
                <div class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
        </div>
    </div>
    <br><br><br><br>
</template>
<script>
import Header from "../components/Header.vue";
import flags from '../store/flag.js'
import req from '../store/'
import { standing } from "../utils/index.js"

export default{
    components:{
        Header,
    },
    data(){
        return {
            loading: true,
            Standing: []
        }
    },

    created(){
        this.fetchStanding()
    },

    methods: {
        getFlag: function(code){
            return flags[code]
        },
        fetchStanding: function(){
            req.get(standing)
            .then(response => {
                this.Standing = response.data.groups
                this.loading = false
            });
        }
    }
}
</script>

<style>

.classement .table{
    background-color: #360000;
    font-size: 15px;
    color: white;
    
    
}
 
.classement .table .name{
    white-space: nowrap;
    min-width: 155px;
 }
 .classement .table .name span{
    margin-left: 5px;
 }
 
 .center{
     text-align: center;
 }
</style>