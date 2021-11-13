<template>
<div class="profile-holder">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="container-xl">
        <div class="row">
            <div class="col-md-12 sx">
                <div class="card user-card">
                    <div class="card-header">
                       
                        <p class="f-w-600  m-b-10 mt-4 uname">{{user.username}}'s Profile</p>
                        <div class="anon-link">
                        <p @click="copy" v-if="user.anonymous_link">
                            <!-- {{user.anonymous_link}} -->
                            <input type="text" :value="user.anonymous_link" id="cpy-box">
                            <i class="far fa-copy copy"></i>
                        </p>

                        </div>
                        <p class="info-p">share your profile link to get response from your friends. Go to <span>
                            "View messages"</span>to check out the responses</p>
                    </div>
                    <div class="card-block"> 
                        <div class="btn-act row">
                            <div class=" col-md-12 mt-2 mb-1" v-if="user.anonymous_link ==  ''">
                                <div class="tt btns view" style="width:90%; margin:auto;">
                                    <a href="" @click.prevent="generateAnonymousLink()">Generate Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-link"></i></a>
                                </div>
                            </div>
                            <div class="col-md-12 mt-2 mb-1" v-else>
                                <div class="tt btns view" style="width:90%; margin:auto;">
                                <a href="" @click.prevent="disableAnonymousLink()">Delete Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="far fa-trash-alt"></i></a>

                                </div>
                            </div> 
                            <div class="col-md-12 mt-2 mb-1">
                                <div class="tt btns view " style="width:90%;margin:auto;">
                                    <router-link to="/message">messages&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="far fa-envelope"></i></router-link>
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    /* font-family: 'Roboto'; */

}
p{
    color: black;
    margin-bottom: 0px;
    font-family: 'Roboto', sans-serif;

}
.anon-link{
    width: 100%;
}
.anon-link p{
    font-size: 13px;
    color: #000000;
    font-weight: 300;
    text-align: center;
}
.uname{
        font-weight: 700;
    font-size: 23px;
    text-transform: capitalize;
    color: #696cfe;
}
.info-p{
        color: #545454;
    /* font-weight: 800; */
    font-size: 15px;
    padding: 5px 5px;
    text-align: left;
}
.info-p span{
     font-weight: bold!important;
    color: black;
    margin-right: 2px;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
}
.btns a{
    font-size: 17px;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    color: #4f52fe;
}
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
    margin-top:20px;
    padding-bottom: 20px;
    }
.btns{
    width: 90%;
    margin: auto;
    border: 2px solid #4f52fe;
    border-radius: 29px;
    text-align: center;
    padding: 11px 8px;
}
.user-profile-icon i {
    font-size: 47px;
    margin-bottom: 9px;
    color: #d7d7d7;
}
.copy{
    font-size: 20px;
}
</style>
