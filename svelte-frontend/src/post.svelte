<!-- This is the page where users upload their own posts and those posts are then sent to the server for handling -->

<script context="module">
</script>
<style>
    .post
    {
        color: #EEEEEE;
    }
    #right-div
    {
        background-color: rgb(58, 56, 66);
        width: 33%;
        float: right;
        height: 1000px;
        margin-top: 15px;
    }
    #left-top-div
    {
        background-color: rgb(42, 41, 48);
        width: 66%;
        float: left;
        height: 350px;
        margin-top: 18px;
    }
    #post-section
    {
        background-color: rgb(58, 56, 66);
        width: 90%;
        height: 150px;
        margin-left: 5%;
    }
    #ppf
    {
        position: absolute;
        margin: 37.5px;
    }

    #post-sumbit-button
    {
        margin-top: 37.5px;
        margin-left: 85%;
        border: none;
    }
    #post-input-box
    {
        width: 40%;
        height: 75px;
        border-radius: 50px;
        margin-top: 37.5px;
        margin-left: 7%;
        background-color: rgb(42, 41, 48);
        position: absolute;
    }
    #post-input
    {
        width: 100%;
        height: 100%;
        background-color: rgb(42, 41, 48);
        border: 0;
        border-radius: 200px;
        color: #EEEEEE;
    }
    #left-bottom-div
    {
        background-color: rgb(33, 32, 37);
        width: 66%;
        float: left;
        height: 650px;
        margin-top: 18px;
    }
    #top-text
    {
        text-align: center;
        font-size: 36px;
        text-shadow: 0, 5px, 0, rgb(22, 22, 20);
    }

    textarea:focus, input:focus{
        outline: none;
    }
</style>
<div class="post">
    <div>
        <div id = "right-div">
            <h3 id = "top-text"> Topics </h3>
        </div>
        <div id = "left-top-div">
            <h3 id = "top-text"> Post </h3>
            <div id = "post-section">
                
                <img id = "ppf" src = "https://cdn.clipart.email/8f4e4a0f0cbf0dee5af55ba7cfedeca3_white-circle-png-free-download_1890-1890.png" width = 75px height = 75px>
                <div id = "post-input-box">
                    <input id = "post-input" type = "text">
                </div>
                <input id = "post-sumbit-button" type="image" src = "https://www.dqinstitute.org/wp-content/uploads/2018/02/560px-ArrowRight-blue.svg_.png" alt = "submit" width = 75px height = 75px>
            </div>
        </div>
    </div>
</div>
