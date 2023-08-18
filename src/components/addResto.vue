<template>
    <headerComp />

    <h1 class="greet">Hello User, Welcome to Add Restuarant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restuarant.name">
        <input type="text" placeholder="Enter Contact" v-model="restuarant.contact">
        <input type="text" placeholder="Enter Address" v-model="restuarant.address">
        <button v-on:click="addRes" type="button">Add New Restuarant</button>
    </form>
</template>

<script>
import headerComp from './headerComp.vue'
import axios from 'axios'

export default {
    name: 'addResto',
   
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
       async addRes(){
            console.log(this.restuarant)
            const result = await axios.post('http://localhost:3000/restuarant', {
                name: this.restuarant.name,
                address: this.restuarant.address,
                contact: this.restuarant.contact,
            })
            if(result.status==201)
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
        
    }
    
}
    
</script>
<style>
    

</style>