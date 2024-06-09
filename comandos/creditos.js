const Discord = require('discord.js');

module.exports = {
  name: 'creditos',
  description: 'Muestra los usuarios que participaron en el bot',
  async execute(message, args) {
    try {

      await message.delete();

      const member1 = message.guild.members.cache.get('1070424464464040087'); 
      const member2 = message.guild.members.cache.get('934989816095981678'); 
      const member3 = message.guild.members.cache.get('534252867771564033'); 

      const embed = new Discord.MessageEmbed()
        .setTitle('`🔰` Creditos de la creación de Neshy Televisión Mod `🔰`')
        .setColor('#EB6000')
        .setDescription('`❓` Personas que ayudaron en mi programación:\n\n'
          +  '`📖`' + `- ${member1} | sahir_px -` + ' `🖥️` **(Programador)**\n\n'
          +  '`📖`' + `- ${member2} | gerardo9422 -` + ' `🤖` **(Tester del Bot)**\n\n'
          +  '`📖`' + `- ${member3} | zdaniel_ -` + ' `🤖` **(Tester del Bot)**\n\n'
          + ' `✅` *Versión del bot: V4.2*')
        .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('`Hubo un error al ejecutar el comando.`');
    }
  },
};
