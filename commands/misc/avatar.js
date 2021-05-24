const discord = require('discord.js')
module.exports = {
name: "avatar",
aliases: [],
usage: "",
description: "",
run: async (client, message, args) => {
let user =  message.mentions.users.first() || message.author

let embed = new discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar!`)
.setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
.setColor("GREEN");
message.channel.send(embed);
}
};
  
  
