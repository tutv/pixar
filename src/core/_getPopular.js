module.exports = (colors) => {
    const arr = Array.isArray(colors) ? colors : []

    if (!arr.length) {
        throw new Error('Colors is empty.')
    }

    const count = {}
    let max = 0
    let popularColor = null
    const _countColor = (color) => {
        const {r, g, b, a} = color
        const key = `${r}-${g}-${b}-${a}`

        if (!count.hasOwnProperty(key)) {
            count[key] = 1
        } else {
            count[key]++
        }

        if (count[key] > max) {
            max = count[key]
            popularColor = Object.assign({}, color)
        }
    }

    arr.forEach(color => {
        const keys = ['r', 'g', 'b', 'a']
        let valid = true
        keys.forEach(key => {
            if (!color.hasOwnProperty(key)) {
                valid = false
            }
        })

        if (!valid) return false

        _countColor(color)
    })

    return popularColor
}
