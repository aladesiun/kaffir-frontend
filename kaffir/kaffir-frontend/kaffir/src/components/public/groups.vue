<template>
    <div class="g-cont">
        <div class="g-nav">
            <ul>
                <li><a href="#"><i class="fas fa-long-arrow-alt-left"></i></a></li>
                <li><span>Available groups</span></li>
                <li><a href="#"><i class="fas fa-home"></i></a></li>
            </ul>
        </div>
            <div class="search-bx">
            <input type="text"  placeholder="search for groups">
            </div>
        <div class="grd-box-groups">
            <div class="a-g-card">
                <div class="op-holder">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="round"></div>
                <p class="gr-title">liko join</p>
            </div>
            <div class="a-g-card">
                <div class="op-holder">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="round"></div>
                <p class="gr-title">liko join</p>
            </div>
            <div class="a-g-card">
                <div class="op-holder">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="round"></div>
                <p class="gr-title">liko join</p>
            </div>
            <div class="a-g-card">
                <div class="op-holder">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <div class="round"></div>
                <p class="gr-title">liko join</p>
            </div>
        </div>
    </div>
</template>

 <script src="<%= BASE_URL %>vendor/tilt/tilt.jquery.min.js"></script>

    <!--===============================================================================================-->
      <script src="<%= BASE_URL %>js/main.js"></script>
    <script src="<%= BASE_URL %>./assets/js/jquery-3.4.1.min.js"></script> 
	
  




       <script src="<%= BASE_URL %>./js2/jquery-3.4.1.min.js"></script> 
	
       <!-- Bootstrap Core JS -->
         <script src="<%= BASE_URL %>./js2/popper.min.js"></script> 
         <script src="<%= BASE_URL %>./js2/bootstrap.min.js"></script> 
     
         <script src="<%= BASE_URL %>./js2/bootstrap-rtl.min.js"></script> 
       <!-- <!- Custom Scroll JS -- -->
         <script src="<%= BASE_URL %>./js2/jquery.nicescroll.min.js"></script> 
          <script src="<%= BASE_URL %>./js2/plugins/mcustomscroll/jquery.mCustomScrollbar.js"></script>
       <!-- Custom JS -->
          <script src="<%= BASE_URL %>./js2/script.js"></script>

<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.g-cont {
    width: 500px;
    background: white;
    height: max-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    border: 2px solid lightgray;
    border-radius: 10px;
}
.g-nav {
    width: 100%;
    padding: 1rem 2rem;
}
.g-nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: lightgray;
    height: 50px;
    /* width: 100%; */
}
.g-nav ul li {
    color: black;
    list-style: none;
}
.g-nav ul li a i {
    font-size: 2rem;
}
.g-nav ul li span {
    padding: 10px;
    width: 100%;
    display: block;
    border-radius: 4px;
    background: #3168df;
}

.grd-box-groups {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 10px auto;
    grid-template-columns: 40%, 40%;
}
.grd-box-groups .a-g-card {
    text-align: center;
    width: 150px;
    height: 150px;
    border: 2px solid lightgray;
    box-shadow: 0px 0px 10px lightgray;
    border-radius: 10px;
    margin: 10px;
}
.a-g-card .round {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: auto;
    background: #4f52ff;
}
.fa-ellipsis-h {
    display: block;
    text-align: right;
    font-size: 20px;
    padding: 5px 10px;
}
.a-g-card .gr-title {
    font-size: 20px;
    text-transform: capitalize;
    color: black;
}
.search-bx {
    width: 100%;
    height: max-content;
    padding: 5px;
    text-align: center;
}
.search-bx input {
    margin: 10px auto;
    width: 80%;
    height: 33px;
    background: blue;
    border: none;
    font-size: 15px;
    border-radius: 20px;
    color: white;
    padding: 10px 15px;
}
input::placeholder {
    color: white;
    font-size: 10px;
}

@media only screen and (max-width: 560px) {
    .g-cont {
        width: 90%;
    }
    .grd-box-groups {
        width: 99%;
        margin: 10px auto;
    }
    .grd-box-groups .a-g-card[data-v-37fb475a] {
        width: 43%;
        margin: 5px;
    }
}

</style>