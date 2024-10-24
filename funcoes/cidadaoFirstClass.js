function soma (a, b) {
    let s = a + b;
    return function(c) {
      console.log( s + c )
    }
  }
  
  soma (3, 4)(2);
  
  function somaCom100 (a, b) {
    let s = a + b;
    return function(c) {
      let ss = s + c
      return function(d) {
        let sss = ss + d
        console.log(sss)
      }
    }
  }
  somaCom100(3, 4)(2)(100);

function soma2 (a = 15, b = 15) {
    return a + b;
  } 
  
  console.log(soma2(), soma2(1), soma(220, 20))

  const s = soma2();
  console.log(s(30, 30))