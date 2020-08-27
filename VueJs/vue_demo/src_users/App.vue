<template>
    <div class="container">
      <Search/>
      <UserMain/>

  </div>
</template>

<script type="text/ecmascript-6">
import Search from './components/Seacrh'
import Main from './components/Main'
export default {
    data () {
        return {}
    },
    created () { },
    mounted () { },
    methods: {},
    components: {
      Search,
      UserMain:Main
    }
}
</script>

<style>
</style>
