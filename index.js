var compiler = require('vue-template-compiler');

exports.handlers = {
  beforeParse: function (e) {
    if (/\.vue$/.test(e.filename)) {
      var output = compiler.parseComponent(e.source);

      console.log("================")
      console.log(output)
      console.log("================")


      e.source = output.script ? output.script.content : '';
    }
  }
};
