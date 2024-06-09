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
      .setTitle('> `📍` **Titulo:** "Renta de bicicletas en el Monte Chilliad;' 
      + ' El gobierno puso está renta bicicletas para incentivar la actividad física a los ciudadanos"*\n'
      + ' > `🌐` **Zona:** Monte Chilliad\n\n'
      + ' > `📍` **Titulo:** "Las hermosas vistas desde el Monte Chilliad\n' 
      + ' > `🌐` **Zona:** Monte Chilliad\n\n'
      + ' > `📍` **Titulo:** "Accidente en el Monte Chilliad: Ciclistas caen desde la cima de la' 
      + ' Montaña más famosa de San Andreas"\n'
      + ' > `🌐` **Zona:** Monte Chilliad\n\n'
      + ' > `📍` **Titulo:** "Casa abandonada en el Monte Chilliad. Todo un misterio. (Temas:'
      + ' Paranormal, Slenderman, Pie Grande, Creepy, Mitos y Leyendas\n' 
      + ' > `🌐` **Zona:** Angel Pine\n\n'
      + ' > `📍` **Titulo:** "Antena 5G causa pánico en la ciudad de San Fierro\n' 
      + ' > `🌐` **Zona:** San Fierro\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-4`\n\n'
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
