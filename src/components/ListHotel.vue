<template>
  <div id="ListHotel">
    <div class="row" >
      <div class="col-lg-3" v-for="list in listHotels.data" :key="list.id">
        <div class="card" style="width: 100%">
          <img :src="list.foto_hotel" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ list.nama_hotel }}</h5>
            <p class="card-text">{{ list.alamat_hotel }}</p>
            <h4><b>{{ list.harga_hotel }}</b><span>/malam</span></h4>
            <router-link :to="'/DetailPage/'+list.id" class="btn btn-primary">Lihat Detail</router-link>
          </div>
        </div>
      </div>

      <!-- <div class="col-lg-3">
        <div class="card" style="width: 100%">
          <img src="../assets/hotel2.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Arista Hotel Palembang</h5>
            <p class="card-text">Jl.Kapten Rivai, Palembang</p>
            <h4><b>200k</b><span>/malam</span></h4>
            <router-link to="/DetailPage" class="btn btn-primary">Lihat Detail</router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card" style="width: 100%">
          <img src="../assets/hotel3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The ALTS Hotel Palembang</h5>
            <p class="card-text">Jl.Rajawali, Palembang</p>
            <h4><b>200k</b><span>/malam</span></h4>
            <router-link to="/DetailPage" class="btn btn-primary">Lihat Detail</router-link>
          </div>
        </div>
      </div>

      <div class="col-lg-3">
        <div class="card" style="width: 100%">
          <img src="../assets/hotel4.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Beston Hotel Palembang</h5>
            <p class="card-text">Jl.Jendral Sudirman, Palembang</p>
            <h4><b>200k</b><span>/malam</span></h4>
            <router-link to="/DetailPage" class="btn btn-primary">Lihat Detail</router-link>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ListHotel",

  //set variable
  data() {
    return {
      listHotels : [] ,//array,
      response : {} //object
    }
  },

  //sebuah tempat untuk membuat fungsi dalam melakukan pemanggila data atau pengiriman data
  methods: {

    setData(dataHotel) {
      this.listHotels = dataHotel;
    },
    
    async listHotel() {
      try {
          this.response = await axios.get('http://127.0.0.1:8000/api/list-hotel'); //get api ke backend
          console.info(this.response.data);

          this.setData(this.response.data);

      } catch (error) {
        console.info(error);
      }
    }

  },

//sebuah proses yang dilakukan ketika awal halaman di buka
  mounted() {
    this.listHotel();
  },

};
</script>

<style>
#listhotel h4 {
    color: #0d6cf9;
    margin-top: -10px;
}
#listhotel span {
    color: black;
    font-size: 16px;
}
#listhotel .btn {
    width: 100%;
}
</style>
