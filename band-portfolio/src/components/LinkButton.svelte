<script>
    export let navigateTo = " "
</script>

<a href={navigateTo} on:mouseenter on:mouseleave >
    <slot/>
</a>



<style>
    .container {
        height: 128px;
        width: 128px;
    }

    a:link, a:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    height: 128px;
        width: 128px;
    }

    /* a:hover, a:active {
    background-color: red;
    } */
</style>