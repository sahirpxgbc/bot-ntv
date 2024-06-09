const Discord = require('discord.js');

module.exports = {
  name: 'prueba',
  description: 'Envía un mensaje embed de ejemplo',
  execute(message, args) {
    try {
      const tienePermiso = message.member.hasPermission('ADMINISTRATOR');
      
      if (!tienePermiso) {
        message.delete(); 
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      const embed = new Discord.MessageEmbed()
        .setTitle('Comando de mensaje embed')
        .setColor(0xEAB607)
        .setDescription('Command embed. Embed basico, para pruebas y modificaciones. ')
        .addField('Name Server', message.guild.name, true)
        .addField('Users', message.guild.memberCount, true)
        .setThumbnail('https://img.huffingtonpost.es/uploads/2022/12/07/6390d93f25f77.gif')
        .setImage('https://i.gifer.com/PlI.gif')
        .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();
        
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
