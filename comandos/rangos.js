const Discord = require('discord.js');
const channelID = '1192641191980834826';
const channelMention = `<#${channelID}>`;

module.exports = {
  name: 'rangos',
  description: 'Muestra los rangos de Neshy Televisión.',
  execute(message) {
    try {
      const tienePermiso = message.member.hasPermission('ADMINISTRATOR');
      
      if (!tienePermiso) {
        message.delete();
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      // Lista de roles y sus IDs
      const rolesList = [
        { name: '`🔸` Practicante: ', id: '1198680274976911410' },
        { name: '`🔸` Periodista: ', id: '1118145533274505296' },
        { name: '`🔸` Escritor: ', id: '1041737503595561003' },
        { name: '`🔸` Reportero: ', id: '1041737573623660596' },
        { name: '`🔸` Locutor: ', id: '1041737604393074829' },
        { name: '`🔸` Panelista: ', id: '1041737686697902152' },
        { name: '`🔸` Manager: ', id: '1041737807632273469' },
        { name: '`🔸` Sub Director: ', id: '1199522290631725107' },
        { name: '`🔸` Director: ', id: '1041737829639794748' },
      ];

      const embed = new Discord.MessageEmbed()
        .setTitle('Rangos de Neshy Televisión')
        .setColor('#070BFA') 
        .setDescription('En NeshyTV poseemos 9 rangos. Aquí la lista sobre ellos: [...]\n\n' 
        + 'Si quieres conocer la función de cada rango, puedes ver el foro, manual de NTV: ' + channelMention);

      rolesList.forEach((role) => {
        embed.addField(role.name, `<@&${role.id}>\n\n`, true);
      });

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
