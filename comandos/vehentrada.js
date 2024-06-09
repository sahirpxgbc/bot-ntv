const Discord = require('discord.js');

const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'vehentrada',
  description: 'Registrar entrada de servicio',
  async execute(message, args) {
    try {
      await message.delete();

      if (args.length < 4) {
        return message.reply('```⚠️ Debes proporcionar tu nombre, rango, vehículo utilizado, ID del vehículo, comentario e imagen. ⚠️```');
      }

      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        return message.reply('No tienes permiso para usar este comando.');
      }

      const nombre = args[0];
      const rango = args[1];
      const veh = args[2];
      const idveh = args[3];
      const coment = args.slice(4).join(' ');

      const embed = new Discord.MessageEmbed()
        .setTitle('`✏️` Entrada: Vehículo Utilizado `✏️`')
        .setColor('#4564FF')
        .addField('`👤` Nombre IC: ', nombre + '\n\n')
        .addField('`🔰` Rango: ', rango + '\n\n')
        .addField('`🚘` Vehiculo: ', veh + '\n\n')
        .addField('`🆔` ID del vehículo: ', idveh + '\n\n')
        .addField('`💬` Comentario: ', coment + '\n\n')
        .setFooter('Utilizado por: ' + message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      if (message.attachments.size > 0) {
        const attachment = message.attachments.first();
        embed.setImage(attachment.url);
      }

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
