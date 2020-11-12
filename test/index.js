const path = require('path')
const {parse} = require('../src/index')


setImmediate(async () => {
    const file = path.join(__dirname, 'test.png')
    const start = Date.now()

    try {
        const parsed = await parse(file, {
            top: 1,
            left: 1,
            width: 100,
            height: 100,
        })

        const x = parsed.toHex()
        const rgba = parsed.toRGBA()
        console.log('Hex:', x)
        console.log('RGA:', rgba)

        const finish = Date.now() - start
        console.log('Time:', finish)
    } catch (error) {
        console.log("ERROR", error)
    }
})

