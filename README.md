Projekt-Übung: Formular mit Zeichenketten-Trennung
Beschreibung
Dieses Projekt ist eine Übung, bei der ein Formular erstellt wird. Das Ziel ist es, zwei Zeichenketten einzugeben und die erste Zeichenkette an der Stelle zu teilen, an der die zweite Zeichenkette innerhalb der ersten gefunden wird. Die Richtung der Trennung (vor oder nach der gefundenen Zeichenkette) kann über Radio-Buttons spezifiziert werden.

Vorschau
Um die Funktionalität und das Erscheinungsbild des Formulars zu verstehen, schau dir die Vorschau an: Vorschau anzeigen

Anleitung
Formular erstellen: Baue ein HTML-Formular mit den notwendigen Eingabefeldern und Radio-Buttons.

JavaScript-Funktionalität hinzufügen: Implementiere JavaScript-Code, der die Eingaben des Benutzers verarbeitet und die Trennung der Zeichenketten entsprechend durchführt.

Styling hinzufügen (optional): Verbessere das Erscheinungsbild des Formulars mit CSS, um eine ansprechende Benutzeroberfläche zu erstellen.

Anforderungen
HTML-Formular mit:

Eingabefeld für die erste Zeichenkette
Eingabefeld für die zweite Zeichenkette
Radio-Buttons für die Richtung der Trennung
Schaltfläche zum Absenden des Formulars
JavaScript-Funktionalität, um die Zeichenketten zu trennen und das Ergebnis anzuzeigen.

Optional: CSS-Styling für eine ansprechende Benutzeroberfläche.

Beispiel
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zeichenketten-Trennungsformular</title>
    <style>
        /* Füge hier dein optionales CSS-Styling hinzu */
    </style>
</head>
<body>

    <h1>Zeichenketten-Trennungsformular</h1>

    <form id="trennungsFormular">
        <label for="ersteZeichenkette">Erste Zeichenkette:</label>
        <input type="text" id="ersteZeichenkette" required>

        <label for="zweiteZeichenkette">Zweite Zeichenkette:</label>
        <input type="text" id="zweiteZeichenkette" required>

        <p>Trennung:</p>
        <input type="radio" id="vorTrennung" name="trennungsRichtung" value="vor" checked>
        <label for="vorTrennung">Vor der zweiten Zeichenkette</label>

        <input type="radio" id="nachTrennung" name="trennungsRichtung" value="nach">
        <label for="nachTrennung">Nach der zweiten Zeichenkette</label>

        <button type="button" onclick="trenneZeichenketten()">Zeichenketten trennen</button>
    </form>

    <div id="ergebnisAnzeige"></div>

    <script>
        function trenneZeichenketten() {
            // Implementiere die Logik zur Trennung der Zeichenketten hier
        }
    </script>

</body>
</html>
Hinweise
Achte darauf, dass das Formular benutzerfreundlich ist und klare Anweisungen für die Eingabe und Auswahl bietet.

Kommentiere deinen Code, um anderen Entwicklern das Verständnis zu erleichtern.

Experimentiere mit dem CSS, um dem Formular ein ansprechendes Erscheinungsbild zu verleihen.

Viel Erfolg bei dieser Übung!

gefertigt bei: Farhad
