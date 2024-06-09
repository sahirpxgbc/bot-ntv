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
  name: 'ayuda-2',
  description: 'Muestra más de los comandos actuales del servidor.',
  async execute(message, args) {
    try {
      await message.delete();

      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        return message.reply('No tienes permiso para usar este comando.');
      }

      const embed = new Discord.MessageEmbed()
        .setTitle
        (
          '`❓` Comandos #2, disponibles... `❓`'
        )
        .setColor('#40D400')
        .setDescription
        (
          '`🗞️` Estos son más de mis comandos, si tienes algún aporte'
          + ' de algún nuevo comando, recuérdalo mencionarlo en: ' + channelMention + '\n\n'
          + ' ------------------\n\n'
          + ' `✅` `/ideas-ntv`: Se utiliza por si te quedaste sin ideas para crear: articulos, periódicos etc...\n\n'
          + ' `✅` `/ayuda-actividades`: Te da información de como funciona el sistema de actividades.\n\n'
          + ' `✅` `/actividades`: Te muestra las actividades semanales. Tienes una semana para completarlas.\n\n'
          + ' `✅` `/vehentrada`: Se utiliza para adjuntar el vehículo que estas utilizando para entrar en servicio.\n\n'
          + ' `✅` `/vehsalida`: Se utiliza para adjuntar el vehículo que estas utilizando para salir de servicio.\n\n'
          + ' ------------------\n\n'
          + '`🔴` Estoy en la versión V4.2 Por lo que con el paso de las versiones se irán colocando más comandos. '
          + 'Estate atento a mi próxima actualización. `🔴`'
        )
        .setFooter('Solicitado por: ' + message.member.displayName, message.author.avatarURL())
        .setTimestamp();
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
