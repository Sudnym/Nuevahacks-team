<script>
    let posts = [
        {title: "this post", text: "this text"}
    ]
    function getposts() {

    }
</script>

<body>
{#each posts as {title, text}}
    <h1>{title}</h1>
    <p>{text}</p>
{/each}
</body>