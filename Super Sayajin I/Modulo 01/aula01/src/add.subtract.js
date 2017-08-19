const f = ( x ) => x
const inverse = ( x ) => x * -1

const add = ( y ) => ( x ) => x + y
const subtract = ( y ) => ( x ) => add( inverse( y ) )( x )

console.log( add( 4 )( 6 ) )
console.log( subtract( 4 )( 6 ) )

// const PA = ( y ) => ( x ) => x + y
// const PG = ( y ) => ( x ) => x * y

// const PA_razao2 = PA( 2 ) // ( x ) => x + 2
// const PA_razao5 = PA( 5 ) // ( x ) => x + 5

// console.log( PA_razao2( 5 ) )
// console.log( PA_razao5( 5 ) )
