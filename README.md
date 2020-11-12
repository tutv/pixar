# pixar

## Installation
```bash
npm i --save pixar

#or

yarn add pixar
```

## Usage
```js
const path = require('path')
const {parse} = require('pixar')


setImmediate(async () => {
    const file = path.join(__dirname, 'test.png')

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
    } catch (error) {
        console.log("ERROR", error)
    }
})
```