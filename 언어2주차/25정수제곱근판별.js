function solution (n) {
  return Number.isInteger(Math.sqrt(n)) 
          ? Math.pow(Math.sqrt(n)+1, 2) // ** 2  제곱연산자 
          : -1
}

// 정수판별 메서드 Number.isInteger() : 정수인지 true 실수인지 false 
// 숫자의 제곱근을 반환 Math.sqrt(n)
// 숫자의 제곱을 반환 Math.pow(숫자, 제곱) // 2제곱, 3제곱.... 
//  Math.pow() bigint x, ** 2 bigint o

//isInteger -> 정수 여부 판별해서 반환값을 t/f로 주는 메서드

function solution(n) {
	return Number.isInteger(Math.sqrt(n))
          ? (Math.sqrt(n) + 1) ** 2 
          : -1;
}

//sh
function solution(n) {
  
  if (Math.sqrt(n) === parseInt(Math.sqrt(n)) ) {   // 121 === 11  /// 정수인지 실수인지 판별 // Math.sqrt(n) === parseInt(Math.sqrt(n)) 
      return (Math.sqrt(n)+1) ** 2;
}
  else {
    return - 1;
  }
}
//삼항연산자해보자~ 
function solution(n) {
  // Number.isInteger(이게) // 이게 정수니? 진위값으로 반환해 주는 메서드  
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n)+1) ** 2 : - 1
}

// if else 키워드를 안쓰고
// 조건 () 소괄호를 안쓰고 
// 조건 ? true 일 때 return : false 일 때 return