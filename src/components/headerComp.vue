<template>
    <div class="top">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restuarant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
  
</template>

<script>
    export default {
        name:"headerComp",

        methods: {
            logout(){
                localStorage.clear()
                this.$router.push({name:'loginPage'})
            }
        }
    }
</script>

<style>
    .top{
        background: black;
        text-align: left;
        padding: 18px 16px;
    }
    .top a{
        color: white;
        text-decoration: none;
        padding: 1.5%;
        font-size: 20px;
        
    }
    .top a:hover{
         background:#ddd;
         color: #333;
    }
</style>