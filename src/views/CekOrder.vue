<template>
  <div id="CekOrder">
    <!-- Navbar -->
    <NavComp />
    <!-- akhir navbar -->

    <!-- Pesanan -->
    <div class="container">
      <h2><b>Pesananmu</b></h2>
      <div class="row">
        <div class="col">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-diproses-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-diproses"
                type="button"
                role="tab"
                aria-controls="pills-diproses"
                aria-selected="true"
              >
                Diproses
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-selesai-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-selesai"
                type="button"
                role="tab"
                aria-controls="pills-selesai"
                aria-selected="false"
              >
                Selesai
              </button>
            </li>
          </ul>

          <div class="tab-content" id="pills-tabContent">
            <!-- proses -->
            <div
              class="tab-pane fade show active"
              id="pills-diproses"
              role="tabpanel"
              aria-labelledby="pills-diproses-tab"
              tabindex="0"
            >
              <div class="row">

                <div class="col-lg-6" v-for="list in listTransaksi.data" :key="list.id">
                  <div class="card mb-5 mt-5" style="max-width: 100%">
                    <div class="row g-0">
                      <div class="col-md-6">
                        <img
                          :src="'http://127.0.0.1:8000/room/'+list.room.room_photo"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title"><b>{{ list.room.room_name }}</b></h5>
                          <div class="row mt-3">
                            <div class="col-lg-6">
                              <h6><b>Check In</b></h6>
                              <p><b>{{ list.check_in }}</b></p>
                            </div>
                            <div class="col-lg-6">
                              <h6><b>Check Out</b></h6>
                              <p><b>{{ list.check_out }}</b></p>
                            </div>
                          </div>

                          <div class="row mt-3">
                            <div class="col-lg-6">
                              <h5><b>Biaya</b></h5>
                              <h6><b>Rp.{{ list.total }}</b></h6>
                            </div>
                            <div class="col-lg-6">
                              <h5><b>Status</b></h5>
                              <p style="color: #FFCB8F;"><b>{{ list.status_name }}</b></p>
                            </div>
                          </div>
                            <!-- kondisi jika user belum upload bukti -->
                            <div v-if="list.status == 2">
                                <div class="mb-3">
                                  <label for="exampleInputPassword1" class="form-label"
                                    ><b>Upload Bukti Bayar</b></label
                                  >
                                  <input
                                    type="file"
                                    class="form-control"
                                    id="upload_bukti"
                                    @change="uploadBukti"
                                    ref="file"
                                  />
                                </div>

                                <Button type="button" @click="submitBukti(list.id)" class="btn btn-primary">Submit</Button>
                            </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- selesai -->
            <div
              class="tab-pane fade"
              id="pills-selesai"
              role="tabpanel"
              aria-labelledby="pills-selesai-tab"
              tabindex="0"
            >
            <div class="row">
                <div class="col-lg-6">
                  <div class="card mb-5 mt-5" style="max-width: 100%">
                    <div class="row g-0">
                      <div class="col-md-6">
                        <img
                          src="../assets/kamar1.png"
                          class="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title"><b>Deluxe Room</b></h5>
                          <div class="row mt-3">
                            <div class="col-lg-6">
                              <h6><b>Check In</b></h6>
                              <p><b>26/03/2023</b></p>
                            </div>
                            <div class="col-lg-6">
                              <h6><b>Check Out</b></h6>
                              <p><b>27/03/2023</b></p>
                            </div>
                          </div>

                          <div class="row mt-3">
                            <div class="col-lg-6">
                              <h5><b>Biaya</b></h5>
                              <h6><b>Rp.200.000</b></h6>
                            </div>
                            <div class="col-lg-6">
                              <h5><b>Status</b></h5>
                              <p style="color: green;"><b>Selesai</b></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Akhir pesanan -->

    <!-- Footer -->
    <FooterComp />
    <!-- Akhir footer  -->
  </div>
</template>

<script>
import NavComp from "@/components/NavComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import axios from "axios";
import {ref} from 'vue'

export default {
  name: "CekOrder",
  components: {
    NavComp,
    FooterComp,
  },
  data() {
    return {
      listTransaksi : {},
      image : ref("")
    }
  },
  methods: {
    
    async getDataTransaksi() {
      let response = await axios.get(`http://127.0.0.1:8000/api/history-transaksi`, {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`,
          'Accept' : 'application/json'
        }
      });
      
      this.listTransaksi = response.data

    },


    uploadBukti(e) {
      this.image = e.target.files[0]
    },

    async submitBukti(id) {
      console.info(this.image)
      let formData = new FormData()

      formData.append('bukti_bayar', this.image)
      formData.append('transaksi_id', id)

      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/konfirmasi-bayar`, formData, {
                  headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                    'Accept' : 'application/json'
                  }
                })
      
        alert(response.data.message)
      } catch (error) {
        console.info(error)
      }

    }

  },
  mounted() {
    this.getDataTransaksi()
  }
};
</script>

<style>
#CekOrder h2 {
    margin-top: 120px;
    margin-bottom: 20px;
}

</style>
