const userName = prompt("inserisci il tuo nome");
const userSurname = prompt("inserisci il tuo cognome");
const userFavColor = prompt("inserisci il tuo colore preferito");

let saluto = `Benvenuto ${userName} ${userSurname}, ecco la tua password impossibile da hackerare: `;
let password = `${userName}${userSurname}${userFavColor}23`

document.getElementById('mio_id').innerHTML= saluto;
document.getElementById('password').innerHTML= password;