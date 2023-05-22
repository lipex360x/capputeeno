/* eslint-disable func-names */
import type { NodePlopAPI } from 'plop'
import components from './modules/components'
import icons from './modules/icons'

export default function (plop: NodePlopAPI) {
  plop.setGenerator('components', components)
  plop.setGenerator('icons', icons)
}
