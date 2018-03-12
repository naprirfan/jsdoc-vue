var compiler = require('vue-docgen-api');

exports.handlers = {
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      var output = compiler.parse(e.source);

      console.log("====================")
      console.log(output)
      console.log("====================")

      e.source = output.script ? output.script.content : '';
    }
  }
};
