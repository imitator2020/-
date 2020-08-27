<template>
    <div>
        <ul>
            <li v-for="(news,index) in newsArr" :key="index">{{news}}</li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            newsArr:["news001","news002","news003","news004"]
        }
    },
    created () { },
    mounted () { },
    methods: {},
    components: {}
}
</script>

<style>
</style>
