const Discord = require('discord.js');
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
]; 

module.exports = {
  name: 'ideas-articulos-2',
  description: 'Envia ideas para NTV.',
  execute(message, args) {
    try {
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        message.delete(); 
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      const embed = new Discord.MessageEmbed()
      .setTitle('> `📍` **Titulo:** "Aumento de robos de vehículos en Los Santos\n' 
      + ' > `🌐` **Zona:** Los Santos\n\n'
      + ' > `📍` **Titulo:** "Récord de temperaturas altas en el desierto de Bone County' 
      + ' > `🌐` **Zona:** Bone Country - San Andreas\n\n'
      + ' > `📍` **Titulo:** "Incidente en la planta hidroeléctrica de Las Venturas\n' 
      + ' > `🌐` **Zona:** Las Venturas\n\n'
      + ' > `📍` **Titulo:** "Corrupción en el departamento de policía de Los Santos\n' 
      + ' > `🌐` **Zona:** SAPD - Los Santos\n\n'
      + ' > `📍` **Titulo:** "Robo masivo en el banco de San Fierro\n' 
      + ' > `🌐` **Zona:** San Fierro\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-8`\n\n'
      + ' "**¿Donde encuentro las imagenes?". Las encuentras en:**\n'
      + 'https://drive.google.com/drive/folders/1KDkL4ZqmZ8jT0jZEbRSZEVFX_n5BEwmE?usp=sharing')
      .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
      .setTimestamp()
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
