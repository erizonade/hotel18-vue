<template>
  
  <NavBarIsLogin/>

  <!-- hero -->
  <section id="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>
            Temukan Penginapan <br />
            nyaman untukmu
          </h1>
          <p>
            Booking penginapan terbaik dengan mudah dan rasakan pengalaman
            penginapan terbaik.
          </p>
          <router-link to="/RegistPage" class="btn btn-primary"
            >Pesan Sekarang</router-link
          >
        </div>
        <div class="col-lg-6">
          <img src="../assets/img-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- akhir hero -->

  <!-- List Hotel -->
  <section id="listhotel">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5>Eksplor Penginapan</h5>
          <p>Cari penginapan terbaik dimanapun atau di sekitarmu.</p>
        </div>
      </div>
      <div class="row">
        <ListHotel />
      </div>
    </div>
  </section>
  <!-- akhir list hotel -->

  <!-- Listkota -->
  <section id="listkota">
    <div class="container">
      <div class="row">
        <div class="col">
          <h5>Eksplor berdasarkan kota yang kalian ingin kunjungi.</h5>
          <p>
            Liburan lebih nyaman dan happy dengan penginapan yang terjangkau
          </p>
        </div>
      </div>
      <div class="row">
        <ListKota />
      </div>
    </div>
  </section>
  <!-- akhir listkota -->

  <!-- Promo -->
  <PromoComp />
  <!-- Akhir Promo -->

  <!-- Artikel -->
  <section id="artikel">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <img src="../assets/img-artikel.png" alt="" />
        </div>
        <div class="col-lg-8">
          <div class="deskripsi-artikel">
            <h1>Penawaran ekslusif penginapan hanya di aplikasi!</h1>
            <p>Penawaran ekslusif penginapan hanya di aplikasi!</p>
            <img src="../assets/ic-getplayapp.png" alt="" class="ic-play" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- akhir artikel -->

  <!-- Footer -->
  <FooterComp />
  <!-- Akhir Footer -->
</template>

<script>
// import components
import NavBarIsLogin from "@/components/NavBarIsLogin.vue";
import ListHotel from "@/components/ListHotel.vue";
import ListKota from "@/components/ListKota.vue";
import PromoComp from "@/components/PromoComp.vue";
import FooterComp from "@/components/FooterComp.vue";

// registrasi
export default {
  name: "LandingPage",
  components: {
    NavBarIsLogin,
    ListHotel,
    ListKota,
    PromoComp,
    FooterComp,
  },
  data() {
    return {
      isLogin : false
    }
  },
  mounted() {
    const token = localStorage.getItem('token')
    if (token) {
      this.isLogin = !this.isLogin
    }
  },
};
</script>

<style>
/* navbar */
#LandingPage .navbar-brand img {
  width: 120px;
}
#LandingPage .navbar-nav {
  margin-left: auto;
}
#LandingPage .nav-link {
  margin-right: 20px;
}

#LandingPage .navbar .btn {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* akhir navbar */

/* hero */
#hero h1 {
  margin-top: 150px;
  font-weight: 600;
}
#hero p {
  width: 350px;
  margin-top: 20px;
  margin-bottom: 20px;
}
#hero img {
  width: 100%;
}
/* akhir hero */

/* listhotel */
#listhotel {
  margin-top: 120px;
}
#listhotel h5 {
  font-weight: 600;
}
/* akhir listhotel */

/* listkota */
#listkota {
  margin-top: 120px;
}

#listkota h5 {
  font-weight: 600;
}
/* listkota */

/* artikel */
#artikel img {
  width: 100%;
}
#artikel .ic-play {
  width: 350px;
}
#artikel h1 {
  font-weight: 600;
  margin-top: 250px;
  width: 700px;
}
#artikel .deskripsi-artikel {
  margin-left: 150px;
}
/* akhir artikel */

/* ---------------mobile --------------------*/
@media (max-width: 992px) {
  /* navbar */

  #LandingPage .navbar {
    text-align: center;
  }
  #LandingPage .navbar-brand img {
    width: 120px;
  }
  #LandingPage .navbar-nav {
    margin-left: auto;
  }
  #LandingPage .nav-link {
    margin-right: 0;
  }

  #LandingPage .navbar .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* akhir navbar */

  /* hero */
  #hero {
    text-align: center;
  }
  #hero h1 {
    margin-top: 50px;
    font-weight: 600;
    text-align: center;
  }
  #hero p {
    width: 350px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #hero img {
    width: 100%;
  }
  /* akhir hero */

  /* listhotel */
  #listhotel {
    margin-top: 120px;
  }
  #listhotel h5 {
    font-weight: 600;
  }

  #listhotel .card {
    margin-top: 20px;
  }
  /* akhir listhotel */

  /* listkota */
  #listkota {
    margin-top: 120px;
  }

  #listkota h5 {
    font-weight: 600;
  }

  #listkota .card {
    margin-top: 20px;
  }
  /* listkota */

  /* artikel */
  #artikel img {
    width: 100%;
  }
  #artikel .ic-play {
    width: 350px;
  }
  #artikel h1 {
    font-weight: 600;
    width: 100%;
  }
  #artikel .deskripsi-artikel {
    margin-left: 0;
    margin-top: 50px;
    text-align: center;
  }
  /* akhir artikel */
}
</style>
