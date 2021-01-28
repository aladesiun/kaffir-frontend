<template>
    <div class="cont">
        <div class="ead text-center">
            <h2 class="abt">
                say somthing....
            </h2>
        </div>
        <div class="sendinp">
            <!-- <i type="text" class="text-inp" placeholder="type your message"> -->
                <textarea name="" class="text-inp"></textarea>
            <div class="btn-to-send">
                <button  class="sndbtn-msg">send</button>
            </div>
        </div>
    </div>
</template>

    <style>
    body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #4542ff;
}
input,button,textarea{
    outline: none!important;
}
h2{
    color: white;
}
.cont{
    width: 500px;
    height: 90vh;
    border:1px solid  #ffffff;
    border-radius: 20px;
    margin: 20px auto;
}
.sendinp, .btn-to-send{
    display: flex;
    justify-content: center;
    align-items: bottom;
    flex-direction: column;
    width: 100%;
}
.sendinp .text-inp{
    width: 80%;
    margin: 1rem auto;
    border: none;
    border-bottom: 2px solid white;
    background: transparent;
    padding: 10px;
}
.sendinp .text-inp::placeholder{
    color: white;
}
.sendinp .sndbtn-msg{
    background-color: rgb(255, 255, 255);
    width: 80%;
    border-radius: 20px;
    border: none;
    /* height: 20px; */
    margin: auto;
    padding: 10px;
}
    @media only screen and (max-width:540px){
        .cont{
            width: 90%;
        }
    }
    </style>