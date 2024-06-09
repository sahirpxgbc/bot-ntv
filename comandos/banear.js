const Discord = require('discord.js');
const rolesPermitidos = [
  /*Server Pruebas*/ '1151698401457602580',
  /*Rol Cupula*/ '1133741510312071248',
  /*Director*/ '1041737829639794748',
  /*Sub Director*/ '1199522290631725107',
  /*Manager*/ '1041737807632273469'
];

module.exports = {
  name: 'banear',
  description: 'Banea a un usuario del servidor',
  async execute(message, args) {
    try {
      await message.delete();

      if (
        message.member.roles.cache.some(role =>
          rolesPermitidos.includes(role.id)
        )
      ) {
        const userToBan = message.mentions.members.first();
        if (!userToBan) {
          return message.reply('`Debes mencionar al usuario que deseas banear.`');
        }

        const reason = args.slice(1).join(' ') || 'Sin razón especificada';

        userToBan.ban({ reason }).then(() => {
          const embed = new Discord.MessageEmbed()
            .setColor('#D60000')
            .setTitle('`⚠️` Usuario Vetado `⚠️`')
            .setDescription('`📢`' + `El usuario ${userToBan} ha sido vetado de la facción.`)
            .addField('`✏️` Razón:', reason)
            .setFooter('`👤`' + `Baneado por: ${message.author.tag}`, message.author.avatarURL())
            .setTimestamp();

          message.channel.send(embed);
        });
      } else {
        message.reply('`No tienes los permisos para usar este comando.`');
      }
    } catch (error) {
      console.error(error);
      message.reply('`Hubo un error al intentar banear al usuario.`');
    }
  },
};
