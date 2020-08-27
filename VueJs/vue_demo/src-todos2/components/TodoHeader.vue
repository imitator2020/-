<template>
      <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="things" @keyup.enter="addItem"/>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        // addTodo:Function
    },
    data () {
        return {
            things:'',
        }
    },
    created () { },
    mounted () { },
    methods: {
        addItem() {
            /** 
             * 1、检查输入合法性
             * 2、生成需要添加的对象
             * 3、把对象添加
             * 4、清空输入
             * 
            */
            const things=this.things.trim()
            if(!things){
                alert("输入内容不能为空")
                return 
            }
            const Item={Item:things,complete:false}
            // this.addTodo(Item)
            this.$emit('addTodo',Item)
            this.things=''
            
            
        }
    },
    components: {}
}
</script>

<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
