// function solution (a, b) {
//  return (a+b)* (Math.abs(b-a)+1)/2;
// }

//solution(3,5)

// 등차수열 = (두 수를 더한 값 * 두 수를 뺀수의 절대값+1) / 2 
// (a+b)* (Math.abs(b-a)+1)/2;

function solution(a,b) {
    var answer =0;
    var min = Math.min(a,b);
    var max = Math.max(a,b);
    for (var i =min; i <= max; i++) {
        answer += i;
    }
    return answer;
}

function solution3 (a,b) {
  let [num1, num2] = [a,b].sort((a,b)=>a-b) 
  let result = 0
  for(let i=num1; i<=num2; i++) {
      result += i
  }
  return result
}

// 등차수열 : (두수를 더한 값 * 절대값(뺀수)+1)/2