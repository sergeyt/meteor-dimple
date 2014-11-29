Package.describe({
  name: "sergeyt:dimple",
  summary: "dimple - an object-oriented API for business analytics powered by d3.",
  git: "https://github.com/sergeyt/meteor-dimple.git",
  version: "2.1.0_1"
});

Package.onUse(function(api){
  var client = ["client"];
  api.versionsFrom("METEOR@1.0");
  api.use(['d3js:d3@3.4.13'], 'client');
  api.addFiles("dimple.js", client);
});
