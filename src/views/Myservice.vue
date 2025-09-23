<template>
  <div class="services-container">
    <div class="header">
      <h1>My Services</h1>
      <p>
        Saya menyediakan jasa Desain grafis, pengembangan web dan mobile aplikasi,
        mulai dari front-end, back-end, fullstack, hingga integrasi CMS.
        Saya juga mampu mengimplementasikan teknologi Artificial Intelligence
        untuk membuat aplikasi yang lebih cerdas dan adaptif sesuai kebutuhan bisnis Anda.
      </p>
    </div>

    <div class="services-grid">
      <!-- Web Development Card -->
      <div 
        class="service-card" 
        @mouseenter="hoverCard1 = true" 
        @mouseleave="hoverCard1 = false" 
        :class="{ 'hovered': hoverCard1 }"
      >
        <div class="service-icon">&lt;/&gt;</div>
        <h3>Web Development</h3>
        <ul class="service-list" v-if="!hoverCard1">
          <li>→ Frontend Development</li>
          <li>→ Backend Development</li>
          <li>→ Fullstack Development</li>
        </ul>
        <div class="hover-content" v-if="hoverCard1">
          <p>
            Saya bisa menggunakan Wordpress,Laravel dan Vue.js untuk membuat web 
            dan mobile aplikasi yang responsif dan mudah digunakan.
          </p>
          <button class="order-btn">ORDER NOW →</button>
        </div>
      </div>

      <!-- Application Card -->
      <div 
        class="service-card" 
        @mouseenter="hoverCard2 = true" 
        @mouseleave="hoverCard2 = false" 
        :class="{ 'hovered': hoverCard2 }"
      >
        <div class="service-icon">📱</div>
        <h3>Application</h3>
        <ul class="service-list" v-if="!hoverCard2">
          <li>→ Mobile Aplikasi</li>
          <li>→ Web Aplikasi</li>
          <li>→ Desktop Aplikasi</li>
        </ul>
        <div class="hover-content" v-if="hoverCard2">
          <p>
            Saya bisa menggunakan Laravel dan Vue.js untuk membuat web dan
            mobile aplikasi yang responsif dan mudah digunakan.
          </p>
          <button class="order-btn">ORDER NOW →</button>
        </div>
      </div>

      <!-- Artificial Intelligence Card -->
      <div 
        class="service-card" 
        @mouseenter="hoverCard3 = true" 
        @mouseleave="hoverCard3 = false" 
        :class="{ 'hovered': hoverCard3 }"
      >
        <div class="service-icon">🤖</div>
        <h3>Artificial Intelligence</h3>
        <ul class="service-list" v-if="!hoverCard3">
          <li>→ Membantu Semua Pekerjaan</li>
          <li>→ Office Automation</li>
          <li>→ Desain Grafis & Lainnya</li>
        </ul>
        <div class="hover-content" v-if="hoverCard3">
          <p>
            Saya bisa menggunakan teknologi Artificial Intelligence untuk membantu pekerjaan
            seperti menulis, desain grafis, coding, dan lain-lain.
          </p>
          <button class="order-btn">ORDER NOW →</button>
        </div>
      </div>

      <!-- Graphic Design Card -->
      <div 
        class="service-card" 
        @mouseenter="hoverCard4 = true" 
        @mouseleave="hoverCard4 = false" 
        :class="{ 'hovered': hoverCard4 }"
      >
        <div class="service-icon">🎨</div>
        <h3>Desain Grafis</h3>
        <ul class="service-list" v-if="!hoverCard4">
          <li>→ Figma</li>
          <li>→ Canva</li>
        </ul>
        <div class="hover-content" v-if="hoverCard4">
          <p>
            Saya bisa menggunakan Figma dan Canva 
            untuk membuat desain grafis yang menarik.
          </p>
          <button class="order-btn">ORDER NOW →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCards',
  data() {
    return {
      hoverCard1: false,
      hoverCard2: false,
      hoverCard3: false,
      hoverCard4: false,
    };
  },
};
</script>

<style scoped>
.services-container {
  min-height: 100vh;           /* full tinggi layar */
  background: #ffffff;          /* full putih */
  color: #1e293b;               /* teks gelap untuk kontras */
  padding: 120px 40px 80px;     /* jarak dari navbar */
  font-family: 'Arial', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 80px;
}

.header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #1e3a8a; /* kuning emas */
}

.header p {
  font-size: 1.1rem;
  color: #000000; /* abu kebiruan */
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  min-height: 380px;
  padding: 30px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.25);
}

.service-card.hovered {
  background: linear-gradient(135deg, #1e3a8a, #1e3a8a);
  color: #fff;
  justify-content: center;
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1e3a8a;
}

.service-card.hovered .service-icon {
  display: none;
}

h3 {
  font-size: 1.6rem;
  margin-bottom: 20px;
  font-weight: 600;
  color: #222;
}

.service-card.hovered h3 {
  color: #fff;
}

.service-list {
  list-style: none;
  margin-top: 15px;
}

.service-list li {
  padding: 10px 0;
  font-size: 1rem;
  font-weight: 500;
  color: #555;
}

.hover-content {
  animation: fadeIn 0.3s ease;
  padding: 0 15px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.hover-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 25px;
}

.order-btn {
  background: #1e293b;
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.order-btn:hover {
  background: #0f172a;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 900px) {
  .header h1 {
    font-size: 2.4rem;
  }
  .services-container {
    padding: 100px 20px 60px;
  }
}
</style>
