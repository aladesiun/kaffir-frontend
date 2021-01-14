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
                    <a class="nav-link" href="#">About us</a>
                    <a class="nav-link" href="#">Anonymous</a>
                    <a class="sign-btn" href="login.html" tabindex="-1" aria-disabled="true">sign up</a>

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
                        <input type="email" class="form-control kff_input" placeholder="Your Email Address">
                        <button class="btn btn-primary kff_btn"><p class="text-uppercase  kff_butt_p">subscribe now</p></button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row kff_row_2">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="kaff_col_cont kff_cont_1">
                        <h4 class="text-left">
                            Kaffir
                        </h4>
                        <div class="kff_line">
                        </div>
                        <p class="text-left">
                            A one access world class website 
                            that offer you the chance to send anonymous 
                            message at anytime from anywhere in the world.
                        </p>
                        <div class="d-flex">
                            <div class="kff_icon_cont">
                            <i class="fab fa-facebook-f"></i>
                            </div>
                            <div class="kff_icon_cont" >
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div class="kff_icon_cont">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="kaff_col_cont kff_cont_2">
                        <div class="kff_wrap">
                            <h4 class="text-left">
                            Services
                            </h4>
                            <div class="kff_line">
                            </div>
                        <ul class="kff_ul">
                            <li class="kff_li">Bulk Messages</li>
                            <li class="kff_li">Anonymous Messages</li>
                            <li class="kff_li">Anonymous Group Chat</li>
                            <li class="kff_li">Join Anonymousymous Chat</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="kaff_col_cont kff_cont_3">
                        <h4 class="text-left">
                            Services
                        </h4>
                        <div class="kff_line">
                        </div>
                        <ul class="kff_ul">
                            <li class="kff_li">Bulk Messages</li>
                            <li class="kff_li">Anonymous Messages</li>
                            <li class="kff_li">Anonymous Group Chat</li>
                            <li class="kff_li">Join Anonymousymous Chat</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="kaff_col_cont kff_cont_4"> 
                        <h4 class="text-left">
                            Services
                        </h4>
                        <div class="kff_line">
                        </div>
                        <ul class="kff_ul">
                            <li class="kff_li">Bulk Messages</li>
                            <li class="kff_li">Anonymous Messages</li>
                            <li class="kff_li">Anonymous Group Chat</li>
                            <li class="kff_li">Join Anonymous Chat</li>
                        </ul>
                        </div>
                    </div>
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