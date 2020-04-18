<script>
    let posts = [
        { title: "ERROR", text: "none"}
    ];
    fetch('https://3j05rfweih.execute-api.us-east-1.amazonaws.com/posts').then(response => { response.json().then(data =>{posts = data}) });
    /*let posts = [
        {title: "ERROR", text: "Unable to load posts"},
    ];*/

    let topic = [
        { topic: "Under Construction"}
    ];
    function getposts() {

    }
    function topichandler() {

    }
    function sorthandler() {
        if (this.textContent == "Hot") {
            fetch('https://3j05rfweih.execute-api.us-east-1.amazonaws.com/posts?sort=hot').then(response => {
                response.json().then(data => {
                    posts = data
                })
            })
        }
        if (this.textContent == "Top") {
            fetch('https://3j05rfweih.execute-api.us-east-1.amazonaws.com/posts?sort=top').then(response => {
                response.json().then(data => {
                    posts = data
                })
            })
        }
        if (this.textContent == "New") {
            fetch('https://3j05rfweih.execute-api.us-east-1.amazonaws.com/posts?sort=new').then(response => {
                response.json().then(data => {
                    posts = data
                })
            })
        }
    }
    function upvote(name) {
        this.src = 'filled.png'
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
        width: 90%;
        box-shadow: 0 0 8px rgba(0, 0, 0, 1);
        background: gray;
        align-content: center;
        align-items: center;
        justify-content: center;
        place-content: center;
        text-align: center;
        justify-self: center;
        align-self: center;
        margin: auto;
        padding-bottom: 40px;
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
    .post
    {
        color: #EEEEEE;
    }
    /* Dropdown Button */
    .dropbtn {
        background-color: black;
        color: gray;
        padding: 16px;
        font-size: 16px;
        border: none;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: absolute;
        display: block;
        padding: 20px;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    /* Links inside the dropdown */
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    /* Change color of dropdown links on hover */
    .dropdown-content a:hover {background-color: ghostwhite;}

    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {display: block;}

    /* Change the background color of the dropdown button when the dropdown content is shown */
    .dropdown:hover .dropbtn {background-color: black;}
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
        height: fit-content;
        margin-top: 15px;
        justify-content: center;
        justify-items: center;
        align-content: center;
        padding-bottom: 20px;
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
    #topic-text{
        font-size: 20px;
        color: white;
        justify-self: center;
        text-align: center;
    }
    #blackline{
        width: 60%;
        margin: auto;
        height: 2px;
        border-radius: 50px;
        background: black;
    }
    #upvote{
        height: 40px;
        width: 40px;
        float: left;
        position: static;
    }
</style>
<body>
<div class="post">
    <div>
        <div id = "right-div" style="text-align: center">
            <h3 id = "top-text"> Topics </h3>
            {#each topic as { topic }}
                <p on:click={topichandler} id="topic-text" style="text-align: center; padding: 20px">{topic}</p>
            {/each}
        </div>
        <div id = "left-bottom-div">
            <div class="dropdown">
                <button class="dropbtn">Sort by:</button>
                <div class="dropdown-content">
                    <a on:click={sorthandler}>Hot</a>
                    <a on:click={sorthandler}>Top</a>
                    <a on:click={sorthandler}>New</a>
                </div>
            </div>
            <h3 id = "top-text"> Feed </h3>
            {#each posts as {title, text}, i}
                <div class="box-white">
                    <h1 id="top-text" >{title}</h1>
                    <div id="blackline"></div>
                    <p style="margin-bottom: auto; padding-bottom: 20px">{text}</p>
                    <img id='upvote' src="emptybutton.png" on:click={upvote}>
                </div>
            {/each}
        </div>
    </div>
</div>
</body>