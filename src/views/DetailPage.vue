<template>
  <div id="DetailPage">
    <!-- Navbar -->
    <NavBarIsLogin />
    <!-- akhir navbar -->

    <div class="container">
      <!-- Breadcrumb -->
      <nav style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/BookingPage"><Icon icon="ic:round-keyboard-arrow-left" color="#0d6cf9"/></router-link></li>
          <li class="breadcrumb-item active" aria-current="page"><b>Detail Page</b></li>
        </ol>
      </nav>

      <!-- akhir breadcrumb -->
    </div>

    <!-- Detail -->
    <div id="detail">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img :src="detailHotel.foto_hotel" alt="" />
          </div>
          <div class="col-lg-6">
            <div class="deskripsi-hotel">
            <h1>{{ detailHotel.nama_hotel }}</h1>
            <p>{{ detailHotel.alamat_hotel }}, {{ lokasi.nama_lokasi }}</p>
            <p><Icon icon="material-symbols:star-rate" color="yellow" /> <b>5.0</b> (100)</p>
            <h6><b>Tentang Hotel</b></h6>
            <p>
              Menginap di Amaris Hotel Palembang saat anda berada di Palembang
              adalah pilihan yang sangat cerdas.
            </p>
            <router-link :to="'/OrderPage/'+detailHotel.id"><button class="btn btn-primary">Pesan Sekarang</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- akhir detail -->

    <!-- fasilitas -->
    <section id="fasilitas">
        <div class="container">
            <h5> <b>Fasilitas</b> </h5>
            <div class="row">
                <div class="col-lg-4">
                    <h6><Icon icon="ri:hotel-line" /> <b>Layanan Hotel</b></h6>
                    <ul>
                        <li>Bellhop</li>
                        <li>Concierge</li>
                        <li>24-hour Security</li>
                        <li>Laundry</li>
                        <li>Luggage Storage</li>
                        <li>Wedding Service</li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h6><Icon icon="icon-park-outline:hotel-please-clean" /> <b>Fasilitas Public</b></h6>
                    <ul>
                        <li>Parking</li>
                        <li>Coffe Shop</li>
                        <li>Elevator</li>
                        <li>Restaurant</li>
                        <li>Room Service</li>
                        <li>Savety Deposit</li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h6><Icon icon="game-icons:gym-bag" /> <b>Fasilitas Lainnya</b></h6>
                    <ul>
                        <li>Fitness center</li>
                        <li>Garden</li>
                        <li>Hot tub</li>
                        <li>Massage</li>
                        <li>Outdoor pool</li>
                        <li>Sauna</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- akhir fasilitas -->

    <!-- footer -->
    <FooterComp/>
    <!-- akhir -->
  </div>
</template>

<script>
import axios from "axios";
import NavBarIsLogin from "@/components/NavBarIsLogin.vue";
import FooterComp from "@/components/FooterComp.vue";

//iconfy
import { Icon } from '@iconify/vue';

export default {
  name: "DetailPage",
  components: {
    NavBarIsLogin,
    Icon,
    FooterComp
    
  },
  data() {
    return {
      response  : "",
      detailHotel : "",
      lokasi : ""
    }
  },
  methods: {
    
    setData(dataHotel) {
      this.detailHotel = dataHotel;
    },

    setLokasi(dataLokasi) {
      this.lokasi = dataLokasi;
    },

    async listDetailHotel() {
      this.response = await axios.get(`http://127.0.0.1:8000/api/hotel/${this.$route.params.id}/detail`)
      console.info(this.response.data.data);
      this.setData(this.response.data.data);
      this.setLokasi(this.response.data.data.lokasi);

    }

  },

  mounted() {
     this.listDetailHotel()
  },
};
</script>

<style>
#DetailPage #detail img {
    width: 100%;
}

#DetailPage #detail .deskripsi-hotel h1 {
    font-weight: 600;
    margin-top: 50px;
}
#DetailPage #detail .deskripsi-hotel .btn {
    width: 100%;
}
#DetailPage #fasilitas {
    margin-top: 100px;
}
</style>
