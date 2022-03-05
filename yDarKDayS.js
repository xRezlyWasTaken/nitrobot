const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`by yDarKDayS | Giriş Yapıldı ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'yDarKDayS') {
    msg.reply('Nitro Bot Altyapısını Sunar');
  }
});



client.on('message', message => { 
	
	function rasteleSembol(AltyapıyDarKDaySAittir, yDarKDayS) {

var maske = '';

if (yDarKDayS.indexOf('yDarKDaySa') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (yDarKDayS.indexOf('yDarKDaySA') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (yDarKDayS.indexOf('yDarKDayS0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = AltyapıyDarKDaySAittir; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(24,'yDarKDayS0yDarKDaySayDarKDaySA'));
}

	if (message.channel.id = "KANAL İD"){//Botun Discord Nitro Code Atıcagı Kanal İD - yDarKDayS
		if(message.content.startsWith("ydd!nitro")){
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply(" \n ❌ **Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin | yDarKDayS YOUTUBE** \n eger en az 2 sn girdigin halde hata alıyorsan prefix degiştirmişsindir Değiştirme !!!");
		}
		}
		catch(err){
			message.channel.send("❌ Teknik bir hata oluştu! | yDarKDayS YOUTUBE");
		}
		}
		}
 	


});




// Altyapı yDarKDayS a Aittir !!! 
//Discord | https://discord.gg/tDpq2SAEF4
//Youtube | https://www.youtube.com/c/yDarKDayS
client.login(process.env.TOKEN);