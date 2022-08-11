const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
   let helpEmbed = new MessageEmbed()
      .setTitle("**Here are __AzGiveaway__ commands**")
      .setDescription("**Command Parameters: <> is strict & [] is optional**")
      .addField(
        "• **ADMIN**",
        "```ban, unban, kick```"
      )
      .addField(
        "• **GIVEAWAY**",
        "```start , end , reroll```"
      )
      .addField(
        "• **UTILITY**",
        "```nuke```"
      )
      .addField(
        "• **INFO**",
        "```help, invite, ping, uptime,``` "
      ) 
      .addField(
        "• **OWNER**",
        "```eval, stats```"
      )
      .addField('Important Links ','**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=1006662645149089823&permissions=8&scope=bot)** **• [Support](https://discord.gg/aqkd2GNWM8)**')
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
      `Az Giveaway`,
      client.user.displayAvatarURL(),
      message.delete()
    );

      message.channel.send(helpEmbed)

  },
};