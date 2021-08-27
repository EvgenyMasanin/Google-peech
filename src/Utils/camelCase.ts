export function camelCase(string: string) {
  const camelCaseString = string
    .split(' ')
    .map((str: string, index: number) => {
      const lowerStr = str.toLowerCase()
      if (index > 0) {
        return lowerStr[0].toUpperCase() + lowerStr.slice(1)
      }
      return lowerStr
    })
    .join('')
  return camelCaseString
}
