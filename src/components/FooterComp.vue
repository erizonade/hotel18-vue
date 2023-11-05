<template>
    <div id="FooterComp">
        <img src="../assets/logo-putih.png" alt="">
        <p>&copy; Copyright, Telnest 2023</p>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp'
    }
</script>

<style>
    #FooterComp {
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: 80px;
        margin-top: 120px;
    }
    #FooterComp img {
        width: 120px;
        margin-right: 20px;
    }
</style>