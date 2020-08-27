<template>
       <li @mouseenter="handleShow(true)" @mouseleave="handleShow(false)" :style="{background:bgcolor}">
          <label>
            <input type="checkbox" v-model="todo.complete"/>
            <span>{{todo.Item}}</span>
          </label>
          <button class="btn btn-danger" v-show="isshow" @click="deleteTodo">删除</button>
        </li>
</template>

<script type="text/ecmascript-6">
import PubSub from'pubsub.js'
export default {
    props: {
        todo:{type:Object},
        index:{type:Number},
        // deleteItem:Function
    },
    data () {
        return {
            bgcolor:"white",
            isshow:false
        }
    },
    created () { },
    mounted () { },
    methods: {
        handleShow(condition){
            if(condition){
                this.bgcolor="#aaa",
                this.isshow=true
            }else{
                this.bgcolor="white",
                this.isshow=false
            }
        },
        deleteTodo(){
            if(window.confirm( `要删除${this.todo.Item}吗`)){
                // this.deleteItem(this.todo.index)
                const index=this.todo.index
                PubSub.publish('deleteItem',index)
            }
        }
    },
    components: {}
}
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
