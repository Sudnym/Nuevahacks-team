<!-- This is the page where users upload their own posts and those posts are then sent to the server for handling -->

<script context="module">
    let topic = [
        { topic: "Under Construction"}
    ];
    function topichandler() {

    }
    function postHandler() {
        let data =
                {title: document.getElementById('post-input-title').value,
                    content: document.getElementById('post-input').value};
        fetch('https://3j05rfweih.execute-api.us-east-1.amazonaws.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }
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
        height: fit-content;
        margin-top: 15px;
    }
    #left-top-div
    {
        background-color: rgb(33, 32, 37);
        width: 66%;
        float: left;
        height: fit-content;
        margin-top: 15px;
    }
    #post-section
    {
        background-color: rgb(58, 56, 66);
        width: inherit;
        height: fit-content;
        margin-left: 5%;
        padding: 30px;
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
        height: fit-content;
        background-color: rgb(42, 41, 48);
        border: 0;
        border-radius: 200px;
        color: #EEEEEE;
        padding: 50px;
        resize: none;
    }
    #post-input-title
    {
        width: 100%;
        height: fit-content;
        background-color: rgb(42, 41, 48);
        border: 0;
        border-radius: 200px;
        color: #EEEEEE;
        padding: 50px;
        resize: none;
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
    #topic-text{
        font-size: 20px;
        color: white;
        justify-self: center;
        text-align: center;
    }
    textarea:focus, input:focus{
        outline: none;
    }
</style>
<div class="post">
    <div>
        <div id = "right-div">
            <h3 id = "top-text"> Topics </h3>
            {#each topic as { topic }}
                <p on:click={topichandler} id="topic-text" style="text-align: center; padding: 20px">{topic}</p>
            {/each}
        </div>
        <div id = "left-top-div">
            <h3 id = "top-text"> Post </h3>
            <div id = "post-section">
                <h3 id = "top-text">Title:</h3>
                    <input id="post-input-title">
            </div>
                <div id="post-section">
                    <h3 id="top-text" style="padding-top: 20px">Body:</h3>
                    <textarea id = "post-input" type = "text"></textarea>
                </div>
                <input id = "post-sumbit-button" on:click={postHandler} type="image" src = "https://www.dqinstitute.org/wp-content/uploads/2018/02/560px-ArrowRight-blue.svg_.png" alt = "submit" width = 75px height = 75px>
        </div>
    </div>
</div>
