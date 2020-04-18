<head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
</head>
<script>
    import Post from "./post.svelte"
    import Search from "./search.svelte"
    import Contact from "./contact.svelte"
    import Home from "./home.svelte"
    let src = "./test.png";
    function homeHandler(){
        document.getElementById("post").style.display = "none";
        document.getElementById("search").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("home").style.display = "block";
    }
    function postHandler(){
        document.getElementById("post").style.display = "block";
        document.getElementById("search").style.display = "none";
        document.getElementById("contact").style.display = "none";
        document.getElementById("home").style.display = "none";
    }
    function searchHandler() {
        document.getElementById("post").style.display = "none";
        document.getElementById("search").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("home").style.display = "none";
    }
    function contactHandler() {
        document.getElementById("post").style.display = "none";
        document.getElementById("search").style.display = "none";
        document.getElementById("contact").style.display = "block";
        document.getElementById("home").style.display = "none";
    }
</script>
<style>
    #top-nav-bar {
        background-color: rgb(252, 252, 252);
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
        text-shadow: 0 0 5px black;
        font-size: 1.25vw;

    }

    #top-nav-link   {
        position: relative;
        color: #ccb63a;
        text-decoration: none !important;
        text-shadow: 0 3px 0 #fff1a4;
        margin-left: 4rem;
        font-size: 30px;

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
    #logo {
        margin-top: 2rem;
        margin-left: 1rem;
        width: 4rem;
        height: 4rem;
        z-index: 15;

    }
    :global(body){
        background: #141414;
        font-family: 'Montserrat', sans-serif;
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
            <h1 class = "heading-header-text"> The Grape Vine </h1>
            <img id = "logo" src = "https://www.pngitem.com/pimgs/m/260-2606767_greek-pillar-capital-icon-pillar-greece-png-icon.png" alt="Logo">
            <div style="margin: 50px; width: 50%; float: right ">
                <a id = "top-nav-link" style = "color: rgb(112, 49, 117);" on:click={homeHandler}> <b> Home</b> </a>
                <a id = "top-nav-link" on:click={postHandler}> <b> Post </b> </a>
                <a id = "top-nav-link" on:click={searchHandler}> <b> Find Your Post </b> </a>
                <a id = "top-nav-link" on:click={contactHandler}> <b> Contact </b> </a>
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
    <div id="search" style="display: none">
        <Search/>
    </div>
    <div id="contact" style="display: none">
        <Contact/>
    </div>
    <div id="home" style="display: none">
        <Home/>
    </div>
</body>
