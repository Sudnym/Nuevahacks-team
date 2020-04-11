<!-- This is the main page where users view algorithmically chosen posts -->
<head>
    <title>
        We're all done for the day?
    </title>
</head>
<script>
    import Box from './styling.svelte';
    import { restRequests } from './restrequests.ts';
    let requester = new restRequests();
    console.log(requester.getRequest('https://dog.ceo/api/breeds/list/all'))
</script>

<Box/> <!-- Display's the site title and a color scheme i've been playing with -->
<p style="color: beige"></p>
