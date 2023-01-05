function varTest() {
      var x = 31
      if (x > 0) {
        var x = 71  // c'est la même variable !
        console.log(x)  // 71
      }
      console.log(x)  // 71
    }
    
    varTest()

    function letTest() {
          let x = 31
          if (x > 0) {
            let x = 71  // c'est une variable différente
            console.log(x)  // 71
          }
          console.log(x)  // 31
        }
        
        letTest()
        
    