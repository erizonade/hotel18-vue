<template>
  <div id="LPlogged">
    <NavComp />

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
            <router-link to="/BookingPage" class="btn btn-primary"
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
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import ListHotel from "@/components/ListHotel.vue";
import ListKota from "@/components/ListKota.vue";
import PromoComp from "@/components/PromoComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "LPlogged",
  components: {
    NavComp,
    ListHotel,
    ListKota,
    PromoComp,
    FooterComp
  },
};
</script>

<style>
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
</style>
