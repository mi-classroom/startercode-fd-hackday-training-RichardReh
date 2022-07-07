exports.data = {
  layout: "artefact.11ty.js",
  collectionID: "masterpieces",
  entityType: "masterpieces",
  pagination: {
    data: "collections.masterpieces",
    size: 1,
    alias: "masterpiece",
    currentCollection: "collections.masterpieces",
  },
  permalink: function(data){
    const item = data.pagination.items[0];
    return `/masterpieces/${item.inventory_number}/`;
  }
};

exports.render = (data) => {
  return data.pagination.items[0];
};


