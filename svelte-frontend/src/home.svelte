<script>
    let posts = [
        {title: "I MADE A THING", text: "This is a post, hello, suck it."}
    ];
    function getposts() {

    }
</script>
<style>
    #left-bottom-div
    {
        background-color: rgb(33, 32, 37);
        width: 66%;
        float: left;
        height: 650px;
        margin-top: 18px;
    }
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
</style>
<body>
<div class="post">
    <div id = "left-bottom-div">
        <h3 id = "top-text"> Feed </h3>
        {#each posts as {title, text}}
            <h1>{title}</h1>
            <p>{text}</p>
        {/each}
    </div>
    <div id = "right-div">
        <h3 id = "top-text"> Topics </h3>
    </div>
</div>
</body>