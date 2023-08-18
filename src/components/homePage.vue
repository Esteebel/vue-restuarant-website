<template>
    <headerComp />

    <h1 class="greet">Hello {{ name }}, Welcome to Home Page</h1>
    
<table class="tab">
    <tr>
        <th>id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions:</th>
    </tr>
        <tr v-for="item in restuarant" :key="item.id">
            <td >{{ item.id }}</td>
            <td >{{ item.name }}</td>
            <td >{{ item.contact }}</td>
            <td >{{ item.address }}</td>
            <td >
                <router-link class="rout" :to="'/update/'+item.id">Update</router-link>
                <button class="but" v-on:click="deleteRes(item.id)">Delete </button>
            </td>
        </tr>
</table>
</template>

<script>

import headerComp from '../components/headerComp.vue'
import axios from 'axios'

export default {
    name: 'homePage',
    data() {
            return {
                name:'',
                restuarant:[]
            }
        },

    components: {
        headerComp
    },
    methods: {
        async deleteRes(id)
        {
            let result =await axios.delete("http://localhost:3000/restuarant/"+id)
            console.warn(result)
            if(result.status==200)
            {
                this.loadData()
            }
        },
        async loadData()
        {
            let user = localStorage.getItem('user-info')
                this.name= JSON.parse(user).name
                if(!user)
                {
                    this.$router.push({name:'signUp'})
                }
                let result =await axios.get("http://localhost:3000/restuarant")
                // console.warn(result)
                this.restuarant = result.data
        }
    },
    async mounted()
    {
        this.loadData()
    }
    
}
    
</script>
<style>
    .tab{
        width: 80%;
        border-collapse: collapse;
        margin: 70px auto;
    }
    .tab, td, th{
        border: 2px solid black;
        padding: 20px;
        font-size: 20px;
    }
    .but{
        border: none;
        background: rgb(168, 8, 8);
        border-radius: 5px;
        padding: 7px;
        margin-left: 30px;
        color: white;
        font-size: 15px;
    }
    .rout{
        text-decoration: none;
        background: green;
        border-radius: 5px;
        padding: 7px;
        color: white;
        font-size: 15px;
    }
</style>