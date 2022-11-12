<template>
    <Header msg="Aujourd'hui"></Header>
    <div id="liste">
        <div class="container">
            <div v-if="!loading" class="row">
                <span class="mb-4">12 Novembre 2022</span>
                <div  class="col-12 pt-4 pb-4">
                    <span>12 00</span>
                    <div class="row">
                        <div class="col-4">
                            <img height="50" width="60">
                            <span class="d-block mt-1">Argentine</span>
                        </div>
                        <div class="col-4">
                            <div class="score">7 - 1
                                   
                            </div>
                             <span class="d-block">Terminé</span>
                             

                        </div>
                        <div class="col-4">
                            <img height="50" width="60" >
                            <span class="d-block mt-1">Brazil</span>
                        </div>
                        <span  class="mt-2">Phase de groupes - Groupe P</span>
                    </div>
                </div>
            </div>
           
            <div v-else class="chargement">
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
import flags from '../store'
export default{
    components:{
        Header,
    },
    data(){
        return {
            loading: false,
        }
    },
    methods:{
        getFlag: (code) => {
            return flags[code]
        }
    }
}
</script>

<style>

#liste{
    margin: 0;
    margin-top: 15vh;
     color: white;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 20vh;
}

#liste span{
  font-size: 18p;;
}


#liste .container .row .col-12{
    background-color: #360000;
    margin-bottom: 10px;

}
.team{
    display: block;
}
.score{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}


</style>