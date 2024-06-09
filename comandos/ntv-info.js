const Discord = require('discord.js');
const channelID = '1192641191980834826';
const channelMention = `<#${channelID}>`;
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'ntv-info',
  description: 'Muestra una pequeña info de NTV',
  execute(message, args, client) {
    try {
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        message.delete();
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      const embed = new Discord.MessageEmbed()
        .setTitle('`📁` Sobre Neshy Television...')
        .setColor('#C700D4')
        .setDescription('`💢` En NeshyTV tenemos una enorme pasión por lo que hacemos, estamos dispuestos a '
        + 'aceptar el cambio. Tenemos la misión de ofrecer contenido y servicio de gran calidad. Nuestra gran '
        + 'visión es ser la organización líder en los medios de comunicación de San Andreas.\n\n'
        + 'Por último, pero no menos importante, nuestra misión es satisfacer las necesidades ' 
        + 'de información a nuestra audiencia, cumpliendo los estándares de calidad, creatividad y ' 
        + 'responsabilidad social. Sabemos que nuestra existencia es necesaria, por eso estamos comprometidos con nuestro público. '
        + 'Para más información sobre NeshyTV, consulta el manual ubicado en ' + channelMention + '\n\n'
        + 'Para saber más de Neshy Televisión usa: `/codigo-etica`')
        .setAuthor(client.user.username, client.user.avatarURL())
        .setImage('https://github.com/jtavera17/img-for-discord091523/blob/main/barra1.gif?raw=true')
        .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
