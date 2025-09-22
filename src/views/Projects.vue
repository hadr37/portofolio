<template>
  <div class="projects-container">
    <!-- Judul & Deskripsi -->
    <header class="projects-header">
      <h1>My Projects</h1>
      <p>Berikut adalah beberapa project yang sudah saya buat.</p>
    </header>

    <!-- Grid Project -->
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="project-img-wrapper">
          <img :src="project.image" :alt="project.name" class="project-img" />
          <div class="overlay">
            <p class="project-desc">{{ project.description }}</p>
          </div>
        </div>
        <h3 class="project-name">{{ project.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Desain Aplikasi",
          image: "/projects1.png",
          description:
            "Desain aplikasi mobile penjualan sepatu untuk iOS & Android menggunakan Figma."
        },
        {
          name: "Website Katalog",
          image: "/projects2.png",
          description:
            "Website katalog produk skincare yang responsif dan menarik."
        },
        {
          name: "Dashboard Admin",
          image: "/projects3.png",
          description:
            "Dashboard admin untuk mengelola data pengguna dan laporan penjualan dari katalog skincare."
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Container Utama */
.projects-container {
  min-height: 100vh;
  padding: 120px 20px 60px; 
  text-align: center;
 padding-top: 120px; /* jarak dari navbar */
  color: #fff;
  font-family: Arial, sans-serif;
}

/* Header */
.projects-header {
  margin-bottom: 60px;
}

.projects-header h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #1e3a8a; 
}

.projects-header p {
  font-size: 1.1rem;
  color: #0a0a0a; /* abu kebiruan */
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid Project */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card */
.project-card {
  text-align: center;
  position: relative;
  overflow: hidden;
}

.project-img-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.4);
}

.project-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .project-img {
  transform: scale(1.08);
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.9); /* navy transparan */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 20px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.project-card:hover .overlay {
  opacity: 1;
}

.project-name {
  margin-top: 15px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e3a8a;  /* biru tua */
}
</style>
