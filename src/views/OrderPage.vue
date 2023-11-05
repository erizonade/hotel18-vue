<template>
  <div id="OrderPage">
    <!-- Navbar -->
    <NavBarIsLogin />
    <!-- akhir Navbar -->

    <div class="container">
      <!-- Breadcrumb -->
      <nav style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/DetailPage"
              ><Icon icon="ic:round-keyboard-arrow-left" color="#0d6cf9"
            /></router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <b>Ajukan Pemesanan</b>
          </li>
        </ol>
      </nav>

      <!-- akhir breadcrumb -->
    </div>

    <!-- Kamar -->
    <section id="kamar">
      <div class="container">
        <div class="row">
          <div class="col">
            <h5><b>Kamar Tersedia di Amaris Hotel Palembang</b></h5>
          </div>
        </div>

        <div class="row" v-for="list in listRooms.data" :key="list.id">
          <div class="col-lg-6">
            <div class="card mb-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="list.room_photo" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-4">
                  <div class="card-body">
                    <h5 class="card-title"><b>{{ list.room_name }}</b></h5>
                    <p class="card-text">
                        {{ list.room_description }}
                    </p>
                    <h5>Rp. {{ list.room_price }}/Malam</h5>
                    <router-link :to="'/SubmitPage/'+list.id"><button class="btn btn-primary">Pesan Sekarang</button></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-6">
            <div class="card mb-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="../assets/kamar2.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><b>Junior Suite Room</b></h5>
                    <p class="card-text">
                        Non Refundable, Non Smoking Area, Free Wifi, Bathtub, Air Conditioning, Refrigerator, Free Breakfast.
                    </p>
                    <router-link to="/SubmitPage"><button class="btn btn-primary">Pesan Sekarang</button></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="../assets/kamar3.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><b>Executive Suite Room</b></h5>
                    <p class="card-text">
                        Non Refundable, Non Smoking Area, Free Wifi, Bathtub, Air Conditioning, Refrigerator, Free Breakfast.
                    </p>
                    <router-link to="/SubmitPage"><button class="btn btn-primary">Pesan Sekarang</button></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card mb-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="../assets/kamar4.png" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"><b>Presidential Room</b></h5>
                    <p class="card-text">
                        Non Refundable, Non Smoking Area, Free Wifi, Bathtub, Air Conditioning, Refrigerator, Free Breakfast.
                    </p>
                    <router-link to="/SubmitPage"><button class="btn btn-primary">Pesan Sekarang</button></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- akhir kamar -->

    <!-- footer -->
    <FooterComp/>
    <!-- akhir footer -->
  </div>
</template>

<script>
import axios from "axios";
//import component
import FooterComp from "@/components/FooterComp.vue";
import NavBarIsLogin from "@/components/NavBarIsLogin.vue";

//iconfy
import { Icon } from "@iconify/vue";

export default {
      name: "OrderPage",
      components: {
        NavBarIsLogin,
        Icon,
        FooterComp
    },
    data() {
      return {
        response : {},
        listRooms : []
      }
    },
    methods: {

      setData(dataRoom) {
        this.listRooms = dataRoom;
      },

      async getListRoom() {
        this.response = await axios.get(`http://127.0.0.1:8000/api/hotel-room/${this.$route.params.id}`);
        this.setData(this.response.data);
      }
      
    },
    mounted() {
        this.getListRoom();
    },


};
</script>

<style>
#OrderPage .breadcrumb {
    margin-left: -20px;
}

#OrderPage #kamar .card {
    margin-top: 50px    ;
}
#OrderPage #kamar .card img {
    width: 100%;
}
#OrderPage #kamar .card-text {
    font-size: 14px;
}
</style>
