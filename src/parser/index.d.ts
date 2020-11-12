type FileOrBuffer = String | Buffer

interface Location {
    top: Number,
    left: Number,
    width: Number,
    height: Number,
}

type Hex = String
type RGBA = {
    r: Number,
    g: Number,
    b: Number,
    a: Number,
}


interface Parser {
    toHex(): Hex,

    toRGBA(): RGBA,
}


declare function parser(input: FileOrBuffer, location?: Location): Promise<Parser>

export default parser
