const axios = require("axios").default;

const webhookurl = "https://discord.com/api/webhooks/1359876910099992748/EOsqTT4Ek7sh9qB0TcFsY96aRPTJzrxAZlAivnHpzljP6uWoPz36A1JN6KfsNGNBNdLk";

axios({
  method: "post",
  url: webhookurl,
  data: {
    username: "Lionel Messi",
    // content: "Goat Pildun",
    embeds: [{
      author: {
        name: "Delivery Girl",
        url: "https://www.reddit.com/r/Pizza/",
        icon_url: "https://i.imgur.com/V8ZjaMa.jpg"
      },
      description: "Your pizza is ready!\n:timer:ETA: 10 minutes."
    }]
  }
})
.then(response => {
  console.log("Message sent successfully");
})
.catch(error => {
  console.error("Error sending message:", error);
});