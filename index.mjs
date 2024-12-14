import bestPracticesConfig from './rules/best-practices.mjs'
import errorConfig from './rules/errors.mjs'
import es6Config from './rules/es6.mjs'
import importsConfig from './rules/imports.mjs'
import nodeConfig from './rules/node.mjs'
import styleConfig from './rules/style.mjs'
import variablesConfig from './rules/variables.mjs'

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  bestPracticesConfig,
  nodeConfig,
  errorConfig,
  importsConfig,
  styleConfig,
  variablesConfig,
  es6Config
]
