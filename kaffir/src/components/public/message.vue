<template>
<div>
    <div class="bdy">
         <div class="container thb">
            <!-- <h1 class="tithead center">your messages are here</h1> -->
            <div class="row msg-row">
                <div class="col-md-12 text-center head-mm">
                    <h1>Responses</h1>
                    <p class="color-dark">messages you recieve will appear here</p>

                </div>
                <div class="row " v-if="messages.length == 0">
                    <div class="col-md-12 text-center">
                        <h4>you have no messages yet</h4>   
                    <router-link to="/profile">Go back</router-link>

                    </div>
                </div>
                <div class="msg-holder" style="display: flex;
                        flex-direction: column-reverse;">
                    <div class="msg-box col-md-12" v-for="(message, index) in messages" :key="index">
                    <div class="rap-msg mb-2">
                        <p>Message:</p>
                        <p id="ic-message" class="pb-2">{{message.anonymous_msg}}</p>
                        <p class="pb-0">-Anonymous[{{message.created_at}}]</p>

                        <!-- <p>{{message.anonymous_msg.count()}}</p> -->
                        <div :class="'lk-cont lk-cont-'+index">
                            <!-- @mouseleave="hidssh"  -->
                            <!-- <a  @click.prevent="printThis(index)" ><i class="fas fa-share-square"></i>share
                                <div class="ssh">
                                    <span v-if="showshare" @mouseleave="hidssh">You can make a screenshot of your messages to share with friends</span>
                                </div>
                            </a> -->
                            
                             <router-link to="/report" ><i  class="fas fa-flag"></i>Report</router-link>
                            <!-- <a href="#">share</a> -->
                        </div>
                    </div>
                    <div class="rap-msg mb-2 mt-2 rap-png prr" :id="'msgImg'+index" :ref="'printcontent'+index">
                        <div class="top-nav">
                            <p>kaffir Anonymous</p>
                        </div>
                        <div class="bbrr">
                            <p>Message:</p>
                            <p id="ic-message pr-ic" class="pb-2">{{message.anonymous_msg}}</p>
                        </div>
                        
                        <!-- <p class="pb-0">Recieved At: {{message.created_at}}</p> -->
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
import html2canvas from 'html2canvas';
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
                        console.log(this.messages);
                        this.ismessage = false
                    }
                }).catch((error) =>{
                    console.log(error);
                });
            },
            async printThis(id) {
                console.log("printing..", id);
                const el = document.getElementById('msgImg'+id)
                // convert div to canvas 
                const options = {
                    type: "dataURL",
                };
                const printCanvas = await html2canvas(el, options);
                // convert canvas to png
                const link = document.createElement("a");
                link.setAttribute("download", "download.png");
                link.setAttribute(
                    "href",
                    printCanvas
                    .toDataURL("image/png")
                    .replace("image/png", "image/octet-stream")
                );
                // click programmatically
                link.click();
            },
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
    font-weight: 500;
}
.color-dark{
    color: #000;
}
.bdy{
    background-color: #4f52ff;
    margin: 1px auto;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
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
    color: #4f52ffba;
    font-weight: 600;
    padding: 14px 2px;
}
.msg-box{
    position: relative;
}
.rap-png{
    z-index: -11;
    position: absolute;
    /* bottom: 40px; */
}
.top-nav p{
    color:  #4f52ff;
    font-family: 'Pacifico', cursive;
}
.bbrr{
    border-bottom: 1px solid #4f52ff!important;
    width: 200px;
    max-width: 500px;
}
.prr{
    padding:25px 20px;
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