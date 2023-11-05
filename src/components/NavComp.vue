<template>
  <div id="NavComp">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../assets/logo.png" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/BookingPage" class="nav-link"
              >Booking</router-link
            >
            <router-link to="/LokasiPage" class="nav-link">Lokasi</router-link>
            <router-link to="/CekOrder" class="nav-link">Cek Order</router-link>
          </div>

          <div class="profile">
            <h6>Hai, {{ nameMember }}</h6>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/ic-profile.png" alt="" />
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" @click="logoutButton" href="#">Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navbar akhir -->
  </div>
</template>

<script>
export default {
  name: "NavComp",
  data() {
    return {
      nameMember : localStorage.getItem('nama')
    }
  },
  methods: {
    logoutButton() {
      localStorage.removeItem('token')
      localStorage.removeItem('nama')
      localStorage.removeItem('role_name')
      localStorage.removeItem('user_id')

      window.location.reload()
      alert("Anda berhasil Log Out")
    }
  },
};
</script>

<style>
#NavComp img {
  width: 120px;
}
#NavComp .profile {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
}
#NavComp .profile img {
  width: 50px;
}
#NavComp .profile .dropdown .btn {
  border: none;
}

#NavComp h6 {
  margin-right: 20px;
}

/* mobile */
@media (max-width: 992px) {
  #NavComp .navbar {
    text-align: center;
  }
  #NavComp img {
    width: 120px;
  }
  #NavComp .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
  #NavComp .profile img {
    width: 50px;
  }
  #NavComp .profile .dropdown .btn {
    border: none;
  }

  #NavComp h6 {
    margin-right: 20px;
  }
}
</style>
