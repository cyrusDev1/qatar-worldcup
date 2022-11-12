<template>
    <Header msg="Aujourd'hui"></Header>
     

</template>
<script>
import Header from "../components/Header.vue";
export default{
    components:{
        Header,
    },
    data(){
        return {
            loading: false,
        }
    }
}
</script>

<style>


</style>