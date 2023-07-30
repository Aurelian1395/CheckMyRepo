"use strict";

const change = (docToChangeId, showElementId) => {
  let docToChange = document.getElementById(docToChangeId);
  let showElement = document.getElementById(showElementId);
  docToChange.style.display = "none";
  showElement.style.display = "flex";
};
function checkGitHub() {
  //Valori di username
  const usernameInput = document.getElementById("usernameValue");
  const username = usernameInput.value;
  const resultParagraph = document.getElementById("userValue");
  //Valori del repository
  const repositoryInput = document.getElementById("repositoryValue");
  const repositoryName = repositoryInput.value;
  const resultP = document.getElementById("repoValue");

  // Effettua la richiesta all'API di GitHub per l'utente specificato
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (response.status === 200) {
        // Se lo stato della risposta è 200, l'utente esiste su GitHub
        resultParagraph.textContent = `L'utente '${username}' esiste su GitHub.`;
      } else if (response.status === 404) {
        // Se lo stato della risposta è 404, l'utente non esiste su GitHub
        resultParagraph.textContent = `L'utente '${username}' non esiste su GitHub.`;
      } else {
        // Altrimenti, si è verificato un errore durante la richiesta
        resultParagraph.textContent = `Si è verificato un errore durante la richiesta: ${response.status}`;
      }
    })
    .catch(error => {
      // Se si è verificato un errore durante la richiesta
      resultParagraph.textContent = `Si è verificato un errore durante la richiesta: ${error.message}`;
    });
    
     // Effettua la richiesta all'API di GitHub per il repository specifico
     fetch(`https://api.github.com/repos/${repositoryName}`)
     .then(response => {
       if (response.status === 200) {
         // Se lo stato della risposta è 200, il repository esiste su GitHub
         resultP.textContent = `Il repository '${repositoryName}' esiste su GitHub.`;
       } else if (response.status === 404) {
         // Se lo stato della risposta è 404, il repository non esiste su GitHub
         resultP.textContent = `Il repository '${repositoryName}' non esiste su GitHub.`;
       } else {
         // Altrimenti, si è verificato un errore durante la richiesta
         resultP.textContent = `Si è verificato un errore durante la richiesta: ${response.status}`;
       }
     })
     .catch(error => {
       // Se si è verificato un errore durante la richiesta
       resultP.textContent = `Si è verificato un errore durante la richiesta: ${error.message}`;
     });}



// Funzione per inviare il messaggio al bot di Telegram
function send() {
  const apiUrl = ` https://pushmore.io/webhook/TkF1Y6Am5zz4vt3kVmwpxHjN
            `;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "repoUrl=https://github.com/Aurelian1395/CheckMyRepo, sender=Aurelian",
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella richiesta API");
      }
      
    })
    .then((data) => {
      console.log("Risposta del server:", data);
      console.log("Messaggio inviato con successo!");
    })
    .catch((error) => {
      console.error("Si è verificato un errore:", error);
    });
}
