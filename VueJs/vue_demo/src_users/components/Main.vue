<template>
    <div>
        <h2 v-if="firstView">请输入用户名搜索</h2>
        <h2 v-if="Loading">LOADING.....</h2>
        <h2 v-if="errMsg">{{errMsg}}</h2>
        <div class="row">
            <div class="card" v-for="(user,index) in Users" :key="index">
                <a :href="user.url" target="_blank">
                <img :src="user.imgUrl" style='width: 100px'/>
                </a>
            <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import PubSub from "pubsub.js"
import axios from "axios"
export default {
    data () {
        return {
            firstView:true,
            Loading:false,
            Users:null,
            errMsg:''
        }
    },
    created () { },
    mounted () {
        //订阅消息
        PubSub.subscribe('search',(msg,searchName) =>{
            const url= `https://api.github.com/search/users?q=${searchName}`
            //更新状态
            this.firstView=false,
            this.Loading=true,
            this.Users=null,
            this.errMsg=''
            axios.get(url).then((response) =>{
                const result=response.data
                const users=result.items.map(item=>({
                    url:item.html_url,
                    imgUrl:item.avatar_url,
                    name:item.login
                }))
                this.Loading=false
                this.Users=users
            }).catch((err)=>{
                this.Loading=false,
                this.errMsg=err
            })
        })
     },
    methods: {},
    components: {}
}
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}

</style>
