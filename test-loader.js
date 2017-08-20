const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let returnObj, resultSource;
    const callback = this.async();
    const options = loaderUtils.getOptions(this);

    // If path does not matches hello.js
    if (this.resourcePath.indexOf('hello') === -1) {
        return callback(null, source);
    }

    // console.log("Are we here ??");
    // Mark this loader output as non cacheable
    // this.cacheable(false);
    this.dependency("./global.js");
    callback(null, "/*TestLoader*/" + source);
};

