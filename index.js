require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require('axios');
const fs = require('fs');
const { prefix } = require('./config.json');
const canalesPermitidos = [
  '1151698285254410390', 
  '1164918751158878259', 
  '1049315959900475473', 
  '1135930392294211714', 
  '1184636369067331594', 
  '1223448711749832766'
];

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log("Bot LISTO!");

  client.user.setPresence({
    activity: {
      name: "Usa /ayuda para ver los comandos actuales.",
      type: "PLAYING"
    },
    status: "online"
  });
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  try {
    if (!canalesPermitidos.includes(message.channel.id)) {
      return message.reply('Este comando solo se puede usar en canales específicos.');
    }

    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('Hubo un error al ejecutar el comando.');
  }
});

const enviarMensajeAutomatico = (mensaje) => {
  const embed = new Discord.MessageEmbed()
    .setTitle(mensaje.titulo)
    .setColor(mensaje.color)
    .setDescription(mensaje.descripcion);

  if (mensaje.imagen) {
    embed.setImage(mensaje.imagen);
  }

  const canalID = '1041736494227914844';
  const canal = client.channels.cache.get(canalID);

  if (canal) {
    canal.send(embed);
  } else {
    console.error('No se encontró el canal con la ID proporcionada.');
  }
};

const mensajesAutomaticos = [
  {
    titulo: '`💡` Consejo... `💡`',
    color: '#E4FA00',
    descripcion: 'Al estar jugando IC, recuerda anunciar tu servicio por el canal: <#1049315959900475473> ' +
                 'así evitas llamados de atención, por parte de la Cúpula de NeshyTelevisión',
  },
  {
    titulo: '`💡` Consejo... `💡`',
    color: '#E4FA00',
    descripcion: 'Cuando termines tu servicio, recuerda dejar el vehículo que usaste en buenas condiciones. ' +
                 'La Cúpula está pendiente de los vehículos que usan los miembros, evita llamados de atención. ' +
                 'El gobierno paga tus gastos en el paint, ¡No tienes excusa!',
    imagen: 'https://github.com/jtavera17/img-for-discord091523/blob/main/paint.png?raw=true',
  },
  {
    titulo: '`💡` Consejo...`💡` ',
    color: '#E4FA00',
    descripcion: '**`✅` El sistema para entrar en servicio con el bot de NTV es: **\n\n' +
                 '`/entrada [Su_Nombre_IC] [Rango en la facción] [Hora de entrada] [Pais donde residen]`\n\n' +
                 '`🔔` **Ejemplo: [...]**\n\n' +
                 '`/entrada Rich_Sands Supervisor 12:14PM Colombia`\n\n' +
                 '*`⚠️` Sigue este protocolo siempre, para evitar llamados de atención y/o advertencias.' +
                 'Mas info del Servicio-on-off en el canal: <#1043968042687811655> * `⚠️`',
  },
  {
    titulo: '`💡` Consejo... `💡`',
    color: '#E4FA00',
    descripcion: 'Si te quedaste sin ideas para tus articulos usa el comando: `/ideas-ntv`',
  },
  {
    titulo: '`💡` Consejo... `💡`',
    color: '#E4FA00',
    descripcion: 'Recuerda que antes de publicar un articulo en Neshy Roleplay, debes publicarlo en; <#1104201811629445251>. ' +
                 'Evita publicarlo directamente sin haber sido aprobado, puedes recibir una advertencia.',
  },
  {
    titulo: '`💡` Consejo... `💡`',
    color: '#E4FA00',
    descripcion: 'Despues de salir de servicio recuerda usar: `/racntv` esto para eliminar los vehículos innecesarios.',
  }
];

let indexMensajeActual = 0;

const enviarMensajesAutomaticos = () => {
  if (indexMensajeActual >= mensajesAutomaticos.length) {
    indexMensajeActual = 0;
  }

  const mensajeActual = mensajesAutomaticos[indexMensajeActual];
  enviarMensajeAutomatico(mensajeActual);

  indexMensajeActual++;

  setTimeout(() => {
    enviarMensajesAutomaticos();
  }, 180000000);
};

enviarMensajesAutomaticos();

// Inicia sesión en Discord usando el token del archivo .env
client.login(process.env.DISCORD_TOKEN);
