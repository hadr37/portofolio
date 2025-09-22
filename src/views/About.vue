<template>
  <div class="about">

    <!-- Education Section -->
    <section class="section">
      <h2 class="section-title">Education</h2>
      <p class="section-subtitle">
       Belajar pemrograman secara melalui kursus, magang maupun di lembaga Universitas di Indonesia
      </p>

      <div class="card">
        <div class="card-left">
          <h3>Politeknik Indonusa Surakarta</h3>
          <p>Mahasiswa</p>
          <span class="date">September 2023 - September 2027</span>
        </div>
        <div class="card-right">
          <h3>Teknologi Rekayasa Perangkat Lunak</h3>
          <p>
           Saya adalah mahasiswa Prodi Teknologi Rekayasa Perangkat Lunak
            yang memiliki kemampuan dalam merancang, mengembangkan, dan menguji perangkat lunak secara profesional. 
            Saya berpengalaman menguasai bahasa pemrograman seperti PHP, JavaScript, dan framework Laravel,
            serta memiliki pemahaman kuat tentang siklus hidup pengembangan software dan metode agile. 
            Saya terbiasa mengerjakan proyek pengembangan aplikasi web dan mobile yang efektif, efisien, dan sesuai kebutuhan pengguna.
            Saya terus berkomitmen untuk belajar teknologi terbaru dan meningkatkan kemampuan dalam menciptakan solusi digital inovatif.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-left">
          <h3>Pelatihan Pemrograman Komputer</h3>
          <p>Peserta Bersertifikat</p>
          <span class="date">Februari 2024 - Mei 2024</span>
        </div>
        <div class="card-right">
          <h3>Certificate Pemrograman Komputer</h3>
          <p>
            Saya adalah mahasiswa Prodi Teknologi Rekayasa Perangkat Lunak 
            dengan sertifikat pelatihan pemrograman komputer. 
            Saya memiliki kompetensi dalam berbagai bahasa pemrograman dan framework,
            serta pengalaman praktis dalam pengembangan aplikasi berbasis web. 
            Melalui pelatihan tersebut, saya memperkuat kemampuan teknis sekaligus meningkatkan pemahaman tentang
            praktik terbaik dalam pemrograman dan pengembangan software secara profesional.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="section">
      <h2 class="section-title">Pengalaman</h2>
      <p class="section-subtitle">
        Pengalaman di bidang IT
      </p>

      <div class="card">
        <div class="card-left">
          <h3>Dua Naga Corporation</h3>
          <p>Magang</p>
          <span class="date">Agustus 2025 - Oktober 2025</span>
        </div>
        <div class="card-right">
          <h3>Web Designer</h3>
          <p>
           Saya mahasiswa Prodi Teknologi Rekayasa Perangkat Lunak 
           yang berpengalaman magang di Dua Naga Kosmetindo sebagai IT. 
           Selama magang, saya mengembangkan aplikasi web menggunakan Laravel dan Vue.js
            untuk mendukung operasional bisnis. 
            Pengalaman ini memperkuat kemampuan saya dalam membangun solusi aplikasi 
            yang responsif dan efisien, serta kerja sama dalam tim pengembangan software 
            di lingkungan industri.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about {
  background: #f0f6ff; /* biru muda lembut */
  color: #1e3a8a;      /* biru tua */
  padding: 3rem 2rem;
  padding-top: 120px; /* jarak dari navbar */
  min-height: 100vh;
}

/* Section */
.section {
  margin-bottom: 4rem;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e3a8a; /* biru tua */
}

.section-subtitle {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #334155; /* abu kebiruan */
}

/* Card */
.card {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* biar kiri & kanan sama tinggi */
  gap: 2rem;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.card-left h3,
.card-right h3 {
  margin: 0;
  font-weight: 600;
  color: #1e3a8a;
  text-align: left; /* pastikan isi rata kiri */
}

.card-left p {
  margin: 0.2rem 0;
  color: #475569; /* abu kebiruan */
}
.card-left {
  min-width: 250px;
  border-right: 2px solid #e2e8f0; /* garis pembatas abu kebiruan */
  padding-right: 1.5rem;

  display: flex;               /* aktifkan flexbox */
  flex-direction: column;      /* konten tersusun vertikal */
  justify-content: center;     /* rata tengah vertical */
  align-items: center;         /* rata tengah horizontal */
  text-align: center;          /* teks di dalam rata tengah */
}

.date {
  display: inline-block;
  background: #2563eb; /* biru medium */
  color: #fff;
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.card-right p {
  color: #475569;
  margin-top: 0.5rem;
  line-height: 1.6;
  text-align: left;
}
</style>
