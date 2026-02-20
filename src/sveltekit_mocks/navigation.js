import {inform} from './inform'
const info = inform('navigation')

export let afterNavigate = () => {
  info('afterNavigate')
}
export const setAfterNavigate = (value) => {afterNavigate = value}

export let beforeNavigate = () => {
  info('beforeNavigate')
}

export const setBeforeNavigate = (value) => {beforeNavigate = value}

export let disableScrollHandling = () => {
  info('disableScrollHandling')
}

export const setDisableScrollHandling = (value) => {disableScrollHandling = value}

export let goto = () => {
  info('goto')
}

export const setGoto = (value) => {goto = value}

export let invalidate = () => {
  info('invalidate')
}

export const setInvalidate = (value) => {invalidate = value}

export let invalidateAll = () => {
  info('invalidateAll')
}

export const setInvalidateAll = (value) => {invalidateAll = value}

export let onNavigate = () => {
  info('onNavigate')
}

export const setOnNavigate = (value) => {onNavigate = value}

export let preloadCode = () => {
  info('preloadCode')
}

export const setPreloadCode = (value) => {preloadCode = value}

export let preloadData = () => {
  info('preloadData')
}

export const setPreloadData = (value) => {preloadData = value}

export let pushState = () => {
  info('pushState')
}

export const setPushState = (value) => {pushState = value}

export let refreshAll= () => {
  info('refreshAll')
}

export const setRefreshAll= (value) => {refreshAll = value}

export let replaceState = () => {
  info('replaceState')
}

export const setReplaceState = (value) => {replaceState = value}
