const times = ( y ) => ( x ) => {

  let result = 0

  while ( y > 0 ) { // ( y )
    result = x + result
    y = y - 1
  }

  return result
}

console.log('3 times 4: ', times( 4 )( 3 ) ) // 3 times 4: