const path = require('path');
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    let returnObj, resultSource;
    // const callback = this.async();
    const options = loaderUtils.getOptions(this);

    // If path does not matches hello.js
    if (this.resourcePath.indexOf('hello') === -1) {
        return source;
    }

    console.log("Are we here ??", this.getDependencies());
    // Mark this loader output as non cacheable
    // this.cacheable(false);
    this.addDependency(path.resolve("./global.js"));
    console.log("Are we here ??", this.getDependencies());
    return "/*TestLoader*/" + source;
};

