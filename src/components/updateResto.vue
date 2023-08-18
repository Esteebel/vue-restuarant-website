<template>
    <headerComp />

    <h1 class="greet">Hello User, Welcome to Update Restuarant Page</h1>
    
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restuarant.name">
        <input type="text" placeholder="Enter Contact" v-model="restuarant.contact">
        <input type="text" placeholder="Enter Address" v-model="restuarant.address">
        <button v-on:click="updateRes" type="button">Update Restuarant</button>
    </form>
</template>

<script>

import headerComp from './headerComp.vue'
import axios from 'axios'
export default {
    name: 'updateResto',

    components: {
        headerComp
    },
    data()
    {
        return {
            restuarant:{
                name:'',
                address:'',
                contact:''
                
            }
        }
    },
    methods: {
       async updateRes(){
            console.log(this.restuarant)
            const result = await axios.put('http://localhost:3000/restuarant/'+this.$route.params.id, {
                name: this.restuarant.name,
                address: this.restuarant.address,
                contact: this.restuarant.contact,
            })
            if(result.status==200)
            {
                this.$router.push({name: 'Home'})
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info')
        if(!user)
        {
            this.$router.push({name:'signUp'})
        }
        const result = await axios.get("http://localhost:3000/restuarant/"+this.$route.params.id)
        this.restuarant = result.data
    }
    
}
    
</script>
<style>
    .greet{
        margin-top: 60px;
        padding-bottom: 20px;
    }

</style>