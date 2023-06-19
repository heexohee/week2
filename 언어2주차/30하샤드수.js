// 양의 정수 x가 하샤드 수이려면
// x의 자릿수의 합으로 x가 나누어져야 한다. 
// 10 = 1로 나눠지고
// 12 = 3으로 나눠지고 
// 11 != 2로 나눠지지 않는다를 출력 



function solution(x) {
  return !(x%[...String(x)].reduce((pre, cur) => pre+(+cur),0))
}

// (x%[...String(x)].reduce((pre, cur) => pre+(+cur),0)) 결과가 하샤드면 0
// 하샤드가 아니면 0보다 큰 수가 나오겠죠 
// 블리언 판별에서 0은 false 이기에, ! 를 통해서 값을 변경하여, 0 === false 이면, true 가 반환되면 되쥬... 

function solution(x) {
	return x % [...String(x)].reduce((i, j) => i+(+j), 0) === 0 ? true : false;
}

//sh 챗선생님
//  Array.from(String(x), Number)


function isHarshadNumber(x) {
    // const sumOfDigits = Array.from(String(x), Number)
    //   .reduce((sum, digit) => sum + digit, 0);
  
    // return x % sumOfDigits === 0;
    return  x%Array.from(String(x), Number).reduce((pre, cur) => pre+cur, 0) === 0
  }

// (x%[...String(x)].reduce((pre, cur) => pre+(+cur),0)) = 0
// 0 진위값에서 false
// !(x%[...String(x)].reduce((pre, cur) => pre+(+cur),0)) // 0 true // 0 이 아니면 false 
  

// let x = 10  
// Array.from(String(x))
// String(x).split("")
// ["1", "0"]
// Array.from(String(x), Number) // 형반환을 시켜주네요?  // [1, 0]

