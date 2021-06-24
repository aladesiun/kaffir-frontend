<template>
    <div class="cont-holder-snd">
        <div class="cont" id="cntt">
        <div class="ead text-center">
            <h2 class="abt">
                send message
            </h2>
        </div>
        <div class="sendinp">
            <form action="" @submit.prevent="saveAnonymous()">
                <notification/>
            <!-- <i type="text" class="text-inp" placeholder="type your message"> -->
                <textarea name="" class="text-inp" v-model="anonymous.anonymous_msg" placeholder="type..."></textarea>
                <div class="btn-to-send">
                    <button type="submit" :disabled="!anonymous.anonymous_msg"  class="sndbtn-msg">send</button>
                </div>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                anonymous: {
                    anonymous_msg: '',
                    token: '',
                }
            }
        },
        methods:{
            verifyAnonymousToken(){
                this.$store.dispatch('get', 'verify-anonymous-token?token='+this.$route.params.token)
                .then((data) => {
                    if(data.data.status){
                        this.anonymous.token = this.$route.params.token;
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            },

            saveAnonymous(){
                if(this.anonymous.anonymous_msg.length === 0){
                    this.$store.commit('setNotification', {type:2, message:'Anonymous input field required'});
                    return false;
                }

                this.$store.dispatch('post', {
                    endpoint: 'write-anonymous',
                    details: this.anonymous
                })
                .then((data) => {
                    if(data.data.status){
                        window.location.href = "/yourturn";
                        this.$store.commit('setNotification', {type:1, message:'Message sent successfully'});
                        this.anonymous.anonymous_msg= '';
                        // swal("My title", "My description", "success");
                        
                    }
                    else{
                        var e_msg = data.data.message;
                        this.$store.commit('setNotification',{type:2, message: e_msg})
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
            }
        },
        created(){
            this.verifyAnonymousToken();
        
        }
    }
</script>
<style scoped>
    .sndbtn-msg:disabled{
        background: #4542ff9e !important;
    }
    *::-webkit-scrollbar{
        display: none;
    }
    .cont-holder-snd{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items:center ;
        background-color: #4542ff;
        padding-top: 50px;
    }
    .holder{
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: -10px;
        /* background-color: #fafafa; */
    overflow-y: hidden;

        background-color: #d2baff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23ffe6fc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%235c84aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23f1c2ea' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%232a7cc2' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23e39ed7' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230071d9' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d57ac4' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%230064ec' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c752af' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%230051f9' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23b8189a' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%231c31ff' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
        background-position: center;
        background-size: cover;
    }
    .cont .abt{
        font-size: 2rem;
        text-transform: capitalize;
        color: #2773d6;
    }
    input,button,textarea{
        outline: none!important;
    }
    h2{
        color: white;
    }
    .cont{
    width: 500px;
    /* height: 90vh; */
    border: 1px solid #ffffff;
    display: flex;
    border-radius: 20px;
    background-color: #ffffff;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 10px;
    flex-direction: column;
    }
    .sendinp{
        border: 1px solid #4542ff;
        border-radius: 5px;
        margin: 10px 5px;
        padding: 20px 5px;
        text-align: center;
        
    }
    .sendinp, .btn-to-send{
        display: flex; 
        justify-content: center;
        align-items: bottom;
        flex-direction: column; 
        width: 100%;
        color: #ffffff;
    }
    .sendinp .text-inp{
        width: 80%;
        margin: 1rem auto;
        border: none;
        border-bottom: 2px solid  #4542ff;
        background: transparent;
    }
    .sendinp .text-inp:focus{
        border: 1px solid #4542ff;
    }
    .sendinp .text-inp::placeholder{
        color: #4542ff;
        font-size: 20px;
    }
    .sendinp .sndbtn-msg{
        background-color: #4542ff;
        width: 80%;
        border-radius: 53px;
        border: none;
        margin: auto;
        color: white;
        font-size: 1.5rem;
        padding: 10px;
    }
    @media only screen and (max-width:540px){
        .cont{
            width: 90%;
        }
    }
</style>