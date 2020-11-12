# pixar

## Installation
```bash
npm i --save pixar

#or

yarn add pixar
```

## Usage

### 1. Pick color from image

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

### 2. Get similar color
```js

const {getSimilarColor} = require('pixar')


setImmediate(async () => {
    const color = '#0a8455'
    const colors = ['#10a068', '#2053a2', '#f2ced8', '#ffb43d', '#91b8e1']
    const similar = getSimilarColor(color, colors)
    console.log(similar)
})


```