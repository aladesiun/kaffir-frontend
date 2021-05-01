
<template>
<div>
    <div class="bdy">
            <div class="all-cont">
        <div class="mesg-content">
            <h1 class="tithead">your messages are here</h1>
            <div class="msg-box" v-for="(message, index) in messages" :key="index">
                <span class="pb-5">
                    you recieved: {{message.created_at}}
                </span><br>
                <span id="ic-message">{{message.anonymous_msg}}</span>
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
.bdy{
    padding:0;
    margin:0;
    width:100%;
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
      background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23610fff'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23610fff'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='rotate(123 1000 750) scale(10) translate(-900 -675)'%3E%3Cg fill='%23610fff'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    /* background-attachment: fixed; */
    background-size: cover;
    }
.tithead{
        color: white;
        text-align: center;
        text-transform: capitalize;
        position: sticky;
        padding: 10px;
        top: -20px;
        background: #0c69c7;
    }
::-webkit-scrollbar {
    /* width: 20px; */
    background: yellow;
  

}
    ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey!important; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #004e9c ; 
  /* border-radius: 50%; */
  width: 3%;
  height: 2%;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white; 
}
    .all-cont{
        max-width:500px;
        /* width:max-content; */
        height: 90%;
        margin:2rem auto;
        background: #0c69c7;
        overflow: scroll;
        overflow-x: hidden;
        padding: 10px;
        border-radius: 10px;
    }
    .all-cont .msg-box{
        padding-top: 20p;
        border: 2px solid rgb(28, 3, 247);
        padding: 2px 10px;
        width: 90%;
        margin: 10px auto;
        height: max-content;
        border-radius: 5px;
    }
    .lk-cont{
        width: 100%;
        height: max-content;
    }
    .lk-cont a{
        padding: 7px;
        /* border: 1px solid #ffe4ff; */
        background: #4568DC;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #B06AB3, #4568DC);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


        border-radius: 15px;
        width: 100%;
        text-align: center;
        color: white;
        margin: 5px auto;
        display: block;
    }
    .all-cont .msg-box span{
        font-size: 15px;
        padding: 2px;
        font-family: 'Poppins', sans-serif;
        color: #ffffff!important;
        /* font-family: Poppins-Regular; */
        font-size: 14px;
        line-height: 1.7;
        margin: 0;
    }

    @media screen and (max-width:510px) {
        .all-cont {
            width: 90%;
        }
}

</style>