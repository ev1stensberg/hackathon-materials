function() {
  return;
}

/*
 * 1. Funksjoner endrer på en verdi
 * 2. Den trenger ikke å gjøre det
 * 3. Funksjoner kan gjøre en endring av en verdi og returnere det
 * 4. Funksjoner kan utføre operasjoner
 * 5. Funksjoner får noe til å skje igjennom operasjoner
 */
 
 var func = function(x) {
   return x*x
 }
 console.log(func(2))
 
 var funksjon = function(y, x) {
   y += x
   return y
 }
 
 console.log(funksjon(1,4))
 
 // Les: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions