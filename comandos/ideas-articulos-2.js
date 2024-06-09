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
      .setTitle('`💼` Zonas e ideas para articulos (Titulos y/o imagenes) `💼`')
      .setColor(0xEAB607)
      .setDescription('> `📍` **Titulo:** "El alto costo de las viviendas en las ciudades hacen que' 
      + ' familias enteras vivan en espacios reducidos en zonas alejadas de las ciudad"\n'
      + ' > `🌐` **Zona:** Flint Country\n\n'
      + ' > `📍` **Titulo:** "Inflación provoca que tiendas vayan cerrando, haciéndolas un riesgo' 
      + ' para los vecinos ya que son puntos de drogadicción"\n'
      + ' > `🌐` **Zona:** Flint Country\n\n'
      + ' > `📍` **Titulo:** "El contraste de angel pine, una iglesia cristiana enfrente de un motel"\n'
      + ' > `🌐` **Zona:** Angel Pine\n\n'
      + ' > `📍` **Titulo:** "La delincuencia invadir ap al tener una fábrica de narcóticos, robos de' 
      + ' autos, venta de piezas de armas y un territorio de bandas altamente peligrosas"\n'
      + ' > `🌐` **Zona:** Angel Pine\n\n'
      + ' > `📍` **Titulo:** "Las Dunas de Angel Pine, dónde se pueden ir con vehículos 4x4 para' 
      + ' divertirse con amigos"\n'
      + ' > `🌐` **Zona:** Angel Pine\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-3`\n\n'
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
