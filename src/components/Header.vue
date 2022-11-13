<template>
   <div class="container" id="today">
            <header class="py-5">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
                    <div class="container">
                        <router-link to="/" class="navbar-brand text-white text-uppercase fs-1" href="#">
                           <span class="text-white fw-bold p-1  rounded-3">Qatar</span>2022
                        </router-link>
                        <div class="navbar justify-content-end" id="navbarNav">
                            <span class="route"><i>{{ msg }}</i></span>
                         </div>
                    </div>
                </nav>
            </header>
        </div>
</template>

<script>
export default{
    props: ["msg"]
}

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

 
#today .route{
    font-size: 15px;
    font-weight: bolder;
    color: white;
}


</style>