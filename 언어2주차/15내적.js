//.reduce(누산기, 현재요소, index)
// a + b[index]

//hyunjoo

// a = [1,2,3,4]
// b = [-3,-1,0,2] // 1 // 3 // => a열에 각 요소에 n만큼을 곱하고, 이를 " 하나의 값 "으로 출력하세요. 
// 두개의 배열 동일할 경우 
// 초기값이 0, []
// 어떤 처리한 결과로 하나의 배열을 만들 수도 있어요 >> acc.push(a[i]*b[i]*c[*]) >> acc = [A의최종보험료, B의최종보험료, C.....] >> A의 보험료는 얼마입니다. 
// 한사람의 1천 보험료 // 할인률을 // 마일리지...... 


// function solution(a,b){
//     return a.reduce((acc, cur, i) => acc + (cur* b[i]),0);
// }

// result = 0
// (매개변수의 첫자리, ) => .......... , 0
// a[i]
// (매개변수의 첫자리, 매개변수의 두번째자리)  ....... cur  // for (let i = 0; i < a.length; i++)
// a[i] * b[i]
// (매개변수의 첫자리, 매개변수의 두번째자리, 세번째자리(0 > 1 > 2 > 3)  cur * b[i])
// result += a[i] * b[i];
// 매개변수의 첫자리 + (cur* b[i])
// return result;
//  a.reduce => 계산된 하나의 값을 내보내기에, 두 코드는 같다. 

// aaa = 누산기 bbb = 배열의 현재 요소 i = 배열 요소의 인덱스
// 누산기 + (배열 현재요소 * b배열[인덱스])
// 누산기의 값 초기화를 0으로
// 반환 값 = 누산기 + (배열 현재요소 * b배열[인덱스])


//sohee
function solution(a,b) {
  return a.reduce((aaa, bbb, i) => aaa + (bbb * b[i]), 0);
}



//sohee
function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

// += // 이 아이의 가르쳐주세요. 용도랑 