<template>
<div class="boss">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container-xl">
        <div class="row mt-4">
            <div class="col-md-12 sx">
                <div class="card user-card">
                    <div class="card-header text-center p-0">
                        <h1>Profile</h1>
                    </div>
                    <div class="card-block">
                        <!-- <div class="user-image">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-radius" alt="User-Profile-Image" />
                        </div> -->
                        <h6 class="f-w-600  m-b-10">{{this.user['username']}}</h6>
                        <p class="text-muted">Welcome to your profile</p>
                        <hr />
                        <div class="btn-act row">
                        <div class=" col-md-12 mt-2 mb-1" v-if="user.anonymous_link ==  ''">
                            <div class="tt btns view" style="width:90%; margin:auto;">
                            <a href="" @click.prevent="generateAnonymousLink()">Generate Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                         <!--<div class="col-md-12 mt-2 mb-1" v-else>
                            <div class="tt btns view" style="width:90%; margin:auto;">
                            <a href="" @click.prevent="disableAnonymousLink()">Delete Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>

                            </div>
                            <! <a href="https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20https://anonymous.kaffir.ng/write-anonymous/70162035IxkNTPXtfMaX583789cuxVqYPzB3X3" target="_blank" class="btn-wa m-b-20 contact100-form-btn"><i class="fa fa-whatsapp"></i>Share on WhatsA</a> --
                        </div> -->
                        <div class="col-md-12 mt-2 mb-1">
                            <div class="tt btns view " style="width:90%;margin:auto;">
                            <router-link to="/message">messages&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link>
                            </div>
                        </div>

                        <div class="col-md-12 mt-2 mb-1">
                            <div class="tt btns view " style="width:90%;margin:auto;">
                            <a :href="facebook_url + user.anonymous_link">share on facebook&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fa fa-facebook-official"></i></a>
                            </div>
                        </div>

                        <div class="col-md-12 mt-2 mb-1">
                            <div class="tt btns view " style="width:90%;margin:auto;">
                            <a :href="whatsapp_url+user.anonymous_link">share on whatsapp&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fa fa-whatsapp"></i></a>
                            </div>
                        </div>
                        <div class="col-md-12 mt-2 mb-1">
                            <div class="tt btns view " style="width:90%;margin:auto;">
                            <a :href="twitter_url">share on twitter &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <div class="col-md-12 mt-2 mb-1">
                            <div class="tt btns view " style="width:90%;margin:auto;">


                            <router-link to="">share on instagram &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fab fa-instagram"></i></router-link>
                            </div>
                        </div>
                        </div>
                        <div class="bg-c-blue counter-block m-t-10 p-20">
                            <!-- <div class="row">
                                <div class="col-4">
                                    <i class="fa fa-comment"></i>
                                    <p>1256</p>
                                </div>
                                <div class="col-4">
                                    <i class="fa fa-user"></i>
                                    <p>8562</p>  
                                </div>
                                <div class="col-4">
                                    <i class="fa fa-suitcase"></i>
                                    <p>189</p>
                                </div>
                            </div> -->
                            <div class="cpy-holder">
                                <input type="text" v-model="user.anonymous_link" id="cpy-box"> <input type="button" id="cpy-real" value="copy" @click="copy">
                            </div>
                        </div>
                        <p class="m-t-15 text-muted detm">this is your profile where you can view messages, share your links to friends and family</p>
                        <hr />
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            user: (state)=> state.user
        })
    },
    data(){
        return{
            anonymous_link: '',
            anonymous: false,
            twitter_url:'https://twitter.com/home',
            facebook_url: 'https://www.facebook.com/sharer/?u=',
            whatsapp_url:"https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20"
        }
    },
    methods:{
        copy(){
            var copyText = document.getElementById("cpy-box");

            /* Select the text field */
                copyText.select();
                copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy") ? alert("Copied the text: " + copyText.value) : alert("try again")
  
        },
        generateAnonymousLink(){
            this.$store.dispatch('post', {
                endpoint: 'generate-anonymous-link', 
                details: {}
            })
            .then((data) => {
                if(data.data.status){
                    this.anonymous_link = data.data.anonymous_link;
                    var result = data.data.data;
                    localStorage.setItem('token', data.data.token);
                    result.token=data.data.token;
                    this.$store.commit('setUser', result);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        disableAnonymousLink(){
            this.$store.dispatch('post', {
                endpoint: 'disable-anonymous-link', 
                details: {},
                anonymous_link:""

            })
            .then((data) => {
                if(data.data.status){
                    this.anonymous_link = data.data.anonymous_link;
                    var result = data.data.data;
                    localStorage.setItem('token', data.data.token);
                    result.token=data.data.token;
                    this.$store.commit('setUser', result);
                    this.user.anonymous_link = "";
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },

        createGroup(){
            this.$store.dispatch('post', {
                endpoint: 'create-group', 
                details: this.group
            })
            .then((data) => {
                
                console.log(data.data.data);
                
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },
    created(){
        // console.log(this.user);
        // alert(this.user['username']);
        
    }
}
</script>
<style  >
/* social button */
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');

.btn-act .btns{
    background: white;
    box-shadow: 0px 0px 5px;
    /* color: #e22223; */
    border-radius: 20px;
    transition: .5s;
    margin-bottom: 5px;
  text-transform: capitalize;

    /* border: 1px solid #4f52ff; */
}
.btns a:hover{
    background-color: #4f52ff;
    color: white!important;
}.btns:hover{
    background-color: #4f52ff;
    color: white!important;
}
.btn-act .btns a{
    color: #4f52ff;
    display: block;
    width: 100%;
  font-family: 'Poppins', sans-serif!important;
  font-weight: lighter;

    font-size: 15px;
    border-radius: 20px;
    padding: 9px 9px;


}
.btn-act{
        display: flex;
    justify-content: space-around;
}
.detm{
    text-transform: capitalize;
}
/* button ends */
.btn-active  a{
    background: white;
    box-shadow: 0px 0px 4px #4f52fb;
    color: #4f52ff;
    padding: 5px;
}
.btn-active  a:active {
        opacity: 1;
        box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
          inset 8px 8px 16px rgba(0, 0, 0, 0.1);
        color: #79e3b6;
      }
.btn-active{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.boss{
    /* margin-top:60px  ; */
    height: 100vh;
    overflow: scroll;
    background: #4f52ff;
}
.boss::-webkit-scrollbar{
    display: none;
}
body{
    background:#f3f3f3;
}
.sx{
    display: flex;
    /* margin-top: 50px; */
    justify-content: center;
}
.card.user-card {
    border-top: none;
    width: 500px;
    -webkit-box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    -webkit-transition: all 150ms linear;
    transition: all 150ms linear;
}
#cpy-box{
        padding: 6px;
    width: 101%;
    background: white;
    height: 58px;
    border: 1px solid white;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #000000;
}
.cpy-holder{
    height: max-content;
    width: 100%;
    position: relative;
}
#cpy-real{
        position: absolute;
    right: -4px;
    top: 0;
    border-top-right-radius: 5px;
    width: 53px;
    height: auto;
    color: white;
    background: #4f52ff;
    font-size: 20px;
    bottom: 0;
    border-bottom-right-radius: 5px;

}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-header {
    background-color: transparent;
    border-bottom: none;
    padding: 25px;
}

.card .card-header h5 {
    margin-bottom: 0;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-right: 10px;
    line-height: 1.4;
}

.card .card-header+.card-block, .card .card-header+.card-block-big {
    padding-top: 0;
}

.user-card .card-block {
    text-align: center;
}

.card .card-block {
    padding: 25px;
}

.user-card .card-block .user-image {
    position: relative;
    margin: 0 auto;
    display: inline-block;
    padding: 5px;
    z-index: 1;
    width: 110px;
    height: 110px;
}

.user-card .card-block .user-image img {
    /* z-index: 20; */
    position: absolute;
    top: 5px;
    left: 5px;
        width: 100px;
    height: 100px;
}

.img-radius {
    border-radius: 50%;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-25 {
    margin-top: 25px;
}

.m-t-15 {
    margin-top: 15px;
}

.card .card-block p {
    line-height: 1.4;
}

.text-muted {
    color: #919aa3!important;
}

.user-card .card-block .activity-leval li.active {
    background-color: #2ed8b6;
}

.user-card .card-block .activity-leval li {
    display: inline-block;
    width: 15%;
    height: 4px;
    margin: 0 3px;
    background-color: #ccc;
}

.user-card .card-block .counter-block {
    color: #fff;
}
.bg-c-blue p{
    color: white;
    font-size: 15px;
}
.bg-c-blue .fa{
    font-size: 30px;
}
.bg-c-blue {
    background: linear-gradient(
45deg
,#4f52ff,#4f52ff);
}

.bg-c-green {
    background: linear-gradient(45deg,#2ed8b6,#59e0c5);
}

.bg-c-yellow {
    background: linear-gradient(45deg,#FFB64D,#ffcb80);
}

.bg-c-pink {
    background: linear-gradient(45deg,#FF5370,#ff869a);
}

.m-t-10 {
    margin-top: 10px;
}

.p-20 {
    padding: 20px;
}

.user-card .card-block .user-social-link i {
    font-size: 30px;
}

.text-facebook {
    color: #3B5997;
}

.text-twitter {
    color: #42C0FB;
}

.text-dribbble {
    color: #EC4A89;
}

.user-card .card-block .user-image:before {
    bottom: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}

.user-card .card-block .user-image:after, .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
}

.user-card .card-block .user-image:after {
    top: 0;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}

.user-card .card-block .user-image:after, .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
}
.tt{
    margin-bottom: 10px;
}
.tt i {
    font-size: 20px;

}
@media only screen and (max-width: 522px) {
    .card.user-card{
        width: 100%;
        margin-top: 50px;
    }
    .boss{
        margin:0 ;
        
        overflow:scroll;
    }
    .card .card-block {
    padding: 6px;
}

}

</style>
