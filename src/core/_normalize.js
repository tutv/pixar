const _toAlpha = require('./_toAlpha')

const _parseLocation = (location, width, height) => {
    if (!location || typeof location !== 'object') return false

    const {top, left, width: nWidth, height: nHeight} = location
    if (top < 0 || left < 0 || nWidth <= 0 || nHeight <= 0) {
        return false
    }


    return {
        top,
        left,
        width: nWidth,
        height: nHeight,
    }
}


module.exports = (result, location = null) => {
    const colors = []
    let ob = {}

    const [width, height] = result.shape
    const vLocation = _parseLocation(location, width, height)

    result.data.forEach((pixel, index) => {
        const d = index % 4
        d === 0 && (ob.r = pixel)
        d === 1 && (ob.g = pixel)
        d === 2 && (ob.b = pixel)
        if (d === 3) {
            ob.a = _toAlpha(pixel)

            const clone = Object.assign({}, ob)
            colors.push(clone)
        }
    })

    if (!vLocation) {
        return {
            colors,
            width,
            height
        }
    }

    const {width: nWidth, height: nHeight, top, left} = vLocation


    const croppedColors = []
    for (let y = top; y < top + nHeight && y < height; y++) {
        for (let x = left; x < left + nWidth && x < width; x++) {
            const index = y * width + x
            const color = Object.assign({}, colors[index])

            console.log('X', x, y)
            croppedColors.push(color)
        }
    }


    return {
        colors: croppedColors,
        width: nWidth,
        height: nHeight
    }
}

