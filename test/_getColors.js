const path = require('path')
const getColors = require('../src/core/_getColors')
const _getPopular = require('../src/core/_getPopular')


setImmediate(async () => {
    const file = path.join(__dirname, 'test.png')
    const start = Date.now()

    try {
        const {colors, width, height} = await getColors(file, {
            top: 1,
            left: 1,
            width: 1,
            height: 2,
        })
        console.log(colors)
        console.log(width, height)
        const color = await _getPopular(colors)
        console.log(color)

        const finish = Date.now() - start
        console.log('Time:', finish)
    } catch (error) {
        console.log("ERROR", error)
    }
})

