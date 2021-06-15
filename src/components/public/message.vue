
<template>
<div>
    <div class="bdy">
         <div class="container">
            <!-- <h1 class="tithead center">your messages are here</h1> -->
            <div class="row msg-row">
                <div class="msg-box col-md-4" v-for="(message, index) in messages" :key="index">
                    <div class="rap-msg">
                        <span class="pb-5">you recieved: {{message.created_at}}</span><br>
                        <span id="ic-message">{{message.anonymous_msg}}</span>
                        <!-- <p>{{message.anonymous_msg.length()}}</p> -->
                        <div class="lk-cont">
                            <a href="#"><i class="fas fa-share"></i>share</a>
                            <a href="#"><i class="far fa-flag"></i>Report</a>
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
    export default {
        data(){
            return {
                messages: []
            }
        },
        methods:{
            getMessages(){
                this.$store.dispatch('get', 'messages')
                .then((data) => {
                    if(data.data.status){
                        this.messages = data.data.data;
                    }
                }).catch((error) =>{
                    console.log(error);
                });
            }
        },
        mounted() {
            this.getMessages();
            console.log(this.messages);

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
    margin: 50px auto;
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
.rap-msg{
    border: 1px solid blue;
    padding: 10px;
    margin: 5px 1px;
}
.lk-cont a{
    padding: 2px 5px;
    display: block;
    text-align: center;
    margin: 5px;
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
 margin-top: 50px;
 padding: 10px;
}
#ic-message{
    color: black;
    font-weight: 600;
}
</style>