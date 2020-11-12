const _getColors = require('../core/_getColors')
const _getPopular = require('../core/_getPopular')
const toHex = require('./toHex')
const toRGBA = require('./toRGBA')


module.exports = async (fileOrBuffer, location = null) => {
    const {colors} = await _getColors(fileOrBuffer, location)
    const color = await _getPopular(colors)

    return {
        toHex: toHex(color),
        toRGBA: toRGBA(color),
    }
}


