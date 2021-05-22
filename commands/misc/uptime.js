  const Discord = require('discord.js')
  module.exports = {
  name: "uptime",
  aliases: [],
  usage: "",
  description: "",
  run: async (client, message, args) => {
  if(message.author.bot) return;
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;
  
  let uptime = new Discord.MessageEmbed()
  .setTitle(`⏰ Uptime of ${client.user.username}`)
  .setColor("GREEN")
  .addField("**Days:**", `${days}`)
  .addField("**Hours:**" , `${hours}`) 
  .addField("**Minutes:**", `${minutes}`) 
  .addField("**Seconds:**", `${seconds}`)
  .setTimestamp()    
    message.channel.send(uptime); //sends the embed in the channel
  }
}

  
