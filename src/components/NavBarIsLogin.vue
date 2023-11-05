<template>
    <div id="NavBarIsLogin">
        <!-- ini kondisi sudah logn -->
        <div v-if="isLogin">
            <NavComp />
        </div>

        <!-- ini kondisi belum login -->
        <div v-else id="LandingPage">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <router-link to="/RegistPage" class="nav-link">Booking</router-link>
                            <router-link to="/RegistPage" class="nav-link">Lokasi</router-link>
                            <router-link to="/RegistPage" class="btn btn-outline-primary">Daftar</router-link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <!-- Navbar akhir -->
    </div>
</template>

<script>

import NavComp from './NavComp.vue';

export default {
    name: 'NavBarIsLogin',
    components : {
        NavComp,
    },
    data() {
        return {
            isLogin : false,
        }
    },
    mounted() {
        let token = localStorage.getItem('token')
        if(token) return this.isLogin = !this.isLogin;
    },
}
</script>