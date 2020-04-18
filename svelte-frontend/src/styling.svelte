<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</svelte:head>
<script>
    import Post from "./post.svelte"
    import Home from "./home.svelte"
    let src = "./test.png";
    function homeHandler(){
        document.getElementById("post").style.display = "none";
        document.getElementById("home").style.display = "block";
    }
    function postHandler(){
        document.getElementById("post").style.display = "block";
        document.getElementById("home").style.display = "none";
    }
</script>
<style>
    #top-nav-bar {
        background-color: #350035;
        height: 8rem;
        width: 100%;
        margin-left: -1.2rem;
        margin-top: -1.2rem;
        position: fixed;
        z-index: 10;

    }
    #top-nav {
        list-style-type: none;
        margin: 0;
        float: left;
        color: #ccb63a;
        padding: 9px 9px 9px 75px;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        text-decoration: none;
        font-size: 1.25vw;

    }
    #top-links {
        position: absolute;
        padding: 3.05rem;
        text-shadow: 0 0 19px #fff1a4;
        margin-left: 50%;
        z-index: 20;
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;

    }

    #top-nav-link   {
        position: relative;
        color: #ccb63a;
        text-decoration: none !important;
        text-shadow: 0 3px 0 #fff1a4;
        margin-left: 4rem;
        font-size: 30px;
        float: right;
        justify-self: right;

    }

    #top-nav-link:hover {color: #fff1a4;
        text-shadow: 0 3px 0 #ccb63a;
    }
    .box1 {
        width: 100%;
        margin-left: -1.25rem;
        margin-top: 5rem;
        border: 1.5rem solid #fff1a4;
        box-shadow: 0 0 8px rgba(0,0,0,1);
        background: #fff1a4;
        align-content: center;
        align-items: center;
        justify-content: center;
        place-content: center;
    }
    #heading {
        background-color: #ccb63a;
        width: 100%;
        margin-left: -10px;
        margin-top: 35px;
        border-style: solid;
        border-right-width: 20px;
        border-color: #ccb63a;
        position: fixed;
        height: 100px;
        z-index: 11;
        padding-left: 600px;
        text-decoration: none;
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        box-shadow: 0 0 0 black;

    }
    #logo {
        margin-top: 2rem;
        margin-left: 1rem;
        width: 4rem;
        height: 4rem;
        z-index: 15;

    }
    .box-white {
        width: 100%;
        box-shadow: 0 0 8px rgba(0,0,0,1);
        background: #EEEEEE;
        align-content: center;
        align-items: center;
        justify-content: center;
        place-content: center;
    }
    .box-inside {
        width: 100%;
        margin-top: -1rem;
        margin-left: 2rem;
        border: none;
        background: #EEEEEE;
        align-self: center;
        align-content: center;
        display: inline-block;
        justify-content: center;
        text-align: center;
        color: #fff1a4;
    }
    :global(body){
        background: #141414;
    }
    .headertext{
        font-family: Calibri, serif;
    }
    .heading-header-text{
        position: absolute;
        margin-top: 2.5rem;
        margin-left: 6rem;
        color: #495059;
        font-family: 'Montserrat', sans-serif
    }
</style>
<body>
    <div id="top-nav-bar">
        <div id = "heading-logo" >
            <h1 class = "heading-header-text"> Grapevine </h1>
            <img id = "logo" src = https://cdn.discordapp.com/attachments/698564721334419507/699769787294810162/LogoMakr_5Lb4Lv.png alt="Logo">
            <div style="margin: 40px; width: 50%; float: right ">
                <a id = "top-nav-link" on:click={postHandler}> <b> Post </b> </a>
                <a id = "top-nav-link" style = "color: lightgrey;" on:click={homeHandler}> <b> Home</b> </a>
            </div>
        </div>
        <nav id="top-nav">
        </nav>
    </div>
    <div class = "box1">
    </div>
    <div id="post" style="display: none">
        <Post/>
    </div>
    <div id="home" style="display: block">
        <Home/>
    </div>
</body>
