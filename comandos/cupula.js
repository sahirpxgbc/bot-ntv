const Discord = require('discord.js');
const channelID = '1042790636207738950';
const channelMention = `<#${channelID}>`;
const channelID_1 = '1049315959900475473';
const channelMention_1 = `<#${channelID_1}>`;

const rolesPermitidos = [
  /*Server Pruebas*/'1151698401457602580',
  /*Rol Cupula*/ '1133741510312071248',
  /*Director*/ '1041737829639794748', 
  /*Sub Director*/ '1199522290631725107', 
  /*Manager*/ '1041737807632273469'
];

module.exports = {
  name: 'cupula',
  description: 'Muestra los comandos de la cúpula.',
  async execute(message, args) {
    try {
      await message.delete();

      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        return message.reply('No tienes permiso para usar este comando.');
      }

      const embed = new Discord.MessageEmbed()
        .setTitle('`❓` Comandos Cúpula NTV `❓`')
        .setColor('#40D400')
        .setDescription('`🗞️` Comandos orientados para la cúpula de Neshy TV (Usar con sabiduría), ' +
        'si tienes algún aporte de algún nuevo comando, recuérdalo mencionarlo en: ' + channelMention
        +' o en el canal respectivo de la cúpula.' + '\n\n'
        + ' ------------------\n\n'
        + ' `☑️` `/expulsar`: Usado para expulsar a un usuario\n\n'
        + ' `☑️` `/banear`: Usado para banear a un usuario\n\n'
        + ' ------------------\n\n'
        + ' `🔴` *Estoy en la versión V4.2 Por lo que con el paso de las versiones se irán colocando más comandos.'
        + ' Estate atento a mi próxima actualización.* `🔴`')
        .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();
      
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
