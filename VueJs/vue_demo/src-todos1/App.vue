<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteItem="deleteItem"/>
        <TodoFooter :todos="todos" :deleteCompleted="deleteCompleted" :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoList from './components/TodoList'
export default {
    props: [],
    data () {
        return {
            //从LocalStorage读取todos,读取到的数据是json格式，需要解析
            todos:JSON.parse(window.localStorage.getItem('todos_key')||'[]')
        }
    },
    created () { },
    mounted () { },
    methods: {
        addTodo(Item){
            this.todos.unshift(Item)
        },
        deleteItem(index){
            this.todos.splice(index,1)
        },
        //删除已完成的函数,用数组的filter方法来实现
        deleteCompleted(){
            this.todos=this.todos.filter((todos)=>{
                return !(todos.complete)
            })
        },
        //全选函数
        selectAllTodos(AllCheck){
            this.todos.forEach((todos)=>{todos.complete=AllCheck})
        }
    },
    watch: { //监视
        todos: {
            deep:true,//深度监视
            handler:function(value){
                //监视todos，当发生变化的时候，把value值存储到LocalStorage中
                window.localStorage.setItem('todos_key',JSON.stringify(value))
            }
        }
    },
    components: {
        TodoHeader,TodoFooter,TodoList
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}


/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
