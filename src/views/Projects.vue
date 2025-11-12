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
  mounted() {
    // Scroll ke atas saat halaman dimuat
    window.scrollTo(0, 0);
  },
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
        },
        {
          name: "Company Profile",
          image: "/projects5.png",
          description:
            "Website Company Profile untuk menampilkan informasi perusahaan secara profesional."
        },
        {
          name: "Dashboard Admin",
          image: "/projects4.png",
          description:
            "Dashboard admin untuk mengelola data dari inputan User di Company Profile."
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
  padding: 100px 40px 60px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Header */
.projects-header {
  margin-bottom: 60px;
  animation: slideDown 0.6s ease;
}

.projects-header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #1e3a8a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.projects-header p {
  font-size: 1.1rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid Project */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}

/* Card */
.project-card {
  text-align: center;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

.project-card:nth-child(1) { animation-delay: 0.1s; }
.project-card:nth-child(2) { animation-delay: 0.2s; }
.project-card:nth-child(3) { animation-delay: 0.3s; }
.project-card:nth-child(4) { animation-delay: 0.4s; }
.project-card:nth-child(5) { animation-delay: 0.5s; }

.project-img-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  aspect-ratio: 16 / 10;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 58, 138, 0.95);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 20px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.project-card:hover .overlay {
  opacity: 1;
}

.project-desc {
  margin: 0;
  font-weight: 500;
}

.project-name {
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e3a8a;
}

/* Animasi */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .projects-container {
    padding: 70px 15px 50px;
  }

  .projects-header h1 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
}
</style>
