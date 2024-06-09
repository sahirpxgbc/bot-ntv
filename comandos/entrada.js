const Discord = require('discord.js');

const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'entrada',
  description: 'Registrar entrada de servicio',
  async execute(message, args) {
    try {
      if (args.length < 4) {
        await message.delete(); 
        return message.reply('```⚠️ Debes proporcionar tu nombre, rango, hora de entrada, país y motivo de entrada. ⚠️```');
      }
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        return message.reply('No tienes permiso para usar este comando.');
      }
      await message.delete();

      const nombre = args[0];
      const rango = args[1];
      const horaEntrada = args[2];
      const paisuser = args.slice(3).join(' ');

      const embed = new Discord.MessageEmbed()
        .setTitle('`✏️` Entrada de Servicio `✏️`')
        .setColor('#4564FF')
        .addField('`👤` Nombre IC: ', nombre + '\n\n')
        .addField('`🔰` Rango: ', rango + '\n\n')
        .addField('`🕜` Hora de Entrada: ', horaEntrada + '\n\n')
        .addField('`🏳️` País del Usuario: ', paisuser + '\n\n')
        .setImage('https://github.com/jtavera17/img-for-discord091523/blob/main/barra2.gif?raw=true')
        .setFooter('Creado por: ' + message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
