<template>
      <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="name">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
      props: {
      addComment:{
      type: Function,
      required: true
      }
    },
    data () {
        return {
          name:'',
          content:''
        }
    },
    created () { },
    mounted () { },
    methods: {
      add(){
        //检查输入的合法性：
        const name=this.name.trim();
        const content=this.content.trim();
        if(!name||!content){
          alert('姓名或评论不能为空');
          return 
        }
        //根据输入的数据生成comment对象
        const comment={name , content}
        //把comment对象添加到数组中
        this.addComment(comment)
        this.name='',
        this.content=''

      }
    },
    components: {},

}
</script>

<style>
</style>
