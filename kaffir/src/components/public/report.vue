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
                        <form method="post" @submit.prevent="post">
                            <input type="text" placeholder="type..." v-model="reportcontent.report">
                            <input type="submit" value="submit">
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
</section>
  
</template>
<script>
export default {
   data (){
       return{
           reportcontent:{
            report:''

           }
       }
   },
   methods:{
       post(){
           if (this.reportcontent.report == '') {
               alert('report can not be empty')
           }
            this.$store.dispatch('post',{
                endpoint:'report-offence',
                details:this.reportcontent

            })
            .then((data)=>{
                    console.log(data.data);

                if (data.data) {
                    alert(' Report sent successfuly, please wait for our response team ');
                    window.location.href= '/messages'
                }
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