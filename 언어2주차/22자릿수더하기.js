function solution(n) { 
  return [...String(n)].reduce((pre, cur) => pre+(+cur), 0)
  return [...String(n)].reduce((pre, cur) => pre+Number(cur), 0) 
                                                    // A고객기 분기별로 내야하는 총보험료를 반환해랴 
                                                    // cur 분기별 보혐료
                                                    // a // 분기별 할증료
                                                    // b // 분기별 세금....
} 

// 123 => [...String(123)] =>  ["1","2","3"] 
// pre+Number(cur)
// // 0+1
// // 1+2
// // 3+3 // 6 반환해요 => 배열을 하나의 값으로 출력하는 메서드 reduce((매개변수1, 매개변수2)


//소히
function solution(n) // Number 123
{
    let answer = 0;
    let my = String(n); // String "123"
    for ( let i=0; i < my.length; i++){
        // answer += Number(my[i]);  // 인덱스접근 // Number 1 / 2 / 3 
        answer += (+my[i]); // 2.형변환 방법 //3.parseInt()
    }
    return answer;
}

// 자료형을 변환해보는 문제 
// 숫자 // 각자리수마라 // 문자열 // String(숫자) // Number(문자열)

// map 은 배열의 길이만큼 새로운 배열울 생성
// 배열 메소드 . reduce (()=> )   // 배열을 "하나의 값"으로 출력
// 동일한 길이의 두 배열을 각 요소의 위치를 기준으로 더하는 문제
// 매개변수 (누산값, 현재요소, 인덱스) => 누산값 + (현재요소+otherArray[인덱스]), 0 초기값 // 

function solution2(n) {
  let str = n.toString();
  let nArr = Array.from(str);  // Object ["123"]
  let answer = 0;
  for (i = 0; i < nArr.length; i++) {
      answer += parseInt(nArr[i])
  }
  return answer;
}


function solution3(n) {
  let str = n.toString();
  let nArr = Array.from(str, x => x + x);
  return nArr[nArr.length - 1];
}

console.log(typeof 123, JSON.stringify(123))
console.log(typeof "123", JSON.stringify("123"))
console.log(typeof Array.from("123"), JSON.stringify(Array.from("123")))

// [...String(n)]  // // n.toString()  Array.from(str);  => [...String(n)] // "문자열".split("") // [..."문자열"] // ["문자열"]
// .reduce((pre, cur) => 
//   pre+Number(cur),  //  answer += parseInt(nArr[i])
//    0 =answer)

// 123 // [...String(n)] : ["123"]
// // 1 , 2 ,3 => answer +=
