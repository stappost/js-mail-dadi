// CREAZIONE VARIABILI DADI 
let user_number = Math.floor(Math.random() * 6) + 1;
console.log(user_number);
let computer_number = Math.floor(Math.random() * 6) + 1;
console.log(computer_number);

// CONTROLLARE I DIVERSI RISULTATI POSSIBILI 

if(user_number > computer_number){
    console.log("la vittoria va al giocatore");
}
else if(user_number == computer_number){
    console.log("pareggio");
}
else{
    console.log("la vittoria va al computer");
}