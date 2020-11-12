const {getSimilarColor} = require('../src/index')


setImmediate(async () => {
    const color = '#0a8455'
    const colors = ['#10a068', '#2053a2', '#f2ced8', '#ffb43d', '#91b8e1']
    const similar = getSimilarColor(color, colors)
    console.log(similar)
})

