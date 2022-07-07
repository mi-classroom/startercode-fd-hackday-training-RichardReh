# Tasks Frontend Development Prüfungstraining

## M1: HTML auf Validität prüfen

Prüfen Sie mit dem [W3C Validator](https://validator.w3.org/nu/#textarea) ob die *index.html* valide ist. Falls nicht, passen Sie bitte die Datei, bzw. die notwendigen Templates entsprechend an. Achtung: nutzen Sie dafür die generierte Datei im *docs* Folder.

**10min / HTML**

## M2: Gestaltung der Cards anpassen

Die Cards der Artfaktübersicht sollen in ein neues Design gebracht werden (siehe Abbildung). Dafür müssen Sie neben Anpassungen in den SCSS Files ggf. einige Klassen in der *index.11ty.js* entfernen/ anpassen. Versuchen Sie das neue Design möglichst genau umzusetzen.
Das gewünschte Layout finden Sie unter *_stuff/m2-kachel.png*.

**15min / CSS & HTML**

## M3: Responsive Design

Die Übersichts- und Detailseite sollen mit einem reaktionsfähigen Layout ausgestattet werden. Nutzen Sie die definierten *Breakpoints* aus der *_variables.scss*, Abschnitt *Viewports*.  Das Layout soll die Geräteklassen «Smartphone», «Tablet» und «Desktop» unterstützen. 
Das gewünschte Layout finden Sie unter *_stuff/m3-responsive.png*.

**30min / CSS**

## M4: Formular zur Eingabe von Metadaten zum Bild

Das Frontend soll später auch zur Eingabe von Metadaten zu den Gemälden durch die Redakteure des Cranach Archivs verwendet werden. Implementieren Sie ein entsprechendes Formular mit folgenden Feldern:

* Dateiart: Kurztext
* Beschreibung: Langtext
* Datum: Zahl
* Abbildung Rechte: Kurztext
* Abbildung Quelle: Kurztext

Hierfür ist bereits das Partial `form.11ty.js`unter `src/_template/partials` vorhanden. Erweitern Sie das Partial um das erforderliche Markup: je reichhaltiger und strukturierter desto besser. Das gewünschte Layout finden Sie unter *_stuff/m4-form.png*.


**30min / HTML & CSS**

## M5: Integration von Stylelint

Integrieren Sie *stylelint* via `package.json` in Ihre Prozesskette. Folgende Funktionen sollten integriert werden:

```
`npm run lint:scss` startet stylelint.

`npm run lint:scss:fix` startet stylelint und korrigiert die Fehler, sofern möglich.

``` 

**15min / Buildchain**

## M6: Formularvalidierung der Metadateneingabe

Da alle Felder Pflichtfelder sind, soll vor dem Abschicken des Formulars überprüft werden, ob alle Felder mit mindestens 5 Zeichen (str.length > 5)gefüllt sind, falls nicht: geben Sie dem Nutzer eine entsprechende Rückmeldung. Eine CSS-Klasse *ut-has-error* finden Sie in der *_utilities.scss*. In der *main.js* ist bereits eine rudimentäre Funktion angelegt. Bitte entwickeln Sie diese weiter, um die gewünschte Funktionalität zu erzielen.

**30min / Javascript, CSS & HTML**



## O2: Anpassung Typographie für kleine Screens

Passen Sie bitte die Schriftgröße und Durchschuss von *.header > h1* und *.herotext* so an, dass bei kleinen Viewports die Schrift etwa 20% kleiner dargestellt wird. 

**20min / CSS**

## O3: Breite des Herotextes

Bei kleinen Viewports soll *.herotext* über die komplette Breite gehen. Bei größeren Screens soll er nur die Hälfte der zur Verfügung stehenden Breite einnehmen. 
Das gewünschte Layout finden Sie unter *_stuff/O3-herotext.png*.

**15min / CSS**


## O5: Zuschreibung als Subtitle

Die Zuschreibung eines Bildes soll nicht mehr in der Definitionsliste, sondern als Subtitle dargestellt werden. Bitte implementieren Sie dies am Beispiel des *Bildnis Anna Buchner, geborene Lindacker*.  Es gibt zwei Layoutvarianten, die unterschiedlich komplex zu implementieren sind:
Das gewünschte Layout finden Sie unter *_stuff/05-zuschreibung-a.png*. Das zugehörige HTML befindet sich in der Datei *artefact.11ty.js*.

**10min / CSS & HTML**

Für die Profis gibt es noch ein zweites Layout: *_stuff/05-zuschreibung-b.png*. Kleiner Tipp: hier empfiehlt es sich die Pseudoelemente *::before* oder *::after* zu verwenden.

**15min / CSS & HTML**

## O6: Akkordion bei den Bildinformationen

Außer *Inventarnummer*, *Datum* und *Klassifikation* sollen die Bildinformationen über ein Akkordion ein- und ausgeklappt werden können. Im initialen Zustand sollten alle Elemente eingeklappt sein. Schreiben Sie das notwendige Javascript dazu in der *main.js*. 

Das Navigationselement sollte im Idealfall auch via Javascript [createElement](https://developer.mozilla.org/de/docs/Web/API/Document/createElement) erzeugt werden. Ein entsprechendes CSS ist bereits in der *_icons.scss* vorhanden. Das HTML des Navigationselements muss wie folgt aussehen:

```html
<button class="btn is-right icon-arrow-down"></button>
```

**45min / Javascript & HTML**

## O7: Navigation zum nächsten oder vorherigen Bild

In den Seiten der einzelnen Gemälde ist jeweils ein JSON Datensatz mit Daten zum vorherigen und nachfolgenden Bild (sofern vorhanden) integriert. Erzeugen Sie damit via Javascript eine Hyperlink inkl. Vorschaubild, damit die User darüber schnell zum nächsten, bzw. vorherigen Gemälde navigieren können. Dazu sind in der Datei *scss/_components.scss* bereits wesentliche Teile des CSS definiert. Dieses adressiert folgende HTML Struktur:

```html
<div class="nav-wrap">
  <div class="nav-item previous">
    <a href="{{url-zum-vorherigen-item}}">
      <img src="{{img-src-des-vorherigen-items}}">
      <span>{{title-des-vorherigen-items}}</span>
    </a>
  </div>
  <div class="nav-item next">
    <a href="{{url-zum-naechsten-item}}">
      <img src="{{img-src-des-naechsten-items}}">
      <span>{{title-des-naechsten-items}}</span>
    </a>
  </div>
</div>
```

Das gewünschte Layout finden Sie unter *_stuff/07-navigation.png*.

**45min / Javascript & HTML**

