const Discord = require('discord.js');
const canalID = '1166869059581776002';
const canalMencion = `<#${canalID}>`;

const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
]; 

module.exports = {
  name: 'ayuda-actividades',
  description: 'Da instrucciones de cómo usar /actividades',
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
          '`❓` Ayuda sobre actividades semanales `❓`'
        )
        .setColor(0xEAB607)
        .setDescription
        (
          '`⚠️` Para ver las actividades semanales de la facción usa: `/actividades`\n\n'
          + ' `🔶` Las actividades semanales son un metodo de entretenimiento para los mismos miembros,' 
          + ' esto se hace para salir de la rutina de hacer articulo tras articulo. Por lo que cada vez que' 
          + ' un miembro complete sus actividades semanales, se le otorgará un premio a final de mes dependiendo' 
          + ' de cuantas acitivades semanales realizó.\n\n'
          + ' `🔶` Todas las actividades aplican para todos los miembros, no son diferentes.'
          + ' Se pueden ayudar entre miembros, siguiendo las reglas del SV en la GM y las de la facción.'
          + ' Las pruebas de que cumplieron las actividades se suben en el canal: ' + canalMencion + '\n\n'
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
