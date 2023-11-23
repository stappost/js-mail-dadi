Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Attenzione: l'utilizzo della funzione includes non è ammesso. Se usato, comporta la non validità dell'esercizio.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

SCAFFOLDING   MAIL
1 - permettere all'utente di inserire la sua mail
2 - creare array con all'interno mail differenti
3 - creare variabile x = 0
4 - FOR ogni elemento nell'array
    4.1 - SE la mail inserita è uguale all'elemento
    4.1.1 - aggiungere 1 a x
5 - SE x è maggiore di 0
    5.1 - stampare "la mail è presente"
6 - ALTRIMENTI 
    6.1 - stampare "la mail non è presente"

SCAFFOLDING GIOCO DEI DADI
1 - creare variabile "user_number" che identifica il numero del giocatore
2 - assegnarle un numero casuale da 1 a 6
3 - stampare risultato
4 - creare variabile "computer_number" che identifica il numero del computer
5 - assegnarle un numero casuale da 1 a 6
6 - stampare risultato
7 - SE il numero del giocatore è maggiore del numero del computer
    7.1 - stampare "la vittoria va al giocatore"
8 - ALTRIMENTI SE i numeri sono uguali 
    8.1 - stampare "pareggio"
9 - ALTRIMENTI 
    9.1 - stampare "la vittoria va al computer"