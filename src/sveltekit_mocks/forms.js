import {inform} from './inform'
const info = inform('forms')

export let applyAction = () => {
  info('applyAction')
}

export const setApplyAction = (value) => {
  applyAction = value
}

export let deserialize = () => {
  info('deserialize')
}

export const setDeserialize = (value) => {
  deserialize = value
}

export let enhance = () => {
  info('enhance')
}

export const setEnhance = (value) => {
  enhance = value
}
