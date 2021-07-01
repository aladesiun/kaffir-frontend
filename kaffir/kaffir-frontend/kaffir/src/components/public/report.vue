<template>
<section>
        <div class="rrp">
                <div class="col-md-12 text-center y-hr">
                    <h2>As any one offended you?</h2>
                </div>
            <div class="row repq">
                <div class="col-md-12 text-center">
                <!-- <h3>would you like to us a feedback or report</h3> -->
                    <div class="area">
                    <input type="text" placeholder="type..." v-model="reporttext">
                    <input type="submit" value="submit" @click="post">
                    </div>
                </div>
            </div>
        </div>
</section>
  
</template>
<script>
import axios from 'axios'
export default {
   data (){
       return{
           reporttext:''
       }
   },
   methods:{
       post(){
            console.log(this.reporttext);
            axios.post("https://anonymous-report-ff37a-default-rtdb.firebaseio.com/", this.reporttext)
            .then(function (data){
                console.log(data);
            })
            .catch((error)=>{
              console.log(error);
            })
    },
   }

}
</script>
<style scoped>
.y-hr{
    color: blue;
}
.rrp{
    margin-top:6rem;
    margin: 6rem auto;
    background-color: white;
    width: 500px;
    padding: 10px;
    border-radius: 10px;
}
.repq{
    max-width: 500px;
    margin: 5px auto;
}

section{
    width: 100vw;
    overflow: hidden;
    background-color: #4f52ff;
    height: 100vh;
    /* filter: opacity(0.5); */
} 
input{
        background: white;
    border: 2px solid #4f52ff;
    border-radius: 0px;
    padding: 6px 5px;
    margin: 10px auto;
    width: 100%;
    box-shadow: 0px 0px 5px #4f52ff;
}
input[type="submit"]{
    background-color: #4f52ff;
    margin: 5px auto;
    color: white;
}
@media screen and (max-width:700px)  {
    .rrp{
        width: 90%;
    }
}
</style>