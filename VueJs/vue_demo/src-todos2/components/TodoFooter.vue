<template>
      <div class="todo-footer">
        <label>
          <!-- <input type="checkbox" v-model="isAllCheck"/> -->
          <slot name="check"></slot>
        </label>
        <span>
          <!-- <span>已完成{{completeNumber}} / 全部{{todos.length}}</span> -->
          <slot name="count"></slot>
        </span>
        <!-- <button class="btn btn-danger" @click="deleteCompleted" v-show="completeNumber">清除已完成任务</button> -->
        <slot name="delete"></slot>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: { //接收相关属性
        todos:Array,
        deleteCompleted:Function,
        selectAllTodos:Function
    },
    data () {
        return {}
    },
    computed: {
      // completeNumber() {
      //   //return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
      //   //   return this.todos.reduce((Total,todo)=>Total + (todo.complete?1:0),0)
      //   // return 2
      //   return this.todos.reduce((pre, cur) => pre + (cur.complete ? 1 : 0), 0)     
      // },
      //   isAllCheck:{
      //       get(){
      //           return this.completeNumber===this.todos.length&&this.todos.length>0
      //       },
      //       set(value) {
      //           this.selectAllTodos(value)
      //       }
      //   }
    },
    created () { },
    mounted () { },
    methods: {},
    components: {}
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
