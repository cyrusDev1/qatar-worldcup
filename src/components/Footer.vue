<template>
       <div id="menu">
            <div class="row menu">
                <div class="col-3">
                    <router-link to="today"><i class="fa fa-futbol"></i></router-link>
                    <span class="desc">Aujourd'hui</span>
                </div>
                <div class="col-3">
                    <router-link to="calendar"><i class="fa fa-calendar"></i></router-link>
                    <span class="desc">Calendrier</span>
                </div>
                <div class="col-3">
                    <router-link to="standing"><i class="fa fa-list"></i></router-link>
                    <span class="desc">Classement</span>
                </div>
                <div class="col-3">
                    <router-link to="prono"><i class="fa fa-trophy"></i></router-link>
                    <span class="desc">Pronostic</span>
                </div>
            </div>
        </div>
</template>

<script>

</script>

<style>

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: #8d1b3d;
}
.vr-color{
    color: #8d1b3d;
}
.vr-back{
    background-color: #8d1b3d;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}


#menu .text {
    margin-top: 3vh;
}

#menu .text p {
    color: white;
    font-size: 18px;
}

#menu .button button {
    color: white;
}

#menu .menu {
    background-color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0;
    border-top: 3px solid #CCCCCC;
}

#menu .menu a {
    color: #8d1b3d;
    font-size: 25px;
}

#menu .menu .col-3 span {
    font-size: 10px;
    text-align: center;
    display: block;

}


#menu .active {
    color: black;
}

</style>