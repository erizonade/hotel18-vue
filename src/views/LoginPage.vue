<template>
  <div id="LoginPage">
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
          <h1>Selamat Datang</h1>
          <p>Temukan hotel impianmu hanya disini.</p>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-6">
          <!-- form masuk -->
          <form @submit.prevent="submitLogin">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                ><b>Email addres</b></label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                ><b>Password</b></label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
              <router-link to="/">Lupa Password?</router-link>
            </div>

            <Button type="submit" class="btn btn-primary">Masuk</Button>
            <!-- <router-link  to="/LPlogged"><Button class="btn btn-primary">Masuk</Button></router-link> -->
            <p>Belum Punya Akun? <router-link to="/RegistPage">Daftar</router-link></p>
          </form>
          <!-- akhir form masuk -->
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->
  <FooterComp/>
    <!-- Akhir Footer -->
</template>

<script>
import axios from "axios";
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: "LoginPage",
  components : {
    FooterComp
  },
  data() {
    return {
      email : "",
      password : ""
    }
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/login`, {
          email : this.email,
          password : this.password
        })

        if (response.status == 200) {
          console.info(response.data.data)
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('user_id', response.data.data.user.id)
          localStorage.setItem('nama', response.data.data.user.name)
          localStorage.setItem('role_name', response.data.data.user.role_name)

          alert(response.data.message)
          this.$router.push({path : '/'})

        } else {
          console.info(response)
          alert(response.data.message)
        }
      } catch (error) {
        console.info(error)
      }
    }
  },
};
</script>

<style>
#LoginPage .navbar-brand img {
    width: 120px;
}
#LoginPage h1 {
    font-weight: 600;
    margin-top: 120px;
}

#LoginPage .btn {
    width: 150px;
    margin-top: 30px;
    margin-bottom: 80px;
}
</style>
