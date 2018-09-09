import UAParser from 'ua-parser-js'

const Parser = new UAParser.UAParser()

export const isMobile = () => {
  if (Parser.getDevice().type) {
    return Parser.getDevice().type !== undefined
  } else {
    return false
  }
}
