const Discord = require('discord.js');
const channelID = '1192641598211772536';
const channelID2 = '1206376998872817674';
const channelMention2 = `<#${channelID2}>`;
const channelMention = `<#${channelID}>`;

const rolesPermitidos = [
  '1151698401457602580', 
  '1041737341519282256', 
  '1091895225783435345'
];

module.exports = {
  name: 'codigo-etica',
  description: 'Muestra un poco del CE de NTV',
  execute(message, args, client) {
    try {
      const tieneRolPermitido = message.member.roles.cache.some(role => rolesPermitidos.includes(role.id));
      if (!tieneRolPermitido) {
        message.delete(); 
        return message.reply('No tienes permiso para usar este comando.');
      }
      
      const embed = new Discord.MessageEmbed()
        .setTitle
        (
          '`📑` Codigo de Ética de Neshy Televisión `📑`'
        )
        .setColor('#C700D4')
        .setDescription
        (
          '`🔻` **Objetivo:** El código de ética para NeshyTV está diseñado para establecer principios, objetivos, '
          + 'valores, deberes y obligaciones.\n\n'

          + '`🔻` **Aceptación:** NeshyTV exige que sus miembros se adhieran a los principios establecidos por este Código. '
          + 'De igual forma se obliga a todos sus miembros a cumplirlos.\n\n'

          + '`🔻` **Principios Generales:**\n\n'

          + '`🔸` **CE_PG#1:** Los miembros de NeshyTV presentarán noticias e información sin distorsión. '
          + 'Las entrevistas podrán ser editadas siempre que el significado no se cambie o se distorsione.\n\n'
          
          + '`🔸` **CE_PG#2:** Los miembros de NeshyTV deberán de evitar distorsionar el carácter o la importancia de los acontecimientos.\n\n' 

          + '`🔸` **CE_PG#3:** Los miembros de NeshyTV procurarán que sus transmisiones se mantengan dentro de los límites del respeto a la vida privada, '
          + 'a la dignidad personal y a la moral, y no ataquen los derechos de terceros, ni provoquen la comisión de algún delito o perturben el orden y '
          + 'la paz públicos.\n\n' 

          + '`🔸` **CE_PG#4:** Los miembros de NeshyTV deberán reconocer los errores rápidamente y corregirlos.\n\n' 

          + '`🔸` **CE_PG#5:** Los miembros de NeshyTV tratarán a las personas que son sujetos de noticias con decencia y sensibilidad, '
          + 'especialmente cuando se trata de niños.\n\n' 

          + '`🟡` Para conocer más del manual de Neshy Televisión puedes buscarlo en: ' + channelMention + '\n\n'

          + '`🟡` Para saber un poco de las reglas de NTV puedes ir al canal: ' + channelMention2
        )
        .setImage('https://github.com/jtavera17/img-for-discord091523/blob/main/barra1.gif?raw=true')
        .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.reply('Hubo un error al ejecutar el comando.');
    }
  },
};
