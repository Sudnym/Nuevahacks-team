<!-- This is the main page where users view algorithmically chosen posts -->
<svelte:head>
    <title>
        The Grape Vine
    </title>
</svelte:head>
<script>
    /* imports */
    import Styling from './styling.svelte';
    import { restRequests } from './restrequests.ts';

    let requester = new restRequests();

</script>
<Styling/>
