<template>
    <div>
        <h2>home</h2>
        <div>
            <ul class="nav nav-tabs">
                    <router-link to="/home/news">News</router-link>
                    <router-link to="/home/messages">Mewssages</router-link>
            </ul>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {}
    },
    created () { },
    mounted () { },
    methods: {},
    components: {}
}
</script>

<style>
</style>
