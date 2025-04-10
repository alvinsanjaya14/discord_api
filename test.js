const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Discord webhook URL
const webhookUrl = "https://discord.com/api/webhooks/1359876910099992748/EOsqTT4Ek7sh9qB0TcFsY96aRPTJzrxAZlAivnHpzljP6uWoPz36A1JN6KfsNGNBNdLk";

// Middleware untuk parsing JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route utama
app.get('/', (req, res) => {
  res.send('Server Discord Webhook berjalan!');
});

// Endpoint untuk mengirim pesan ke Discord
app.post('/send-message', async (req, res) => {
  try {
    // Mengambil data dari request
    const { username, content, embedTitle, embedDescription } = req.body;
    
    // Menyiapkan data untuk webhook Discord
    const webhookData = {
      username: username || "Lionel Messi",
      content: content || "Goat Pildun",
      embeds: [{
        title: embedTitle || "Pesan Baru",
        author: {
          name: "Delivery Girl",
          url: "https://www.reddit.com/r/Pizza/",
          icon_url: "https://i.imgur.com/V8ZjaMa.jpg"
        },
        description: embedDescription || "Your pizza is ready!\n:timer:ETA: 10 minutes."
      }]
    };
    
    // Mengirim pesan ke Discord
    await axios.post(webhookUrl, webhookData);
    
    // Mengirim respons sukses
    res.status(200).json({ success: true, message: "Pesan berhasil dikirim ke Discord" });
  } catch (error) {
    console.error("Error saat mengirim webhook:", error);
    res.status(500).json({ success: false, message: "Gagal mengirim pesan", error: error.message });
  }
});

// Memulai server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});