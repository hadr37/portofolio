<template>
  <div class="app">
<!-- Navbar -->
    <header class="navbar">
      <div class="navbar-left">
        <img src="/profile.png" alt="Profile" class="profile-img" />
        <router-link to="/" class="brand-text">Portofolio Ahmad Haidar</router-link>
      </div>

      <!-- Tombol hamburger (muncul di mobile) -->
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Menu kanan -->
      <nav class="navbar-right" :class="{ active: isMenuOpen }">
        <ul class="menu">
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/About">About</router-link></li>
          <li><router-link to="/Myservice">My Service</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
/* Reset & global */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f0f6ff; /* biru muda lembut */
  color: #1e3a8a;      /* biru tua */
}

/* Wrapper utama */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e3a8a;   /* biru tua */
  padding: 15px 30px;
  width: 100%;           
  position: fixed;        /* nempel di atas */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px; /* jarak gambar dengan teks */
}

.navbar-left .profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
}

.navbar-left .brand-text {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.navbar-left .brand-text:hover {
  color: #93c5fd;
}

/* Menu kanan */
.navbar-right .menu {
  display: flex;
  gap: 20px;
  list-style: none;
}

.navbar-right .menu a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
  padding-bottom: 3px;
}

.navbar-right .menu a:hover {
  color: #93c5fd; /* biru muda terang */
}

/* Highlight link aktif */
.navbar-right .menu .router-link-exact-active {
  color: #93c5fd;      /* biru muda */
  font-weight: bold;
  border-bottom: 2px solid #93c5fd;
}
/* Tombol hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
}

/* Responsive untuk mobile */
@media (max-width: 768px) {
  .navbar-right {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background: #1e3a8a;
    flex-direction: column;
    transform: translateY(-200%);
    transition: transform 0.3s ease;
  }

  .navbar-right.active {
    transform: translateY(0);
  }

  .navbar-right .menu {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 20px 0;
  }

  .hamburger {
    display: flex;
  }
}

</style>
