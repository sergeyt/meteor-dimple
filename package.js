Package.describe({
  summary: 'dimple - an object-oriented API for business analytics powered by d3.'
});

Package.on_use(function(api){
  api.add_files('dimple/dist/dimple.v1.1.5.min.js', 'client');
});

