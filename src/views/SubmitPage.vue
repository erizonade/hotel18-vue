<template>
  <div id="SubmitPage">
    <!-- Navbar -->
    <NavBarIsLogin />
    <!-- akhir navbar -->

    <div class="container">
      <!-- Breadcrumb -->
      <nav style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/OrderPage">
              <Icon icon="ic:round-keyboard-arrow-left" color="#0d6cf9" />
            </router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            <b>Ajukan Pemesanan</b>
          </li>
        </ol>
      </nav>
      <!-- akhir breadcrumb -->
    </div>

    <!-- biaya -->
    <section id="biaya">
      <div class="container">
        <h2><b>Detail Biaya</b></h2>
        <div class="row mt-5">
          <div class="col-lg-3">
            <label for=""><b>Check In</b></label>
            <input type="date" @change="checkIn" class="form-control" />
          </div>
          <div class="col-lg-3">
            <label for=""><b>Check Out</b></label>
            <input type="date" @change="checkOut" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-5 mt-5" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-6">
                  <img :src="listRoom.room_photo" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-6">
                  <div class="card-body">
                    <h5 class="card-title"><b>{{ listRoom.room_name }}</b></h5>
                    <div class="row mt-3">
                      <div class="col-lg-6">
                        <h6><b>Check In</b></h6>
                        <p><b>{{ checkInDate }}</b></p>
                      </div>
                      <div class="col-lg-6">
                        <h6><b>Check Out</b></h6>
                        <p><b>{{ checkoutDate }}</b></p>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-lg-6">
                        <h5><b>Biaya</b></h5>
                        <h6><b>Rp.{{ listRoom.room_price }}</b></h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- akhir biaya -->

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <button @click="checkoutHotel" class="btn btn-primary">Pesan Sekarang</button>
          <br><span>*Pastikan semua data benar sebelum memesan kamar.</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterComp />
    <!-- akhir footer -->
  </div>
</template>

<script>
//import componant
import NavBarIsLogin from "@/components/NavBarIsLogin.vue";
import FooterComp from "@/components/FooterComp.vue";
import axios from "axios";

//iconfy
import { Icon } from "@iconify/vue";

export default {
  name: "SubmitPage",
  components: {
    NavBarIsLogin,
    Icon,
    FooterComp
  },
  data() {
    return {
      listRoom: {},
      checkInDate: '-',
      checkoutDate: '-'
    }
  },
  methods: {
    checkIsLogin() {
      let token = localStorage.getItem("token");
      if (!token) {
        alert("Silakan login terlebih dahulu")
        this.$router.push("/LoginPage");
      }
    },

    async loadDetailRoom() {
      let response = await axios.get(`http://127.0.0.1:8000/api/hotel-room/${this.$route.params.id}`);
      this.listRoom = response.data.data[0]
    },

    checkIn(e) {
      this.checkInDate = e.target.value
    },

    checkOut(e) {
      this.checkoutDate = e.target.value
    },

    async checkoutHotel() {
      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/transaksi`, {
                        "check_in" : this.checkInDate,
                        "check_out" : this.checkoutDate,
                        "methode_bayar" : "TRANSFER",
                        "room_id" : this.listRoom.id
                      }, {
                        headers : {
                          "Authorization" : `Bearer ${localStorage.getItem("token")}`,
                          'Accept' : 'application/json',
                        }
                      })
      
        if (response.status == 200) {
          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
      } catch (error) {
        if (error.response.status == 422) {
          alert(error.response.data.message)
        } else {
          console.info(error.response)
        }
      }
    }

  },
  mounted() {
    this.checkIsLogin()
    this.loadDetailRoom()
  },
};
</script>

<style>
#SubmitPage .breadcrumb {
  margin-left: 30px;
}

#SubmitPage #biaya {
  margin-top: 120px;
}

#SubmitPage #info .dropdown .btn {
  width: 100%;
}

#SubmitPage .btn {
  width: 100%;
}
</style>
