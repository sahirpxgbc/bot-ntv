const Discord = require('discord.js');
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'actividades',
  description: 'Envia las actividades semanales para los usuarios.',
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
          '`🧭` Actividades semanales `🧭`'
        )
        .setColor(0xEAB607)
        .setDescription
        (
          '***Estas son las actividades semanales. Si deseas completarlas y ganar premios extras'
          + ' sigue cada uno de los pasos aqui dichos.***\n\n'
          + ' * `📸` Tómale una fotografía a 4 pizzeros diferentes.\n\n'
          + ' * `📸` Dona 500$ a una persona que lo necesite.`\n\n'
          + ' * `📸` Haz un artículo relacionado al tema: "Historia de la Pandemia 2020"\n\n'
          + ' * `📸` Rolea con Daniel_Novachrono cualquier situación.\n\n'
          + ' * `📸` Asiste a la reunión semanal.\n\n'
          + ' `💼` Si no sabes donde subir tus actividades semanales mira: `/ayuda-actividades`'
          + ' ***`💡` Estas actividades se reiniciarán el 20/04/24 `💡`***'
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
