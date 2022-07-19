const fs = require('fs')

const chalk = require('chalk')

const  { indonesia, english} = require(`./language`)



// Website Api

global.APIs = {

	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner

}



// Free apikey

global.APIKeys = {

	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com

}



// setting 

global.autoread = false // auto read pesan / message

global.autobio = true 



//language

//Available in indonesia & english

//You can request others language 

global.language = english  //change indonesia to english if you don't understand the language used by the bot





// Other

global.botname = "Alexito^Bot" //namabot kalian

global.ownername= "Alexito" //nama kalian

global.myweb ="https://api.tiosexo.xyz" //bebas asal jan hapus

global.youtube = "https://youtube.com/c/tiosexo" //bebas asal jan hapus

global.github = "https://tiosexo.ofc.github.io/" //bebas

global.email = "tiosexo@gmail.com" //bebas

global.region = "Perú" //bebas

global.timezone = 'Asia/Jakarta' //  timezone wib

global.owner = ["51968374620" , "51945609461" , "522995210491"] //ganti agar fitur owner bisa di gunakan

global.ownernomer = "51968374620" // nomor wa kalian

global.ownernomerr = "+51945609461" //nmr wa kalian

global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot

global.donasi = "./image/donasi.jpg" // foto donasi di folder image

global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay



global.packname = '© Alexito^Bot' //sticker wm ubah

global.author = 'creador papi Alexito' //sticker wm ganti nama kalian

global.sessionName = 'session'

global.typemenu = 'document'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='



global.prefa = ['','!','.','']

global.sp = '⭔'

global.mess = {

    sukses: '🤗admin yeah',

    admin: '¡Este comando solo puede ser utilizado por administradores!',

    botAdmin: '¡Este comando solo se puede usar cuando el bot se convierte en administrador!',

    owner: '¡Este comando solo puede ser utilizado por el propietario!',

    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',

    private: '¡Este comando solo se puede usar en privado!',

	bot: 'Funciones especiales del usuario del número de bot',

    errtoimg: 'Lo sentimos, ¡actualmente no es compatible con la etiqueta Gif!',

    wait: '⏳ Siendo procesado',

	lockCmd: '¡Característica no habilitada por el propietario!',

	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'

}



let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})

