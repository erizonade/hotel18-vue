<template>
  <div id="RegistPage">
    <!-- Navbar -->
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/logo.png" alt="" />
        </a>
      </div>
    </nav>
    <!-- akhir Navbar -->

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>
            Buat akun untuk <br />
            temukan hotel impianmu!
          </h1>
          <p>Temukan hotel impianmu hanya disini.</p>
        </div>
      </div>

      <!-- Form Daftar -->
      <form @submit.prevent="submitRegister">
          <div class="row mt-5">
            <div class="col-lg-3">
                <label for=""><b>Nama Lengkap</b></label>
              <input
                type="text"
                class="form-control"
                placeholder="Nama Lengkap"
                aria-label="Nama Lengkap"
                v-model="namaLengkap"
              />
            </div>
            <div class="col-lg-3">
                <label for=""><b>Nomor Telepon</b></label>
              <input
                type="text"
                class="form-control"
                placeholder="Nomor Telepon"
                aria-label="Nomor Telepon"
                v-model="nomorTelepon"
              />
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-lg-3">
                <label for=""><b>Alamat Email</b></label>
              <input
                type="text"
                class="form-control"
                placeholder="Alamat Email"
                aria-label="Alamat Email"
                v-model="email"
              />
            </div>
            <div class="col-lg-3">
                <label for=""><b>Buat Password</b></label>
              <input
                type="password"
                class="form-control"
                placeholder="Buat Password"
                aria-label="Buat Password"
                v-model="password"
              />
            </div>
          </div>
          <Button type="submit" class="btn btn-primary">Daftar</Button>
      </form>
      <!-- <router-link  to="/LPlogged"><Button class="btn btn-primary">Daftar</Button></router-link> -->
      <p>Sudah Punya Akun? <router-link to="/LoginPage">Masuk</router-link></p>
      <!-- akhir form daftar -->
    </div>

    <!-- Footer -->
    <FooterComp/>
    <!-- Footer -->
  </div>
</template>

<script>
import axios from "axios";
import FooterComp from '@/components/FooterComp.vue'; 

export default {
  name: "RegistPage",
  components : {
    FooterComp
  },
  data() {
    return {
      namaLengkap: "",
      nomorTelepon: "",
      email:"",
      password:""
    }
  },
  methods: {
    async submitRegister() {
        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/register`,{
            "name" : this.namaLengkap,
            "email" : this.email,
            "password" : this.password 
          })

          console.info(response)
          console.info(response.data)
          if (response.status == 200) {
            alert(response.data.message)
            this.$router.push({path : '/LoginPage'})
          }
        } catch (error) {
          console.info(error)
        }
    }
  },
};
</script>

<style>
#RegistPage .navbar-brand img {
    width: 120px;
}
#RegistPage h1 {
    font-weight: 600;
    margin-top: 120px;
}
#RegistPage .btn {
    width: 150px;
    margin-top: 30px;
    margin-bottom: 80px;
}

/* mobile */
</style>
