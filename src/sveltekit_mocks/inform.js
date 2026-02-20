function capitalizeWord(word) {
  if (word && word.length > 1) {
    return word.charAt(0).toUpperCase() + word.substring(1)
  }
  return word
}

export const inform = (package) => (propName) => {
  const message = `Mocked Sveltekit object $app/${package}.${propName} was called. You can customize the mocked function by overriding the value. Use $app/${package}.set${capitalizeWord(propName)}`
  console.log(message)
}
