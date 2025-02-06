module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-runtime',  // 추가적으로 이 플러그인도 필요할 수 있습니다.
        '@babel/plugin-transform-react-jsx', // JSX 변환을 위한 플러그인 추가
        '@babel/plugin-syntax-jsx'  // JSX 문법을 처리하는 플러그인 추가
    ],
};