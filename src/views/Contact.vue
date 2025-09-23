<template>
  <div class="contact-page">
    <div class="contact-header">
      <h2>Kontak Saya</h2>
      <p>
        Beberapa cara untuk menghubungi saya. 
        Silakan kirim pesan melalui formulir di bawah ini 
        atau gunakan informasi kontak yang tersedia.
      </p>
    </div>

    <div class="contact-container">
      <!-- Form -->
      <div class="contact-form">
        <h3>Pesan ke Email saya</h3>
        <form @submit.prevent="sendMessage">
          <div class="form-row">
            <input type="text" placeholder="Name" v-model="form.name" />
            <input type="email" placeholder="Email" v-model="form.email" />
          </div>
          <input type="text" placeholder="Subject" v-model="form.subject" />
          <textarea rows="5" placeholder="Messages" v-model="form.message"></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>

      <!-- Info -->
      <div class="contact-info">
        <div class="info-box">
          <div class="icon">📍</div>
          <h4>Address</h4>
          <p><b>Country:</b> Indonesia</p>
          <p><b>Prov:</b> Central Java</p>
          <p><b>City:</b> Surakarta</p>
        </div>

        <div class="info-box">
          <div class="icon">✉️</div>
          <h4>Contact</h4>
          <p><b>Email:</b> ahmadhaidarsukoharjo@gmail.com</p>
          <p><b>Instagram:</b> @ahaa.dar</p>
          <p><b>Tiktok:</b> @Hadr</p>
        </div>

        <div class="info-box">
          <div class="icon">📞</div>
          <h4>Phone</h4>
          <p><b>Support:</b> 57572</p>
          <p><b>Personal:</b> +62  856 587 235</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      alert(
        `Message sent!\n\nFrom: ${this.form.name} (${this.form.email})\nSubject: ${this.form.subject}\nMessage: ${this.form.message}`
      );
      this.form = { name: "", email: "", subject: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contact-page {
 padding: 120px 20px 50px; /* tambah padding-top untuk navbar */
  background: #f8f9fa; /* abu muda agar kontras */
  color: #333;
  padding: 50px 20px;
  min-height: 100vh;
}

/* Header */
.contact-header {
  padding-top: 95px;
  text-align: center;
  margin-bottom: 40px;
}
.contact-header h2 {
  font-size: 28px;
  font-weight: bold;
  color: #1e3a8a;
}
.contact-header p {
  color: #000000;
  max-width: 600px;
  margin: 10px auto 0;
  line-height: 1.6;
}

/* Container */
.contact-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  max-width: 1100px;
  margin: auto;
}

/* Form */
.contact-form {
  background: #fff; /* putih */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.contact-form h3 {
  margin-bottom: 20px;
  color: #222;
}
.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #333;
  outline: none;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 5px rgba(255,115,0,0.3);
}
.contact-form button {
  background: #60a5fa;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
}
.contact-form button:hover {
  background: #60a5fa;
}

/* Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.info-box {
  background: #fff; /* putih */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.info-box .icon {
  background: #60a5fa;
  color: #fff;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 10px;
  font-size: 16px;
}
.info-box h4 {
  margin-bottom: 8px;
  color: #222;
}
.info-box p {
  margin: 4px 0;
  color: #555;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style>

