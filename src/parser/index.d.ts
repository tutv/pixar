interface Parser {
    toHex(): String,

    toRGBA(): String,
}


declare function parser(): Promise<Parser>

export default parser
