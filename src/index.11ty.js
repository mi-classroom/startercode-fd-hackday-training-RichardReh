exports.data = {
  layout: "default.11ty.js",
  title: "Home"
};

const generateItems = (itemData) => {

  const items = itemData.map(item => {
    return `
      <li>
        <a href="masterpieces/${item.inventory_number}/">
          <figure class="rounded-card ut-bo-shadow">
            <img
              src="${item.img_src}"
              title="${this.maskEntities(item.title)}">
            <figcaption class="ut-bg-gradient">
              <p>${item.title}</p>
              <dl class="additional-info">
                <dt>Zuschreibung:</dt>
                <dd>${item.involved_persons[0].name}</dd>
                <dt>Datierung:</dt>
                <dd>${item.dating}</dd>
                <dt>Inventarnummer:</dt>
                <dd>${item.inventory_number}</dd>
                <dt>Maße:</dt>
                <dd>${item.dimensions}</dd>
              </dl>
            </figcaption>
          </figure>
        </a>
      </li>
      
    `;
  });

  return items.join("");
}

exports.render = (data) => {
  const { masterpieces } = data.collections;
  const masterpiecesHTML = generateItems(masterpieces);
  return `
    <div class="ut-box-medium ut-more-vspace">
      <p class="herotext">Lucas Cranach der Ältere verkörpert die Ideale eines Mannes im Zeitalter der Renaissance, der neben seiner Tätigkeit als Maler, Grafiker und Buchdrucker auch als Politiker und Unternehmer tätig war. 1547 nahm Cranachs Tätigkeit als Hofmaler ein vorläufiges Ende, als Kurfürst Johann Friedrich I., der Großmütige, nach der verlorenen Schlacht bei Mühlberg von Kaiser Karl V. abgesetzt und gefangengenommen wurde. 1550 folgte Cranach seinem Herrn ins Exil nach Augsburg und Innsbruck. <a href="./about/">mehr über das Projekt</a>
      </p>
    </div>
    <ul id="overview" class="overview grid-container" data-view-mode="card-view">
      ${masterpiecesHTML}
    </ul>
  `;
};


