<template>
    <div class="rep-cont">
        <div class="rep-box">
            <div class="inp-rb">
                <textarea name="report" id="rep" cols="30" rows="10"></textarea>
            </div>
            <div class="btn-rep">
                <input type="submit" value="report">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.rep-cont{
    background-color: blue;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rep-cont .rep-box{
    width: 500px;
    height: 500px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 0px 5px lightgrey;
    padding: 10px;
}
.rep-box input{
    padding: 5px 10px;
    background-color: white;
    box-shadow: 0px 0px 10px red inset;
}
</style>