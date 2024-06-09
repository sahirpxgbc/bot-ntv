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
      .setTitle('> `📍` **Titulo:** "Accidente dentro de porta-aviones causa una explosión\n' 
      + ' > `🌐` **Zona:** San Fierro- San Andreas\n\n'
      + ' > `📍` **Titulo:** "En Esplanade North parece lugar de vagabundos pero es el bajo mundo' 
      + ' de San Andreas dónde puedes hacer contratos de muerte\n' 
      + ' > `🌐` **Zona:** Esplanade North - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Puente de San Fierro; Un lugar donde personas cometen suicidio\n' 
      + ' > `🌐` **Zona:** San Fierro\n\n'
      + ' > `📍` **Titulo:** "San Fierro se une a la celebración abriendo un bar gay en la zona de Queens.\n' 
      + ' > `🌐` **Zona:** Queens - San Fierro\n\n'
      + ' > `📍` **Titulo:** "San fierro hace festival de orgullo LGTBQ+ en Queens, Hashbury y García\n' 
      + ' > `🌐` **Zona:** San Fierro\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-7`\n\n'
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
