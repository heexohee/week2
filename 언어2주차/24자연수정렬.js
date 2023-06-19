function solutionEn (n) {
  return Number([...String(n)].sort().join(""))
  return +([...String(n)].sort().reverse().join(""))
  return Number([...String(n)].sort().reverse().join(""))
  return +([...String(n)].sort().reverse().join(""))
}


function solution(n) {
	return parseInt([...String(n)].sort((a, b) => b - a).join(""));
}


//sh
function solution(n) {
  
    return Number([...String(n)].sort((a, b) => b - a).join("")); 
}




console.log(parseInt("12312312asfadsfasdfasdfasdfasdf")) // 숫자로 시작하는 +문자열 조합에서 숫자만 추출 // 12312312
//숫자만 추출


// sort 메서드의 기본 정렬은 유니코드 포인트, 숫자형도 일시적으로 문자형으로 변환 후 
// 정렬하므로 숫자 요소를 정렬할 때는sort메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달! 
// sort() UFT-8 기준으로 정렬 // 문자열 정렬 // 유니코드 // a 81 
// sort((a,b) => b-a) 내림차순 // 숫자열, 문자열 // 
// sort((a,b) => a-b) 오름차순 // 숫자열 

/// [3,2,1]
// sort((a,b) => a-b) 
// 3 2 // 1 // =>  2 3 
// 2 1 // 1 // => 1 2 3 