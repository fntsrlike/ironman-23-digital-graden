import {
  kebabCase as _kebabCase,
  startCase as _startCase
} from 'lodash-es'

export const startCase = (str: string) => _startCase(str)
export const kebabCase = (str: string) => _kebabCase(str)
