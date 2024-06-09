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
      .setTitle('> `📍` **Titulo:** "Fallo en Missionary Hill causa apagón en la ciudad de San Fierro\n' 
      + ' > `🌐` **Zona:** Missionary Hill- San Fierro\n\n'
      + ' > `📍` **Titulo:** "Las hermosas vistas desde Missionary Hill\n' 
      + ' > `🌐` **Zona:** Missionary Hill - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Empresa japonesa logra 5 globos verdes en sus instalaciones, en Foster valley\n' 
      + ' > `🌐` **Zona:** Foster Valley - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Aeropuerto de San Fierro se coloca como el aeropuerto que envía y recibe Miles' 
      + ' de mercancías diarias, esto haciéndolo el más necesario para la economía del país\n'
      + ' > `🌐` **Zona:** AEROSF - San Fierro\n\n'
      + ' > `📍` **Titulo:** "Aeropuerto de Las Venturas acusada de robar pertenencias en los puestos de aduana\n' 
      + ' > `🌐` **Zona:** AEROLV - Las Venturas\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-5`\n\n'
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
