module.exports = (number) => {
    const alpha = number / 255

    return Math.round((alpha + Number.EPSILON) * 10000) / 10000
}

