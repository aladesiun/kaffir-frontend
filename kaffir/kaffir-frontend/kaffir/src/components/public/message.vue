<template>
<div>
    <div class="bdy">
         <div class="container thb">
            <!-- <h1 class="tithead center">your messages are here</h1> -->
            <div class="row msg-row">
                <div class="col-md-12 text-center head-mm">
                    <h1>Messages</h1>
                    <p>messages you recieve will appear here</p>

                </div>
                <div class="row " v-if="ismessage">
                    <div class="col-md-12 text-center">
                        <h4>you have no messages yet</h4>
                    <router-link to="/profile">Go back</router-link>

                    </div>
                </div>
                <div class="msg-box col-md-12" v-for="(message, index) in messages" :key="index">
                    <div class="rap-msg">
                        <p>Message:</p>
                        <p id="ic-message" class="pb-2">{{message.anonymous_msg}}</p>
                        <p class="pb-0">you recieved: {{message.created_at}}</p>

                        <!-- <p>{{message.anonymous_msg.count()}}</p> -->
                        <div class="lk-cont">
                            <a @click="showss" @mouseleave="hidssh" ><i class="fas fa-share-square"></i>share
                            <div class="ssh">
                            <span v-if="showshare" @mouseleave="hidssh">You can make a screenshot of your messages to share with friends</span>
                            </div>
                            </a>
                            
                             <router-link to="/report" ><i  class="fas fa-flag"></i>Report</router-link>
                            <!-- <a href="#">share</a> -->
                        </div>
                </div>
                
            </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
// import report from './report.vue'
    export default {

        data(){
            return {
                ismessage:true,
                messages: [],
                showshare:false
            }
        },
        methods:{
            amount (){
               
            },
            hidssh (){
                this.showshare= false
            },
            showss (){
                this.showshare = true
            },
            getMessages(){
                this.$store.dispatch('get', 'messages')
                .then((data) => {
                    if(data.data.status){
                        this.messages = data.data.data;
                        this.ismessage = false
                    }
                }).catch((error) =>{
                    console.log(error);
                });
            }
        },
        mounted() {
            this.getMessages();
            // console.log(this.messages);

        }
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
}
.bdy{
       background-color: #4f52ff;
    margin: 1px auto;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    font-family: 'Roboto', sans-serif;
    padding: 5px;
    }
    i.fas.fa-share {
    color: #4f52ff;
    line-height: 1;
}
.fas{
    margin-right: 5px;
}
.ssh{
    transition: ease-in-out .5s;
}
.head-mm{
    position: sticky;
    top: -6px;
    background: white;
    z-index: 6;
}
.rap-msg{
    border: 1px solid blue;
    padding: 10px;
    width: 391px;
    font-size: 14px;
    margin: 5px auto;
    border-radius: 13px;
}
.rap-msg p{
    color: black;
    font-size: 15xpx;
    margin-bottom: 0!important;
}
.lk-cont a{
    padding: 4px 5px;
    display: block;
    text-align: center;
    margin:7px 5px;
    border-radius: 5px;
    border: 1px solid #4f52ff;
    box-shadow: 0px 0px 4px #9c9dff;
}
.lk-cont a:hover{
    background-color: #4f52ff;
    color: white!important;
}
.msg-row{
 background-color: white;
 border-radius: 5px;
 margin: 0px auto;
 margin-top: 20px;
 padding: 10px;
 width: 500px;
}
#ic-message{
    color: black;
    font-weight: 600;
}
@media screen and (max-width:700px)  {
    .msg-row{
        width: 100%;
    }
    .thb{
        padding-left: 0;
        padding-right: 0;
    }
    .rap-msg{
        width: 100%;
    }
}
</style>