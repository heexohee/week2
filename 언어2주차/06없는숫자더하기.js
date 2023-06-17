function so (numbers) {
  return
}

so([1,2,3,4,6,7,8,0])

function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i;
    }
    return answer;
}

function solution2 (numbers) {
  let num = 0
  for(let i=0;i<10;i++) {
      if (numbers.indexOf(i) < 0) num += i
  }
  return num
}

// var / let / const 
// ES5 이전에는 var // var의 한계
// ES6 let, const 가 권장 // 브라우저는 ES6 몰라요 // 바벨 // ES6 기록한 코드를 ES5 변환해서 멍청한 브라우저가 알아듣도록 //
// ECMA 스크립트:범용 스크립트 언어 // 자바스크립트의 표준문서
// ES6 이전대비, 엄청나게 변화 // ES12
  // var (함수스코프 => {블록}보다 큰 개념) => let/const (블록스코프 {스코프 범위를 못넘어감})
  // 전역변수가 오염될 수 있고, 재선언이 가능해서 
  // var a = 0 // 무시
  // ....
  // var a = "문자열" // 이것만 동작 // error를 안가르쳐 줌
  // let a = 0
  // let a 쓰는 순간 너 위에서 이거 썼어 // const // 변수 // let 
  // 리액트 const 배열/객체/함수 => 참조값 // const 변하지 않는 값 // 윈시형 불변성 문제로 변하는데 // 배열/객체/함수는 불변성유지가 안되서 const 무관 
  // var 안써요... !!

  // 화살표함수
  // 템플릿 리터럴(백틱(``)) "문자열"+"문자열" => `문자열 문자열`
  // 함수의 매개변수 초기값 => function solution(numbers = 0)
  // 배열구조분해 할당 :  const [a, b] = data.split(" "); // [a, b]
  // 객체구조분해 할당 :  const {a, b} = data.split(" "); // {a=a, b=b} 
  // 객체 리터럴 : {a, b} 

// findIndex() : 배열에서 만족하는 첫번째 요소의 인덱스를 반환
// indexOf() : 배열에서 만족하는 첫번째 요소의 인덱스를 반환 
// findLast() : 배열에서 만족하는 마지막 요소의 인덱스를 반환
// filter() : 일치하는 요소 전부를 배열로 반환할 때  

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.findIndex(element => element === 3)); // 2
// findIndex()와 indexOf()는 비슷한 결과를 반환하지만 
// findIndex()는 조건을 만족하는 요소를 찾을 때까지 배열을 순회하므로 더 많은 연산을 수행합니다.
