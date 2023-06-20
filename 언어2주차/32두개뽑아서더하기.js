// Edwin 
function solutionEn (num) {
  let result = [];
  for(let i=0;i<num.length;i++) {
    for(let j=1;j<num.length;j++) {
      result.push(num[i]+num[j])
    }
  }
  return result.sort((a,b) => b-a)
}

console.log(solutionEn([2,1,3,4,1]))


// me
function solution(numbers){
    let answer = [];
    for(i in numbers){
        for(j in numbers){
            i !== j && answer.push(numbers[i]+numbers[j])
        }
    }
    let [...a] = new Set(answer)
    return a.sort((a,b)=>a-b)
}

//hj
function solution(n) {
  let answer =[];

  for(let i =0, max = n.length; i<max; i++) {
    for(let j=0; j<max; j++){
      i !== j 
        && ! answer.includes(n[i]+n[j]) 
        && answer.push(n[i]+n[j]);
      }
    }
  return answer.sort(function(a,b){return a-b;});
}
















