// Edwin 
function solutionEn (num) {
  let result = new Set()
  for(let i=0;i<num.length;i++) {
    for(let j=i+1;j<num.length;j++) {
      result.add(num[i]+num[j])
    }
  }
  return [...result].sort((a,b)=>a-b)
}

console.log(solutionEn([2,1,3,4,1]))