module.exports = function override(config, env) {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.oneOf) {
            rule.oneOf = rule.oneOf.map(subRule => {
                if (subRule.test && subRule.test.toString().includes('js|jsx|ts|tsx')) {
                    subRule.use = subRule.use.map(loader => {
                        if (loader.loader && loader.loader.includes('babel-loader')) {
                            loader.options = {
                                ...loader.options,
                                plugins: [
                                    ...(loader.options.plugins || []),
                                    '@babel/plugin-proposal-class-properties',
                                    '@babel/plugin-proposal-private-methods',
                                    '@babel/plugin-proposal-optional-chaining',
                                    '@babel/plugin-transform-runtime'
                                ]
                            };
                        }
                        return loader;
                    });
                }
                return subRule;
            });
        }
        return rule;
    });

    return config;
};