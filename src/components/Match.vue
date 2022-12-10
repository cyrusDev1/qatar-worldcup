<template class="template">
    <div class="match">
        <div class="time">
            {{ match.time }}
        </div> 
        <div class="vs">
            <div>
                <div class="home">
                    <span v-if="match.stage_name == 'Round of 16'">{{ match.home_team.country }}</span>
                    <span v-else >{{ match.home_team.name == 'To Be Determined' ? "TBD" : match.home_team.name }}</span>
                </div>
                <img v-if="match.status == 'future_scheduled' || match.status == 'completed'" :src="getFlag(match.home_team.country)" class="home-flag" width="20" height="15">
            </div>
            <div  class="sc">
                <span v-if="match.status != 'future_scheduled'" class="d-block">{{ match.home_team.goals }} : {{ match.away_team.goals }}</span>
                <span v-else class="d-block"> vs </span>
            </div>
            <div>
                <img v-if="match.status == 'future_scheduled' || match.status == 'completed'" :src="getFlag(match.away_team.country)" class="away-flag" width="20" height="15">  
                <div class="away">
                    <span v-if="match.stage_name == 'Round of 16'" >{{ match.away_team.country }}</span>
                    <span v-else >{{ match.away_team.name == 'To Be Determined' ? "TBD" : match.away_team.name }}</span>
                </div>
            </div>
        </div>
    </div>
    <span v-if="match.stage_name != 'First stage'" class="ct">{{ match.winner ? `Winner: ${match.winner}` : ''}} </span>
    <span v-else class="ct"></span>

</template>

<script>
import flags from '../store/flag.js'

export default {
    props: {
        match: {
            type: Object
        }
    },
    methods: {
        getFlag: function(code){
            return flags[code]
        },
    }
}
</script>

<style>
.match{
    display: flex;
    font-size: 11px;
    color: white;
    margin: 3px 0;
    align-items: center;

 }

.vs{
    width: 100%;
    display: flex;
     margin-left: 10px;
    justify-content: center;
}

.vs div{
    display: flex;
    align-items: center;
    width: 80px;
}
.vs div {
   display: flex;
   width: 45%;
 }
.vs div .home{
    justify-content: flex-end;
    width: 90%;
 }
 
 .vs div .away{
    justify-content: flex-start;
 }
 .vs div img{
    width: 18px;
    height: 15px;
    margin: 0 3px;
    vertical-align: middle
 }
.sc{
    max-width: 12%;
    display: flex;
    justify-content: center;
}
.ct{
    display: flex;
    justify-content: center;
    font-size: 10px;
    border-bottom: 1px solid wheat;
    color: white;
    font-weight: bolder;
    margin-bottom: 30px;
}
</style>