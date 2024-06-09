const Discord = require('discord.js');
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'ideas-ntv',
  description: 'Ideas de NTV para users.',
  execute(message, args) {
    try {
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        message.delete(); 
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      const embed = new Discord.MessageEmbed()
        .setTitle('`💡` Ideas para Articulos `💡`')
        .setColor(0xEAB607)
        .setDescription('`📚` ¡Hola! miembro de NeshyTV, estas ingresando a la zona de ideas de NTV'
        + ' esta seccion esta hecha por si en algún momento te has quedado sin ideas para postear noticias'
        + ' para ver algunas ideas que hemos subido, escribe `/ideas-articulos-1`.\n\n'
        + ' `♨️` Si quieres ver algunas fotos que puedes usar, puedes encontrarlas en este Drive:\n'
        + ' https://drive.google.com/drive/folders/1KDkL4ZqmZ8jT0jZEbRSZEVFX_n5BEwmE?usp=sharing')
        .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();
      
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
