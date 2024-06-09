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
      .setTitle('> `📍` **Titulo:** "Aeropuerto de Los Santos, la preferida entre los clientes' 
      + ' ya que hay todo tipo de aviones\n' 
      + ' > `🌐` **Zona:** AEROLS- Los Santos\n\n'
      + ' > `📍` **Titulo:** "Puerto de San Fierro acusado de importar autos robados\n' 
      + ' > `🌐` **Zona:** Puerto - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Puerto de SF se coloca en #1 de importaciones y exportaciones del país\n' 
      + ' > `🌐` **Zona:** Puerto - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Se incauta una tonelada de cocaína en el puerto de San Fierro\n' 
      + ' > `🌐` **Zona:** AEROSF - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Tensión internacional; San Fierro prepara un porta-aviones para defender el país\n' 
      + ' > `🌐` **Zona:** San Fierro - San Andreas\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-6`\n\n'
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
