const getPixels = require('get-pixels')
const _normalize = require('./_normalize')


const _parse = async (fileOrBuffer) => {
    return new Promise((resolve, reject) => {
        getPixels(fileOrBuffer, (error, pixels) => {
            if (error) return reject(error)

            return resolve(pixels)
        })
    })
}


module.exports = async (fileOrBuffer, location = null) => {
    const result = await _parse(fileOrBuffer)

    return _normalize(result, location)
}

