const path = require('path');

module.exports = function override(config, env) {
    // Babel 설정을 추가합니다.
    config.module.rules = config.module.rules.map((rule) => {
        if (rule.oneOf) {
            rule.oneOf = rule.oneOf.map((subRule) => {
                // .js, .jsx, .ts, .tsx 파일 처리할 수 있게 Babel 설정 추가
                if (subRule.test && subRule.test.toString().includes('js|jsx|ts|tsx')) {
                    subRule.use = subRule.use.map((loader) => {
                        if (loader.loader && loader.loader.includes('babel-loader')) {
                            loader.options = {
                                ...loader.options,
                                presets: [
                                    ...loader.options.presets,
                                    '@babel/preset-env', // 최신 자바스크립트 기능을 사용하도록 설정
                                    '@babel/preset-react' // React JSX 구문 처리
                                ],
                                plugins: [
                                    ...loader.options.plugins,
                                    '@babel/plugin-proposal-class-properties',  // class-properties 지원
                                    '@babel/plugin-proposal-private-methods',   // private-methods 지원
                                    '@babel/plugin-proposal-optional-chaining',  // optional-chaining 지원
                                    '@babel/plugin-transform-runtime',           // transform-runtime 플러그인 추가
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