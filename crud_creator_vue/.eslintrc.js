module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'quotes': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'single', { avoidEscape: true }], // com aspas simples
		'spaced-comment': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço depois de comentário
		'space-before-blocks': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'always'], // espaço antes de bloco de código
		'indent': process.env.NODE_ENV === 'production' ? 'off' : ['error', 'tab'], // identação por tabulação
		'semi': ['error', 'never'], // sem ponto e vírgula
		'no-tabs': 0, // com tabulação
		'curly': 'off', // if de somente 1 (um) comando pode não ter chaves
		'no-mixed-operators': 'off', // permite que os operadores '&&' e '||' possam ser usados misturados sem parênteses
		'no-unused-vars': 'off', // variáveis declaradas não precisam necessariamente ser usadas
		'require-atomic-updates': 'off', // permite ações sincronas independentes serem realizadas depois de await
		'no-mixed-spaces-and-tabs': 'off', // permite que espaços e tabulações sejam misturados
		'no-irregular-whitespace': 'off', // permite que qualquer tipo de espaço em branco ocorra em conjunto com outros
		'object-curly-newline': 'off', // permite a utilização de "formatação" mais livre na criação de objetos literiais
		'object-curly-spacing': 'off', // permite a não existência de espaço antes de fechar chaves
		'padded-blocks': 'off', // permite que espaços vazios sejam coloados antes e depois de escopos
		'no-useless-constructor': 'off', // permite construtores não usados
		'promise/param-names': 'off', // permite que parâmetros de Promise tenham qualquer nome
		// 'no-eval': 'off', // permite a utilização do eval
		// 'linebreak-style': 'off', // não se importar com LF ou CRLF
  }
}
