const Discord = require('discord.js');
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'salida',
  description: 'Registrar salida de servicio',
  async execute(message, args) {
    try {
      await message.delete();

      const tienePermiso = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tienePermiso) {
        return message.reply('No tienes permiso para usar este comando');
      }
      
      if (args.length < 5) {
        return message.reply('```⚠️ Debes proporcionar tu nombre, rango, hora de salida, país, motivo de salida y tiempo en servicio. ⚠️```');
      }

      const nombre = args[0];
      const rango = args[1];
      const horaSalida = args[2];
      const paisuser = args[3];
      const tiempoEnServicio = args.slice(4).join(' ');

      const embed = new Discord.MessageEmbed()
        .setTitle('`⛔` Salida de Servicio: `⛔`')
        .setColor('#FF0000')
        .addField('`👤` Nombre: ', nombre + '\n\n')
        .addField('`🔰` Rango: ', rango + '\n\n')
        .addField('`🕜` Hora de Salida: ', horaSalida + '\n\n')
        .addField('`🏳️` País del usuario: ', paisuser + '\n\n')
        .addField('`📸` Tiempo en Servicio: ', tiempoEnServicio + '\n\n')
        .setImage('https://github.com/jtavera17/img-for-discord091523/blob/main/barra2.gif?raw=true')
        .setFooter('Creado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
