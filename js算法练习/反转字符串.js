var reverseString = function(s) {
  let res = []
  for(let a of s){
      res.unshift(a)
  }
  return res
};

console.log(reverseString(["h","e","l","l","o"]));