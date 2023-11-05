<template>
  <div id="BookingPage">
    <!-- Navbar -->
    <NavComp />
    <!-- akhir navbar -->
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>
            Cari penginapan <br />
            berdasarkan kebutuhanmu.
          </h1>
          <input
            type="text"
            class="form-control"
            placeholder="cth.hotel palembang, Amaris hotel"
          />
          <router-link to="/DetailPage" class="btn btn-primary"> Jelajahi </router-link>
        </div>
      </div>
    </div>

    <!-- List Hotel -->
    <section id="listhotel">
      <div class="container">
        <div class="row">
          <div class="col">
            <h5>Tempat Rekomendasi</h5>
            <p>Cari penginapan terbaik dimanapun atau di sekitarmu.</p>
          </div>
        </div>
        <div class="row">
          <ListHotel />
        </div>
      </div>
    </section>
    <!-- akhir list hotel -->
    <!-- Footer -->
    <FooterComp/>
    <!-- akhir footer -->
  </div>
</template>

<script>
// import comp
import ListHotel from '@/components/ListHotel.vue';
import NavComp from "@/components/NavComp.vue";
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: "BookingPage",
  components: {
    ListHotel,
    NavComp,
    FooterComp
  },
};
</script>

<style>
#BookingPage h1 {
    font-weight: 600;
    margin-top: 50px;
}
#BookingPage input {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
