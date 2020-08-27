<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="Name"/>
        <button @click="search">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">
import PubSub from'pubsub.js'
export default {
    data () {
        return {
            Name:''

        }
    },
    created () { },
    mounted () { },
    methods: {
        search() {
            const searchName=this.Name.trim()
            if(searchName){
                PubSub.publish('search', searchName)
            }
        }
    },
    components: {}
}
</script>

<style>
</style>
