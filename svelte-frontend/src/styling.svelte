<style>
    .box {
        width: 98%;
        border: 1px solid #005050;
        border-radius: 25px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
        margin: 0 0 1em 0;
        background: maroon;
        align-content: center;
        align-items: center;
        justify-content: center;
        alignment-baseline: center;
        place-content: center;
    }
    .box-inside {
        border-radius: 25px;
        width: 100%;
        border: none;
        background: #006060;
        align-self: center;
        align-content: center;
        display: inline-block;
        justify-content: center;
        text-align: center;
        margin: auto;
        color: maroon;
    }

</style>
<body>
<div class="box">
    <div class="box-inside">
        <slot/>
    </div>
</div>
</body>