const Discord = require('discord.js');
const channelID = '1192989658741756025';
const channelMention = `<#${channelID}>`;
const channelID_1 = '1049315959900475473';
const channelMention_1 = `<#${channelID_1}>`;
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'ayuda',
  description: 'Muestra los comandos actuales del servidor.',
  async execute(message, args, client) {
    try {
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        return message.reply('No tienes permiso para usar este comando.');
      }

      await message.delete();

      const attachment = message.attachments.first();
      const imageUrl = attachment ? attachment.url : null;

      const embed = new Discord.MessageEmbed()
        .setTitle
        (
          '`❓` Comandos disponibles... `❓`'
        )
        .setColor('#40D400')
        .setDescription
        (
          '`🗞️` Estos son algunos de mis comandos disponibles, si tienes algún aporte'
          + ' de algún nuevo comando, recuérdalo mencionarlo en: ' + channelMention + '\n\n'
          + ' ------------------\n\n'
          + ' `✅` `/ayuda`: Utilizado para ver los comandos actuales, ¡Ya lo estás utilizando!\n\n'
          + ' `✅` `/ayuda-2`: Si deseas utilizar más comandos utiliza este.\n\n'
          + ' `✅` `/ntv-info`: Muestra una breve descripción de NeshyTV.\n\n'
          + ' `✅` `/rangos`: Te muestra los rangos actuales de la facción.\n\n'
          + ' `✅` `/creditos`: Muestra las personas que ayudaron en la creacion del bot.\n\n'
          + ' `✅` `/entrada`: Los miembros podrán usar este comando cuando quieran entrar en servicio IC en el canal:' + channelMention_1 + '\n\n'
          + ' `✅` `/salida`: Los miembros podrán usar este comando cuando quieran salir de servicio IC en el canal:' + channelMention_1 + '\n\n'
          + ' ------------------\n\n'
          + '`🔴` Estoy en la versión V4.2 Por lo que con el paso de las versiones se irán colocando más comandos. '
          + 'Estate atento a mi próxima actualización. `🔴`'
        )
        .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      if (imageUrl) {
        embed.setImage(imageUrl);
      }

      await message.channel.send(embed);
    } catch (error) {
      console.error('Error al ejecutar el comando /ayuda:', error);
      message.reply('Hubo un error al mostrar los comandos disponibles.');
    }
  },
};
