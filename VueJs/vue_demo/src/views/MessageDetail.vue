<template>
  <div>
    <p>ID:{{$route.params.id}}</p>
    <ul>
      <li>id:{{$route.params.id}}</li>
      <li>title:{{detail.title}}</li>
      <li>content:{{detail.content}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
 const allMessagesDetail = [
        {
          id: 1,
          title: "message001",
          content:'message001 content'
        },
        {
          id: 2,
          title: "message002",
          content:'message002 content'
        },
        {
          id: 3,
          title: "message003",
          content:'message003 content'
        },
      ];
      //上述定义了一个局部变量allMessagesDetail，
export default {
  data() {
    return {
        detail:{}
    };
  },
  created() {},
  mounted() {   // 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
    setTimeout(() => {
    }, 1000);
  },
  watch:{
      $route:function(){
          const id=this.$route.params.id
          this.detail=allMessagesDetail.find(allMessagesDetail => allMessagesDetail.id===id*1)
      }
  },
  methods: {},
  components: {},
};
</script>

<style>
</style>
