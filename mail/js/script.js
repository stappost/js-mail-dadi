// CREAZIONE VARIABILI 
let user_mail = prompt("inserisci la tua mail");
let mails = ["gigi@gmail.com", "pino@hotmail.it", "fabio@yahoo.it"];
let x = 0;
// CICLO MAILS 
for( i=0; i<mails.length; i++){
    if(user_mail == mails[i]){
        x += 1
    }
}
if(x > 0){
    console.log(`${user_mail} è presente`)
}
else{
    console.log(`${user_mail} non è presente`)
}