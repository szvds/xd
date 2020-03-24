const discord = require("discord.js")
const client = new discord.client;

client.on("message", message => ( 
  (message.content == "ping")
  message.reply("pong");
  )
});

client.login("NjkyMTQ0ODcwODgxNzU1MTg3.XnqQZA.fDnX099XOlMcqaM4K6BvBxKW3aI");