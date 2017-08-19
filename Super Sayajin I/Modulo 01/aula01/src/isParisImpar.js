const isEven = ( x ) => ( ( x % 2 ) === 0 )

const isOdd = ( x ) => ( ( x % 2 ) !== 0 )

const conjuntoDeEntrada = [ 0, 1, 2, 3, 4, 5, 6, 7 ]

const conjuntoDeSaidaPar = conjuntoDeEntrada.filter( isEven )

const conjuntoDeSaidaImpar = conjuntoDeEntrada.filter( isOdd )

console.log( 'conjuntoDeSaidaPar: ', conjuntoDeSaidaPar )

console.log( 'conjuntoDeSaidaImpar: ', conjuntoDeSaidaImpar )