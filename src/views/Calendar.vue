<template>
    <Header msg="Calendrier"></Header>
    <div class="container calendar">
        <div v-if="!loading" class="row">
            <div>
                <tabs :options="{ useUrlFragment: false }" nav-item-class="nav-item">
                    <tab name="Group phase">
                        <template v-for="(match, index) in Calendar">
                            <div v-if="match.stage_name === 'First stage'">
                                <Infobar  v-if="noSameDate(index)" :date="match.date"></Infobar>
                                <Match :match="match"></Match>
                            </div>
                        </template>
                    </tab>
                    <tab name="1/8">
                        <template v-for="(match, index) in Calendar">
                            <div v-if="match.stage_name === 'Round of 16'">
                                <Infobar  v-if="noSameDate(index)" :date="match.date"></Infobar>
                                <Match :match="match"></Match>
                            </div>
                        </template>
                    </tab>
                    <tab name="1/4">
                        <template v-for="(match, index) in Calendar">
                            <div v-if="match.stage_name === 'Quarter-final'">
                                <Infobar  v-if="noSameDate(index)" :date="match.date"></Infobar>
                                <Match :match="match"></Match>
                            </div>
                        </template>
                    </tab>
                    <tab name="1/2">
                        <template v-for="(match, index) in Calendar">
                            <div v-if="match.stage_name === 'Semi-final'">
                                <Infobar  :date="match.date"></Infobar>
                                <Match :match="match"></Match>
                            </div>
                        </template>
                    </tab>
                    <tab name="Finals">
                        <template v-for="(match, index) in Calendar">
                            <div v-if="match.stage_name === 'Play-off for third place' || match.stage_name === 'Final'">
                                <Infobar :date="match.date"></Infobar>
                                <Match :match="match"></Match>
                            </div>
                        </template>
                    </tab>
                </tabs>

            </div>
            

        </div>
        <div v-else class="chargement"><br><br><br><br><br><br>
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
import Infobar from "../components/Infobar.vue";
import Match from "../components/Match.vue";

import flags from '../store/flag.js'
import req from '../store/'
import { datetimeformat, calendar, addGroup } from "../utils/index.js"

export default {
    components: {
        Header: Header,
        Infobar: Infobar,
        Match: Match
    },
    data() {
        return {
            loading: true,
            Calendar: [],
        }
    },

    created() {
        this.fetchCalendar()
    },

    methods: {
        getFlag: function (code) {
            return flags[code]
        },
        noSameDate(index){
           const curr = this.Calendar[index].date
            const prev = this.Calendar[index - 1]?.date
            if (curr == prev)
                return false
            return true
        },
        fetchCalendar: function () {
            const that = this
            req.get(calendar)
                .then(function(response){
                    that.Calendar = response.data
                    datetimeformat(that.Calendar)
                    addGroup(that.Calendar)
                    that.loading = false
                });
        }
    }
}
</script>

<style>
.tabs-component-tabs {
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    list-style: none;
    min-width: 100%;
    padding-left: 0;
}


.is-active {
    border-bottom: 3px solid #360000;
}

.tabs-component-tabs li a {
    font-size: 15px;
    color: white;
    text-decoration: none;
}
.tabs-component-tabs li{
    border: none;
}
</style>