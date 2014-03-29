Package.describe({
  summary: 'dimple - an object-oriented API for business analytics powered by d3.'
});

Package.on_use(function(api){
  api.add_files('dimple.js', 'client');
});

