
const timer_display = document.getElementById("timer"); // h1 per il display
const minutiInput = document.getElementById("min");     // input minuti
const secondiInput = document.getElementById("sec");   // input secondi

let countdownInterval = null; // Variabile per tenere traccia dell'intervallo del timer

function inizia() {
    // Pulisci eventuali timer precedenti
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let minuti = parseInt(minutiInput.value) || 0;
    let secondi = parseInt(secondiInput.value) || 0;
    let tempoTotaleInSecondi = minuti * 60 + secondi;

    if (tempoTotaleInSecondi <= 0) {
        alert("Inserisci un tempo valido!");
        return;
    }

    // Aggiorna il display immediatamente all'avvio
    aggiornaDisplay(tempoTotaleInSecondi);

    // Imposta l'intervallo che esegue la funzione ogni secondo
    countdownInterval = setInterval(() => {
        tempoTotaleInSecondi--;

        if (tempoTotaleInSecondi < 0) {
            clearInterval(countdownInterval); // Ferma il timer
            timer_display.textContent = "Finito!";
            return;
        }

        aggiornaDisplay(tempoTotaleInSecondi);

    }, 1000); // 1000 millisecondi = 1 secondo
}

function aggiornaDisplay(secondiRimanenti) {
    const min = Math.floor(secondiRimanenti / 60);
    const sec = secondiRimanenti % 60;

    // Formatta i numeri per avere sempre due cifre (es. 05 anziché 5)
    const displayMin = min < 10 ? '0' + min : min;
    const displaySec = sec < 10 ? '0' + sec : sec;

    timer_display.textContent = `${displayMin}:${displaySec}`;
}
