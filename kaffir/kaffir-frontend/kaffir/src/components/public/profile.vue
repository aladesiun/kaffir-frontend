<template>

    <div class=" text-center mt-5 contents">
      <div class="head">
        <h2>user's profile</h2>
        <p>share your  below  profile link for your friends to send you anonymous messages
          also go to view messages to see your response </p>
      </div>
      <div class="btn-container">
        <div class="btns view">
            <router-link  to="/message"> view messages&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></router-link>
        </div>
        <div class="btns share">
          <a href="#"><i class="fas fa-share-alt"></i>  &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Share My Profile</a>
        </div>
        <div class="btns WhatsApp">
          <a href="#"><i class="fab fa-whatsapp-square"></i>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Share on WhatsApp </a>
        </div>
        <div class="btns facebook">
          <a href="#"><i class="fab fa-facebook-square"></i>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Share on facebook</a>
        </div>
        <div class="btns instagram">
          <a href="#"><i class="fab fa-instagram-square"></i>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Share on instagram</a>
        </div>  
        <div class="btns twitter">
          <a href="#"><i class="fab fa-twitter-square"></i>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Share on twitter</a>
        </div> 
        <div class="btns view">
            <form action="" class="grp-form" @submit.prevent="createGroup()">
                <input type="text" v-model="group.name" name="name" style="width:75%; margin:auto; height:40px" class="form-control" placeholder="group name"> 
                <button class="grp-btn" type="submit">Create Group&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
            </form>
        </div>
        <div class="c"> 
            <input type="text" style="width:75%; margin:auto;" v-model="user.anonymous_link" class="form-control" placeholder="Generated link wiil appear here">
            <div class="btns view">
                <a href="message.html" @click.prevent="generateAnonymousLink()">Generate Link&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<i class="fas fa-long-arrow-alt-right"></i></a>
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
            group:{
                name: "Nacoss Class'21",
            }
        }
    },
    methods:{
        generateAnonymousLink(){
            this.$store.dispatch('post', {
                endpoint: 'generate-anonymous-link', 
                details: {}
            })
            .then((data) => {
                if(data.data.status){
                    this.anonymous_link = data.data.data;
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
    }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

.grp-form{
    width: 100%;
}

.grp-btn{
    padding: 10px 50px;
    background: #ffffff;
    white-space: nowrap;
    text-decoration: none;
    border-radius: 1rem;
    color: #4F52FF;
    font-family: 'Secular One', sans-serif;
    width: 100%;
    border: none;
}

body{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-X: hidden;
    /* background: rgb(2,0,36);
    background: linear-gradient(280deg, rgba(2,0,36,1) 0%, rgba(170,12,172,0.9947002282303371) 0%, rgba(238,2,126,1) 18%, rgba(5,40,74,1) 37%, rgba(9,90,121,1) 52%, rgba(252,0,255,1) 75%);
    background: linear-gradient(to right,#00515b,#00d4c1,#00515b); */
}
 .hero{
     width: 100%;
     height: 100vh;
     position: relative;
     overflow: hidden;
 
 }
 .logo{
     width: 100px;
     cursor: pointer;
 }

.contents{
    width: 550px;
    padding: 2rem;
    color: white;
    background:  #4F52FF;
    margin: auto;
    border-radius: 10px;
}
.contents .head h2{
    font-family: 'Secular One', sans-serif;
}

.contents .btn-container{
    width: 100%;
}
.btns{
    margin-bottom:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.btns:hover i, a{
    margin-right: 5px;
    transition: .5s;
}
.btns a{
    padding: 10px 50px;
    background: #ffffff;
    white-space: nowrap;
    text-decoration: none;
    border-radius: 1rem;
    color:  #4F52FF;
    font-family: 'Secular One', sans-serif;
    width: 70vw;
}
.view a{
    color:  #4F52FF;
    border-radius: 3rem;
    background-color: rgb(255, 255, 255);
}
.share a{
    background: #ffffff;
    color:  #4F52FF;
}
.WhatsApp a{
    background: #ffffff;
    border-radius: 2.5rem;
    color:  #4F52FF;

}
.facebook a{
    background: #ffffff;
    color:  #4F52FF;

}
.instagram a{
    background-color: rgb(255, 255, 255);
    border-radius: 3rem;
    color:  #4F52FF;

}
.btns i{
    font-size: 1.5rem;
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%);  */
}


.lk-sec a{
    color: white;
}
.footer #hm{
    border-right: 2px solid rgb(255, 255, 255);
    padding-right:10px ;
}
@media only screen and (max-width:811px){
    .contents{
        width: 90vw;
        padding: 1rem;
        /* color: white; */
        background:  #4F52FF;
    }
}
@media only screen and (max-width:470px){
    .contents{
        width: 90vw;
    }
    .btns a{
        padding: 10px 50px;
      
        white-space: nowrap;
        text-decoration: none;
        /* color: white; */
        font-family: 'Secular One', sans-serif;
        width: 90vw;
    }
}

</style>
