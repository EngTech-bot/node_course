newFunction()

function newFunction() {
   const obj = {
      a: 20,
      b: 14,
      c: 'Hello World',
   }

   const fct = (ob) => {

      const { c, b } = ob // Destructuring

      return `La somme de ${c} et ${b} est ${c + b}`
   }
   console.log(fct(obj))
}
    