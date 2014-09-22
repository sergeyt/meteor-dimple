Package.describe({
  name: "sergeyt:dimple",
  summary: "dimple - an object-oriented API for business analytics powered by d3.",
  git: "https://github.com/sergeyt/meteor-dimple.git"
});

Package.onUse(function(api){
  api.versionsFrom("METEOR@0.9.1");
  api.addFiles("dimple.js", "client");
});

