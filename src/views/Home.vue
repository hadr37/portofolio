<script setup>
import Info from '../components/Info.vue'
</script>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      majorSkills: [
        { name: "Html", percent: 90 },
        { name: "CSS", percent: 80 },
        { name: "UI Design", percent: 90 },
        { name: "JavaScript", percent: 70 },
        { name: "WordPress", percent: 80 }
      ],
      extraSkills: [
        "Bootstrap", "Vue", "Laravel", "Figma",
        "Flutter", "Phyton", "Artificial Intelligent", "Canva",
      ]
    };
  }
};
</script>
<template>
  <div class="home-page">
    <!-- Sidebar Kiri -->
    <aside class="sidebar">
      <!-- Social Icons -->
      <div class="social-icons">
        <a href="mailto:ahmadhaidarsukoharjo@gmail.com"><i class="fas fa-envelope"></i></a>
        <a href="https://wa.me/6282331958295?text=Halo,%20saya%20mau%20bicara%20tentang%20portofolio%20Anda" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/mad.hadr?igsh=aGsyanYxeWJ2Mmpx"><i class="fab fa-instagram"></i></a>
        <a href="https://github.com/hadr37"><i class="fab fa-github"></i></a>
      </div>

      <Info /> 

      <!-- Major Skills -->
      <div class="skills">
        <h3>Major Skill</h3>
        <div class="skill" v-for="(skill, i) in majorSkills" :key="i">
          <div class="skill-header">
            <span>{{ skill.name }}</span>
            <span>{{ skill.percent }}%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" :style="{ width: skill.percent + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Extra Skills -->
      <div class="extra-skills">
        <h3>Extra Skill</h3>
        <div class="tags">
          <span v-for="(tag, i) in extraSkills" :key="i">{{ tag }}</span>
        </div>
      </div>
    </aside>

    <!-- Konten Hero -->
    <section class="hero">
      <div class="hero-image">
        <img src="/profile.png" alt="Foto Profil" />
      </div>
      <div class="hero-text">
        <h1>Ahmad Haidar</h1>
        <p>
          Programmer | Web Developer | Mobile Developer | UI/UX Designer <br />
          Bahasa pemrograman: HTML, CSS, JavaScript, PHP, Python, Java, C++, Dart <br />
          Framework: Vue.js, Laravel, Flutter
        </p>
        <a 
  href="https://wa.me/6282331958295?text=Halo,%20saya%20mau%20bicara%20tentang%20portofolio%20Anda" 
  target="_blank" 
  rel="noopener noreferrer" 
  class="cta-btn"
>
  Chat Saya ➔
</a>

      </div>
    </section>
  </div>
</template>


<style scoped>
.home-page {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: #f0f6ff; /* biru muda */
  color: #1e3a8a; /* biru tua */
  padding-top: 80px; /* biar gak ketutup navbar fixed */
  box-sizing: border-box;
}

/* Sidebar */
.sidebar {
  width: 300px;
  padding: 20px;
  background: #1e3a8a;
  color: #fff;
  border-radius: 0 20px 20px 0;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
}

.social-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}
.social-icons a {
  color: #fff;
  font-size: 18px;
  transition: transform 0.3s, color 0.3s;
}
.social-icons a:hover {
  color: #38bdf8;
  transform: scale(1.2);
}

.info p {
  font-size: 14px;
  margin: 5px 0;
}

/* Skills */
.skills h3,
.extra-skills h3 {
  margin: 15px 0;
  border-bottom: 1px solid #60a5fa;
  padding-bottom: 5px;
}
.skill {
  margin-bottom: 15px;
}
.skill-header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.progress {
  background: #e5e7eb; /* abu muda */
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar {
  background: #3b82f6; /* biru */
  height: 100%;
  transition: width 0.5s;
}
.extra-skills .tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.extra-skills .tags span {
  background: #2563eb;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
  transition: 0.3s;
}
.extra-skills .tags span:hover {
  background: #60a5fa;
  color: #111;
}

/* Hero */
.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
  text-align: center;
}
.hero-text {
  max-width: 600px;
}
.hero-text h1 {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 20px;
  color: #1e3a8a;
}
.hero-text p {
  font-size: 1.1rem;
  color: #334155;
  margin-bottom: 20px;
}
.cta-btn {
  background: #2563eb;
  color: white;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s;
}
.cta-btn:hover {
  background: #3b82f6;
  transform: scale(1.05);
}
.hero-image img {
  max-width: 300px;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: 0px 10px 25px rgba(37, 99, 235, 0.5);
}

/* Responsive */
@media (max-width: 900px) {
  .home-page {
    flex-direction: column;
    padding-top: 100px; /* lebih lega di HP */
  }
  .sidebar {
    width: 100%;
    border-radius: 0 0 20px 20px;
  }
  .hero {
    text-align: center;
  }
}
</style>
