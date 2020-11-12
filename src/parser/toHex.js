module.exports = (color) => () => {
    const {r, g, b, a} = color

    const outParts = [
        r.toString(16),
        g.toString(16),
        b.toString(16),
    ]

    if (a < 1) {
        outParts.push(Math.round(a * 255).toString(16).substring(0, 2))
    }

    // Pad single-digit output values
    outParts.forEach(function (part, i) {
        if (part.length === 1) {
            outParts[i] = '0' + part;
        }
    })

    return ('#' + outParts.join(''))
}

