<template>
    <Header msg="Aujourd'hui"></Header>
    <div id="liste">
        <div class="container">
            <div v-if="!loading" class="row">
                <div v-if="MatchToday">
                    <span class="mb-4">{{ MatchToday[0].date }}</span>
                    <div v-for="match in MatchToday" class="col-12 pt-4 pb-4">
                        <span>{{ match.time }}</span>
                        <div class="row">
                            <div class="col-4">
                                <img :src="getFlag(match.home_team.country)" width="20" height="15">
                                <span class="d-block mt-1">{{ match.home_team.name }}</span>
                            </div>
                            <div class="col-4">
                                <div class="score">
                                    <span v-if="match.status != 'future_scheduled'" class="d-block">{{
                                            match.home_team.goals
                                    }} - {{ match.away_team.goals }}</span>
                                    <span v-else class="d-block"> vs </span>
                                </div>
                                <span v-if="match.status != 'future_scheduled'" class="d-block">{{ match.status
                                }}</span>
                            </div>
                            <div class="col-4">
                                <img :src="getFlag(match.away_team.country)" width="20" height="15">
                                <span class="d-block mt-1">{{ match.away_team.name }}</span>
                            </div>
                            <span class="mt-2">{{ match.venue }}</span>

                            <span v-if="match.stage_name == 'First stage'" class="mt-1"><i>Phase de groupes - Groupe {{
                                    match.group
                            }}</i></span>
                            <span v-else class="mt-1"><i>{{ match.stage_name }}</i></span>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <span>No matches today</span>
                </div>
            </div>
            <div v-else class="chargement"><br><br><br><br><br><br>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import flags from '../store/flag.js'
import req from '../store/'
import { datetimeformat, today, addGroup } from "../utils/index.js"

export default {
    components: {
        Header,
    },
    data() {
        return {
            loading: true,
            MatchToday: []
        }
    },

    created() {
        this.fetchMatchToday()
    },

    methods: {
        getFlag: function (code) {
            return flags[code]
        },
        fetchMatchToday: function () {
            const that = this
            req.get(today)
                .then(function(response)  {
                    if (response.data.length != 0){
                        that.MatchToday = response.data
                        datetimeformat(that.MatchToday)
                        addGroup(that.MatchToday)
                    }else{
                        that.MatchToday = null
                    }
                    that.loading = false
                });
        }

    }
}
</script>

<style>
#liste {
    margin: 0;
    color: white;
    text-align: center;
    margin-bottom: 20vh;
}

#liste span {
    font-size: 18p;
    ;
}


#liste .container .row .col-12 {
    background-color: #360000;
    margin-bottom: 10px;

}

.team {
    display: block;
}

.score {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}
</style>