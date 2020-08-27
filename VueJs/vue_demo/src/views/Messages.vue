<template>
<div>
 <ul>
    <li v-for="message in mewssages" :key="message.id">
        <router-link :to="`/home/messages/${message.id}`">{{message.title}}</router-link>
        <button @click="pushshow(message.id)">push查看</button>
        <button @click="replaceshow(message.id)">replaces查看</button>
    </li>
  </ul>
      <button @click="$router.back()">回退</button>
    <hr>
  <router-view></router-view>
</div>
 
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      mewssages: [],
    };
  },
  created() {},
  mounted() {
    //异步的写在mounted里面，模拟ajax请求从后台请求数据：setTimeout
    setTimeout(() => {
      const msgs = [
        {
          id: 1,
          title: "message001",
        },
        {
          id: 2,
          title: "message002",
        },
        {
          id: 3,
          title: "message003",
        },
      ];
      this.mewssages=msgs
    }, 1000);
  },
  methods: {
      pushshow(id){
          this.$router.push(`/home/messages/${id}`)
      },
      replaceshow(id){
          this.$router.replace(`/home/messages/${id}`)
      }
  },
  components: {},
};
</script>

<style>
</style>
