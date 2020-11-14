const getPixels = require('luxojr')
const _normalize = require('./_normalize')


module.exports = async (fileOrBuffer, location = null) => {
    const result = await getPixels(fileOrBuffer)

    return _normalize(result, location)
}

