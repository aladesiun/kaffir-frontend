<template>
<div class="boss">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container-xl">
        <div class="row mt-4">
            <div class="col-md-12 sx">
                <div class="card user-card">
                    <div class="card-header text-center">
                        <h5>Profile</h5>
                    </div>
                    <div class="card-block">
                        <div class="user-image">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="img-radius" alt="User-Profile-Image" />
                        </div>
                        <h6 class="f-w-600 m-t-25 m-b-10">{{this.user['username']}}</h6>
                        <p class="text-muted">Welcome to your profile</p>
                        <hr />
                        <div class="btn-act">
                        <div class="btns view">
                            <a href="/message " @click.prevent="generateAnonymousLink()">Generate Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                        <div class="btns view">
                            <router-link to="/group-chat">Room&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link>
                        </div>
                        <div class="btns view">
                            <router-link to="/message">messages&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link>
                        </div>
                        </div>
                        <div class="bg-c-blue counter-block m-t-10 p-20">
                            <div class="row">
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
                            </div>
                            <div class="cpy-holder">
                                <input type="text" v-model="this.anonymous_link" id="cpy-box"> <input type="button" id="cpy-real" value="copy" @click="copy">
                            </div>
                        </div>
                        <p class="m-t-15 text-muted detm">this is your profile where you can view messages, share your links to friends and family</p>
                        <hr />
                        <div class="row justify-content-center user-social-link">
                            <div>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <!-- <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span> -->
                                            <span class="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <!-- <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span> -->
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <!-- <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span> -->
                                            <span class="fa fa-instagram"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <!-- <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span> -->
                                            <span class="fa fa-linkedin"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
    data(){
        return{
            anonymous_link: '',
            anonymous: false
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

  /* Alert the copied text */
  
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
    computed:{
        ...mapState({
            user: (state)=> state.user
        })
    },
    created(){
        console.log(this.user);
        alert(this.user['username']);
    }
}
</script>
<style>
/* social button */
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');
* {
  padding: 0px;
  margin: 0px;
}
 ul {
   position: relative;
   display: flex;
   justify-content: center;
   transform-style: preserve-3d;
}
ul li {
  position: relative;
  list-style: none;
  width: 60px;
  height: 60px;
  margin: 0px 20px;
}
ul li:before{
  content: '';
  position: absolute;
  bottom: -10px;
  left: -5px;
  width: 100%;
  height: 10px;
  /* background:#4f52ff; */
  transform-origin: top;
  transform: skewX(-41deg);
}
ul li:after{
  content: '';
  position: absolute;
  top:5px;
  left: -9px;
  width: 9px;
  height: 100%;
  /* background: #7c7ef7; */
  transform-origin: right;
  transform: skewY(-49deg);
}
ul li span{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex !important;
  /* background: #4f52ff; */
  justify-content: center;
  align-items: center;
  color: #4f52ff;
  font-size: 30px !important;
  transition: 1.5s ease-out;
}
ul li:hover span {
  z-index: 1000;
  transition: .3s;
  color: #fff;
  box-shadow: -1px 1px 1px rgba(0, 0, 0, .5);
}
ul li:hover span:nth-child(5){
  transform: translate(40px, -40px);
  opacity: 1;
}
ul li:hover span:nth-child(4){
  transform: translate(30px, -30px);
  opacity: .8;
}
ul li:hover span:nth-child(3){
  transform: translate(20px, -20px);
  opacity: .6;
}
ul li:hover span:nth-child(2){
  transform: translate(10px, -10px);
  opacity: .4;
}ul li:hover span:nth-child(1){
  transform: translate(0px, 0px);
  opacity: .2;
}
ul li:nth-child(1):hover span{
  background: #52E19F !important;
}
ul li:nth-child(2):hover span{
  background: #2C3456 !important;
}
ul li:nth-child(3):hover span{
  background: #EA6E96 !important;
}
ul li:nth-child(4):hover span{
  background: #FCEB00 !important;
}
.btn-act .btns{
        background: white;
    padding: 4px 9px;
    box-shadow: 0px 0px 5px;
    /* color: #e22223; */
    border-radius: 6px;
    border: 1px solid #4f52ff
}
.btn-act .btns a{
    color: #4f52ff;
    font-family: 'Roboto', sans-serif;

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
    margin-top: 50px;
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
