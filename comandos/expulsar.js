const Discord = require('discord.js');
const rolesPermitidos = [
  /*Server Pruebas*/'1151698401457602580',
  /*Rol Cupula*/ '1133741510312071248',
  /*Director*/ '1041737829639794748', 
  /*Sub Director*/ '1199522290631725107', 
  /*Manager*/ '1041737807632273469'
]

module.exports = {
  name: 'expulsar',
  description: 'Expulsa a un usuario del servidor',
  async execute(message, args) {
    try {
      if (
        message.member.roles.cache.some(role =>
          rolesPermitidos.includes(role.id)
        )
      ) {
        const userToKick = message.mentions.members.first();
        if (!userToKick) {
          await message.delete();
          return message.reply('`Debes mencionar al usuario que deseas expulsar.`');
        }

        const reason = args.slice(1).join(' ') || 'Sin razón especificada';

        try {
          await userToKick.kick();
          const embed = new Discord.MessageEmbed()
            .setColor('#D60000')
            .setTitle('`⚠️` Usuario Expulsado `⚠️`')
            .setDescription('`📢`' + `El usuario ${userToKick} ha sido expulsado del servidor.`)
            .addField('`✏️` Razón:', reason)
            .setFooter('`👤`' + `Expulsado por: ${message.author.tag}`, message.author.avatarURL())
            .setTimestamp();

          message.channel.send(embed);
        } catch (error) {
          console.error(error);
          message.reply('`Hubo un error al intentar expulsar al usuario.`');
        }
      } else {
        await message.delete(); 
        message.reply('`No tienes los permisos para usar este comando.`');
      }
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
