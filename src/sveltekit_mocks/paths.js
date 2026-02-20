import {inform} from './inform'

const info = inform('paths')

export let base = ''
export let setBase = (value) => (base = value)

export let assets = ''
export let setAssets = (value) => (assets = value)

export let relative = true
export let setRelative = (value) => (relative = value)

export let match = () => {
  info('match')
}

export const setMatch = (value) => {
  match = value
}

export let resolve = () => {
  info('resolve')
}

export const setResolve = (value) => {
  match = value
}

export const resolveRoute = () => {
  info('resolveRoute')
}
