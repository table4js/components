function PascalCaseNamePlugin(options) {
}

PascalCaseNamePlugin.prototype.apply = function(compiler) {
    const REGEXP_NAME = /\[pc-name\]/gi;

    compiler.hooks.compilation.tap("PascalCaseNamePlugin", compilation => {
        const mainTemplate = compilation.mainTemplate;

        mainTemplate.hooks.assetPath.tap(
            "PascalCaseNamePlugin",
            (path, data) => {

                const chunk = data.chunk;
                const chunkName = chunk && (chunk.name || chunk.id);

                if (typeof path === "function") {
                    path = path(data);
                }

                return path.replace(REGEXP_NAME, (match, ...args) => {
                    return chunkName.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("");
                });
             }
        );
    })
}

module.exports = PascalCaseNamePlugin;