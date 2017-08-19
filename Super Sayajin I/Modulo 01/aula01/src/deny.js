const f = ( x ) => x
const inverse = ( x ) => x * -1

const add = ( x, y ) => x + y
const subtract = ( x, y ) => add( x, inverse( y ) )

console.log( add( 6, 4 ) )
console.log( subtract( 6, 4 ) )