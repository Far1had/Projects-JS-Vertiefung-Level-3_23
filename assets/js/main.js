function checkData() {
    // Holt  Werte von Eingabe und Radio
    const satzInput = document.getElementById('satzInput').value;
    const buchstabeInput = document.getElementById('buchstabeInput').value;
    const daVorTrenn = document.getElementById('daVorTrenn').checked;

    // Trennung der Zeichenkette 
    const trennIndex = satzInput.indexOf(buchstabeInput);
    
    if (trennIndex !== -1) {
        const vor = daVorTrenn ? satzInput.substring(0, trennIndex) : satzInput.substring(trennIndex + buchstabeInput.length);
        const nach = daVorTrenn ? satzInput.substring(trennIndex + buchstabeInput.length) : satzInput.substring(0, trennIndex);

        // Aktion ausfürung
        document.getElementById('resultVor').textContent = vor;
        document.getElementById('resultNach').textContent = nach;
    } else {
        alert("Findet Trenn-Zeichenkette nicht!");
    }
}
