<template>
   <div>
    <div class="row hrr">
        <div class="container p-0 mt-5">
            <div class="row pt-5 text-center">
                <div class="col-md-12 img-sec-sm">
                    <img src="../../assets/img/fs1.png" alt="" class="img-fluid" />
                </div>
            </div>
            <div class="row hero mt-5">
                <div class="col-lg-7 col-md-12">
                    <h1>Send anonymous messages to your friends online.</h1>
                    <!-- <p class="ptt">know what people think about, start the journey by clicking any of the botton below</p> -->
                    <div class="lkns">
                        <router-link class="sign-btn" to="/register" tabindex="-1" aria-disabled="true">sign up</router-link>
                        <router-link class="sign-btn tolog" to="/login" tabindex="-1" aria-disabled="true" style="">log in</router-link>
                    </div>
                </div>
                <div class="col-md-5 img-sec">
                    <img src="../../assets/img/fs1.png" alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    <!-- carousel -->
    <section class="cards-section">
        <div class="container-xl">
            <div class="head-y text-center">
                <h2>why you must join the society</h2>
            </div>
            <div id="about" class="card-row grid-slider-wrap carousel p-0" data-flickity='{ "wrapAround": true }'>
                <div class="grid-slide">
                    <div class="cards bb">
                        <div class="icon-cont icon-bb">
                            <div class="icon-main icon-bb-main"></div>
                        </div>
                        <h1>safe and secure</h1>
                        <p>Safety Of Our Users Using This Anonymous Messaging Platform Is Very Important to Us. We Have Got Reporting Systems So That You Can Report Anything That You Do Not Like To See.</p>
                    </div>
                </div>
                <div class="grid-slide">
                    <div class="cards">
                        <div class="icon-cont">
                            <div class="icon-main"></div>
                        </div>
                        <h1>27/4</h1>
                        <p>If There Is Anything That You Need Help With Related To Our Anonymous Messaging And Feedback Platform, We Are Always Here For You. 24 Hours A Day And 7 Days A Week.</p>
                    </div>
                </div>
                <div class="grid-slide">
                    <div class="cards bb">
                        <div class="icon-cont icon-bb">
                            <div class="icon-main icon-bb-main"></div>
                        </div>
                        <h1>Advance Features</h1>
                        <p>later in the future you will be able to create a group chat and even send a voice record and share files </p>
                    </div>
                </div>
                <div class="grid-slide">
                    <div class="cards">
                        <div class="icon-cont">
                            <div class="icon-main"></div>
                        </div>
                        <h1>27/4</h1>
                        <p>If There Is Anything That You Need Help With Related To Our Anonymous Messaging And Feedback Platform, We Are Always Here For You. 24 Hours A Day And 7 Days A Week.</p>
                    </div>
                </div>
                <div class="grid-slide">
                    <div class="cards">
                        <div class="icon-cont">
                            <div class="icon-main"></div>
                        </div>
                        <h1>Anonimity</h1>
                        <p>Our Platform Ensures Your Privacy So That You Stay Anonymous Everytime You Send Someone A Secret Message.</p>
                        <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Anonimity</h5>
                                <butto" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message:</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary done" data-bs-dismiss="modal">Done</button>
                            </div>
                            </div>
                        </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- follow us -->
    
    <!-- FAQ -->
    <div class="container-xl faq mt-4">
        <div class="row">
            <div class="col-md-6">
                <h1 class="mb-3">Frequently asked questions</h1>
                <div class="ask-tab mb-2">
                    <div class="dropdown d-flex">
                        <div class="i-cont" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fas fa-plus"></i>
                        </div>
                        <p>How do I know I will be anonymous</p>
                    </div>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>You will surely know you are anonymous all users are just given a generic coded no that are generated from the server not even known to us. Therefore we assure you of anononymity </p>
                        </div>
                    </div>
                </div>
                <div class="ask-tab">
                    <div class="dropdown d-flex">
                        <div class="i-cont" data-mdb-toggle="collapse" data-mdb-target="#collapsetwo" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fas fa-plus"></i>
                        </div>
                        <p>if i send a voice won't i be detected</p>
                    </div>
                    <div id="collapsetwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>you can not be detected if you use our voicenote because after your voice has be recorded you will be ask to choose a robotic voice that disguise your voice from been detected its you</p>
                            <!-- <p>You will surely know you are anonymous all users are just given a generic coded no that are generated from the server not even known to us. Therefore we assure you of anononymity</p> -->
                        </div>
                    </div>
                </div>
                <div class="ask-tab">
                    <div class="dropdown d-flex">
                        <div class="i-cont" data-mdb-toggle="collapse" data-mdb-target="#collapsethree" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fas fa-plus"></i>
                        </div>
                        <p>can i create a room</p>
                    </div>
                    <div id="collapsethree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>definietly you can create a room, Every user is entitled to create a room/group chat for friends and family</p>
                            <!-- <p>You will surely know you are anonymous all users are just given a generic coded no that are generated from the server not even known to us. Therefore we assure you of anononymity</p> -->
                        </div>
                    </div>
                </div>
                <div class="ask-tab">
                    <div class="dropdown d-flex">
                        <div class="i-cont" data-mdb-toggle="collapse" data-mdb-target="#collapsefour" aria-expanded="true" aria-controls="collapseOne">
                            <i class="fas fa-plus"></i>
                        </div>
                        <p>what if i am offended</p>
                    </div>
                    <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>if you are offended by what a user sent you can send report the user in the report section</p>
                            <!-- <p>You will surely know you are anonymous all users are just given a generic coded no that are generated from the server not even known to us. Therefore we assure you of anononymity</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 faq-img-sec">
                <img src="../../assets/img/ask.png" alt="" class="img-fluid" />
                <img src="../../assets/img/asset1.png" alt="" class="ast" />
            </div>
        </div>
    </div>
   <footer class="footer-area p_30">
    <div class="container">
        <div class="row footer-bottom d-flex justify-content-between align-items-center">
            <p class="col-lg-8 col-md-8 footer-text m-0">
                Copyright © 2021 - kaffir <b>|</b> 
                <br />
            </p>
          
        </div>
    </div>
</footer>

</div>

</template>
<script>

window.addEventListener("scroll", function(){ 
 const scrollnav= document.querySelector('nav');
    scrollnav.style.transition= 'all .8s';
   scrollnav.classList.toggle('scroll', window.scrollY >200);
})

const icons = Array.from(document.querySelectorAll('.icon'))
icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icons.forEach((i) => {
      i.classList.remove('icon--expanded');
    });
    icon.classList.add('icon--expanded')
  })
})



// var elem = document.querySelector('.grid-slider-wrap');
// var t= new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   autoPlay:true,
// //   autoPlay: 1500,
//   contain: true
// });


</script>

<style scoped>
      .bb p{
          text-transform: capitalize;
      }  
      .hero a{
          color: white;
      }
      .bbl{
          color:#4f52ff!important;
      }
      .ptt{
          padding-top: 10px;
      }
      .tolog{
        margin-left: 5px;
        background-color: white;
        color: #4f52ff!important;
      
      }
      .tolog:hover{
          background-color: #4f52ff;
          color: white 
          !important;;
      }
      .footer-area{
          background: #062a5c;
          color: white;
        padding: 50px 10px;
      }
      .footer-area a, .footer-area p{
          color: white;
      }
</style>