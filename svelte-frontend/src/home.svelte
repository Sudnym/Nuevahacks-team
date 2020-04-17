<script>
    let posts = [
        {title: "I MADE A THING", text: "This is a post, hello, suck it."}
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