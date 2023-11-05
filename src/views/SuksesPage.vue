<template>
  <div id="SuksesPage">
    <!-- navbar -->
    <NavComp />
    <!-- Akhir navbar -->

    <!-- Sukses -->
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            <b>Booking Hotel <br />Telah <span>Berhasil!</span></b>
          </h1>
          <p>Silahkan selesaikan pembayaran sebelum 26/03/2023, 23.00 malam.</p>
          <h6><b>Transfer Bank</b></h6>
          <br />
          <div class="rekening">
            <div class="row mb-5">
              <div class="col-lg-3">
                <img
                  class="ic-mandiri"
                  src="../assets/mandiri_icon.png"
                  alt=""
                />
              </div>
              <div class="col-lg-4">
                <span>Mandiri Virtual Account</span>
                <h5><b>90089181873817</b></h5>
                <p>Telnest Indonesia</p>
              </div>
            </div>
          </div>
          <router-link to="LPlogged"
            ><button class="btn btn-primary">Ke Beranda</button></router-link
          >
        </div>

        <div class="col-lg-6">
          <img class="img-sukses" src="../assets/img-success.png" alt="" />
        </div>
      </div>
    </div>
    <!-- akhir sukses -->

    <!-- Footer -->
    <FooterComp />
    <!-- Akhir Footer -->
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "SubmitPage",
  components: {
    NavComp,
    FooterComp,
  },
};
</script>

<style>
#SuksesPage h1 {
  margin-top: 120px;
  font-weight: 600;
}
#SuksesPage h1 span {
    color: #0d6cf9;
}
#SuksesPage .img-sukses {
  width: 100%;
  margin-top: 50px;
}
#SuksesPage .ic-mandiri {
  width: 200px;
}
</style>
