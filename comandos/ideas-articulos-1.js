const Discord = require('discord.js');
const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'ideas-articulos-1',
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
      .setDescription('> `📍` **Titulo:** "Sexo servidora es encontrada sin vida en motel de Flint County"\n'
      + ' > `🌐` **Zona:** Flint Country\n\n'
      + ' > `📍` **Titulo:** "Se encontraron cuerpos en barriles llenos de ácido en Flint County"\n'
      + ' > `🌐` **Zona:** Flint Country\n\n'
      + ' > `📍` **Titulo:** "Accidente con una motosierra deja sin vida a un leñador"\n'
      + ' > `🌐` **Zona:** Angel Pine (Job Leñador)\n\n'
      + ' > `📍` **Titulo:** "Leñador cobra vida en octubre"\n'
      + ' > `🌐` **Zona:** Angel Pine (Job Leñador)\n\n'
      + ' > `📍` **Titulo:** "Deforestación masiva en bosques"\n'
      + ' > `🌐` **Zona:** Angel Pine (Job Leñador)\n\n'
      + ' `⚙️` Más ideas: `/ideas-articulos-2`\n\n'
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
