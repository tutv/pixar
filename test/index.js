const path = require('path')
const {parse} = require('../src/index')


setImmediate(async () => {
    const file = path.join(__dirname, 'test.png')

    try {
        const parsed = await parse(file, {
            top: 1,
            left: 1,
            width: 20,
            height: 20,
        })

        const x = parsed.toHex()
        const rgba = parsed.toRGBA()
        console.log('Hex:', x)
        console.log('RGA:', rgba)
    } catch (error) {
        console.log("ERROR", error)
    }
})

