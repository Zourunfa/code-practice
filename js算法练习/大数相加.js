let a = "9007199254740991";
let b = "1234567899999999999";

const getSum = function(a,b){
  let maxLen = Math.max(a.length,b.length)

  a = a.padStart(maxLen,0)
  b = b.padStart(maxLen,0)

  let f=0,t=0,sum ='0'

  for(let i=maxLen -1;i>0;i--){
    t = parseInt(a[i])+parseInt(b[i])+f
    f= Math.floor(t/10)
    sum = t%10 +sum
  }
  return sum;
  
}
console.log(getSum(a,b));