exports.noregis = () => {
        return `*「 REGISTRE-SE 」*\n\n*cara registrar ${prefix}registrar nome|idade* \n*Contoh: ${prefix}registrar Zeus|18*`
}

exports.rediregis = () => {
        return `*「 JA REGISTRADO! 」*\n\n*` VOCE SE REGISTROU NO BANCO DE DADOS DO BOT`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\Para saber se voce ja se registrou, verifique a nota que eu enviei \n\nNOTE:\n*Se voce nao recebeu uma mensagem, significa que voce ainda nao se registrou*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nkamu sudah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* Nao encontrado tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe mas... ${pushname} nao é o dono do bot*`
}

exports.limitend = (pushname) => {
        return`*Desculpa ${pushname} limite de hoje expira,*\n*o limite é redefinido a cada 24h*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE DA CONTA 」*
Seu limite restante : ${limitCounts}

NOTA: Para obter o limite pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicione 1 para/habilitar ou 0/para desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
