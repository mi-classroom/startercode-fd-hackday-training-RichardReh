exports.html = `
<div>
  <h3>Metadaten zur Abbildung</h3>
  <form class="form-field" data-js-validate="true">

  <input type="text" id="dateiart" required></input>
  <label for "dateiart">Dateiart</label>

  <textarea id="beschreibung" required></textarea>
  <label for "beschreibung">Beschreibung</label>

  <input type="text" id="rechte" required></input>
  <label for "rechte">Abbildung Rechte</label>

  <input type="text" id="quelle" required></input>
  <label for "quelle">Abbildung Quelle</label>
  <br>

  <input type="date" id="datum" required></input>
  <br>
  <label for "date">Datum</label>

  <br>
  
  <input class="form-field__button" type="reset"></input>
  <input class="form-field__button" type="submit"></input>

  </form>
</div>
`;