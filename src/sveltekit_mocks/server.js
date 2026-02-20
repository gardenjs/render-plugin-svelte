import {inform} from './inform'

const info = inform('server')

export let read = () => {
  info('read')
}

export const setRead = (value) => {
  read = value
}

export let command = () => {
  info('command')
}

export const setCommand = (value) => {
  command = value
}

export let form = () => {
  info('form')
}

export const setForm = (value) => {
  form = value
}

export let getRequestEvent = () => {
  info('getRequestEvent')
}

export const setGetRequestEvent = (value) => {
  getRequestEvent = value
}

export let prerender = () => {
  info('prerender')
}

export const setPrerender = (value) => {
  prerender = value
}

export let query = () => {
  info('query')
}

export const setQuery = (value) => {
  query = value
}

