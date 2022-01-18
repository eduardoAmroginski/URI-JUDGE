var input = require("fs").readFileSync("dev/stdin", "utf8");
var [A, B, C, D] = input.split(" ").map(value => parseInt(value));

const testaValores = (A, B, C, D) => {

  let CD = C + D
  let AB = A + B

  if(B > C && D > A){
    if(CD > AB){
      if(C > 0 && D > 0){
        if(A % 2 === 0){
          console.log("Valores aceitos");
        }else{
          console.log("Valores nao aceitos");  
        }
      }else{
        console.log("Valores nao aceitos");  
      }
    }else {
      console.log("Valores nao aceitos");  
    }
  }else {
    console.log("Valores nao aceitos");
  }

}

testaValores(A, B, C, D);