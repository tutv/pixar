const _hexColorDelta = require('../core/_hexColorDelta')


module.exports = (color, colors = []) => {
    const vColors = Array.isArray(colors) ? colors : []
    if (!vColors.length) {
        throw new Error('Please provide list colors to get similar color.')
    }

    let max = 0
    let similarColor = false
    vColors.forEach(_color => {
        const delta = _hexColorDelta(color, _color)

        if (delta > max) {
            max = delta
            similarColor = _color
        }
    })

    return similarColor
}