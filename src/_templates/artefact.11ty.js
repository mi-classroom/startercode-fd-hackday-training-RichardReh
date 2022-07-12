const form = require('./partials/form.11ty.js');
const getNeighbours = (masterpieces, inventory_number) => {

  const simpleMasterpieces = masterpieces.map(item => {
    const { inventory_number } = item;
    const { img_src } = item;
    const { title } = item;
    const url = `../${inventory_number}/`;
    return {
      inventory_number, img_src, url, title
    };
  });
  
  const index = simpleMasterpieces.findIndex(item => {
    return item.inventory_number === inventory_number;
  });

  switch (index) { 
    case 0: 
      return {"prevItem": false, "nextItem": simpleMasterpieces[1]}
    
    case masterpieces.length:
      return {"prevItem": simpleMasterpieces[index-1], "nextItem": false }
    
    default:
      return {"prevItem": simpleMasterpieces[index-1], "nextItem": simpleMasterpieces[index+1] }
  }
}

exports.data = {
  layout: 'default.11ty.js'
}

exports.render = function (pageData) {

  const { content } = pageData;
  const { inventory_number } = content;
  pageData.title = content.title;

  const { masterpieces } = pageData.collections;
  const neighbours = getNeighbours(masterpieces, inventory_number);
  const {prevItem} = neighbours;
  const {nextItem} = neighbours;
  return `
    <main id="mainContent">
      <article class="grid-container-zweispalter">
        <div class="artefact-image">
          <figure class="image-with-caption">
            <img
              src="${content.img_src}"
              srcset="${this.xsmallSrc(content.img_src)} 300w, ${this.smallSrc(content.img_src)} 500w, ${this.mediumSrc(content.img_src)} 700w"
              sizes="(min-width: 50em) 33vw, (min-width: 28em) 50vw, 100vw" 
              alt="${this.maskEntities(content.title)}">
          </figure>
          ${form.html}
        </div>

        <div class="artefact-description">
          <h2>${content.title}</h2>
          <dl class="rootdata">
            <dt>Inventarnummer</dt>
            <dd>${content.inventory_number}</dd>
            <dt>Zuschreibung</dt>
            <dd>${content.involved_persons[0].name}</dd> 
            <dt>Datum</dt>
            <dd>${content.dating}</dd>
            <dt>Klassifikation</dt>
            <dd>${content.classification}</dd>
            <dt id="dimensions-headline" data-target="dimensions-text">Maße</dt>
            <dd id="dimensions-text">${content.dimensions}</dd>
            <dt id="material-headline" data-target="material-text">Material/ Technik</dt>
            <dd id="material-text">${content.medium}</dd>
            <dt id="provenienz-headline" data-target="provenienz-text">Provenienz</dt>
            <dd id="provenienz-text">${this.structuredText(content.provenance)}</dd>
          </dl>

          <div class="longtext">
            ${this.wrappedText(content.data_all.description)}
          </div>
          

        </div>
      </article>
    </main>

    <script>
    const prevItem = ${JSON.stringify(prevItem)};
    const nextItem = ${JSON.stringify(nextItem)};
    </script>
  `;
}