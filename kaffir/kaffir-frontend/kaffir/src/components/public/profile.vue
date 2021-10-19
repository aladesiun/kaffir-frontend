<template>
<div class="profile-holder">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container-xl">
        <div class="row mt-4">
            <div class="col-md-12 sx">
                <div class="card user-card">
                    <div class="card-header">
                        <div class="user-profile-icon">
                          <i class="fas fa-user"></i>
                        </div>
                        <p class="f-w-600  m-b-10 uname">{{user.username}} Profile</p>
                        <p @click="copy" id="cpy-box">{{user.anonymous_link}}</p>


                    </div>
                    <div class="card-block"> 
                        <h6 class="f-w-600  m-b-10">{{user.username}}</h6>
                        <div class="btn-act row">
                            <div class=" col-md-12 mt-2 mb-1" v-if="user.anonymous_link ==  ''">
                                <div class="tt btns view" style="width:90%; margin:auto;">
                                    <a href="" @click.prevent="generateAnonymousLink()">Generate Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                            <div class="col-md-12 mt-2 mb-1" v-else>
                                <div class="tt btns view" style="width:90%; margin:auto;">
                                <a href="" @click.prevent="disableAnonymousLink()">Delete Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>

                                </div>
                            </div> 
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
                    this.user.anonymous_link = data.data.anonymous_link;
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
                    this.user.anonymous_link = data.data.anonymous_link;
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
        console.log(this.user);
        // alert(this.user['username']);
        
    }
}
</script>
<style  >
.profile-holder{
width: 100vw;
height: 100vh;
background-image: url('../.././assets/prof/bg.png');
 background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}
.card-header{
    padding: .5rem 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    background-color: white;
    border-bottom: none;
    justify-content: center;
    align-items: center
}
.card-header .uname{
    color: ;
}
.card-header .user-profile-icon{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('../.././assets/prof/bg.png');
    background-position: center;
    background-size: contain;
    display: flex;
    color: lightgrey;
     justify-content: center;
    align-items: center
}
.card-header .user-profile-icon i {
    font-size: 90px;

}

.user-card{
    max-width: 400px;
    margin: auto;
}
</style>
