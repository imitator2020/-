<template>
<div id="app">
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>

    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'
export default {
    data () {
        return {

          //初始化数据，由于Add和List两个vue都会用到评论数据，故需要把数据放到共同的父组件中，即App.vue
          comments: [

            {
              name:'Bob',
              content:'Vue冷难，顶硬上'
            },
            {
              name:'Bob',
              content:'Vue冷难，顶硬上'
            },
           {
              name:'Bob',
              content:'Vue冷难，顶硬上'
            }
          ]
            
          
        }
    },
    created () { },
    mounted () { },
    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      //删除指定下标的评论
      deleteComment(index){
        this.comments.splice(index,1)
      }
    },
    components: {Add,List}
}
</script>

<style>
</style>
