var arr = new Array() // Dette er en måte å lage et array på.

var bracketNotation = []; // Dette er en annen måte.
// [] blir kalt et literal

/*
 * 1. Arrays kan ha en kolleksjon av verdier
 * 2. Arrays kan iterere over verdier
 * 3. Arrays kan inneholde andre arrays, objekter og lignende
 * 4. Man kan finne verdien til en posisjon i Arrayet.
 * 5. Arrays har ulike metoder
 */


// 1. 

var collection = [1,2,3,4,5,6,7]

// 2.

collection.forEach( function(num) {
  console.log(num);
  // 1
  // 2
  // 3 
  // ....
  return true;
});


// 3. 

var snurreSprett = [{prop: 'desc'}, 'Ole Brum', 1, ['Nested', 'Value']];
console.log(snurreSprett)


// 4. 

var navnTilArrayet = [1,4,5,9,10]
console.log(navnTilArrayet[0]) // 1
console.log(navnTilArrayet[3]) // 9

// 5. 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



