<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
            <a class="navbar-brand" href="#"><img src="../../assets/img/logo 2.png" class="img-fluid" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fas fa-bars"></span><i class=""></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#about">About us</a>
                    <a class="nav-link" href="/profile">Anonymous</a>
                    <a class="sign-btn" href="/login" tabindex="-1" aria-disabled="true">sign up</a>

                </div>
            </div>
            </div>
        </nav>
        <router-view></router-view>
        <!-- footer -->
        <footer class="kff_cont">
   <div class="kff_content">
     <div class="row kff_row_1">
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="kff_col_box">
              <h3 class="text">Get Started Now!</h3> 
            </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="kff_col_box ">
              <div class="d-flex">
                <input type="email" class="form-control kff_input" placeholder="Your feedback">
                <button class="kff_btn">Submit</button>
              </div>
            </div>
        </div>
     </div>
     <div class="container-fluid content-wrap">
       <div class="content-box">
         <h5>
           <a href="#">Vist us</a>
         </h5>
       </div>
       <div class="content-box">
        <h5>
          <a href="#">Contact Us</a>
        </h5>
        <div class="d-flex">
          <div class="kff_icon_cont">
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="kff_icon_cont sp">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="kff_icon_cont">
            <i class="fab fa-instagram"></i>
          </div>
        </div>
       </div>
       <div class="content-box">
        <h5>
          <a href="#">Info on Kaffir</a>
        </h5>
      </div>
     </div>
     <div class="container-fluid end-text">
      <p><i>Kaffir always there for you....</i></p>
     </div>
   </div> 
        </footer>
    </div>
</template>

<script>
export default {

}
</script>
<style>
    
</style>