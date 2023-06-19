// 1. 문자열 s의 길이가 4 혹은 6이고
// 2. 숫자로만 구성돼있는지 확인
// 3. 숫자만이면 true 아니면 false를 반환.

// 국환
function solution(s){
    if(s.includes('e') || isNaN(s)) return false
    return s.length === 4 || s.length === 6 ? true : false
}

//hj
function solution(s) {
    if(s.length ===4 || s.length === 6) {
        return s.split("").every(c => !isNaN(c)) // c가 숫자가 아니지 응 "문자" true 
                                                 // 문자면 false  => 하나의 반별 => 하나라도 false면 false 
                                                 // 모두가 true여야 true 
    } else {
        return false;
    }
}

// every
// [MDN] 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값
// 
// 

//sh
function solutionSh(s) {
//   let answer;
    
// if (s.length === 4 || s.length === 6)
   
//   if(isNaN(s)){ 
//             answer = false;
//          } else {
//             answer = true; 
//          }
     return (s.length === 4 || s.length === 6) && !isNaN(s)
}

//이유는 자바스크립트에서는 숫자에 
// e가 붙으면 지수로 인식하여 문자인 경우도 그냥 숫자로 인식해버린다는 것이었다.




////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`"123134" 판별 숫자니? ${isNaN("123134")}`) // false // 숫자가 아니지 아니 숫자야 
console.log(`"1231aa" 판별 숫자니? ${isNaN("1231aa")}`) // true  // 숫자가 아니지 응

function solution(s) {
  return (s.length === 4 || s.length === 6) && !isNaN(s)
}

// Ed 
function solutioEn(s) {
  return /^\d+$/.test(s) && (s.length === 4 || s.length === 6);
}

// 정규표현식
// 정규표현식.test 메서드 // 주어진 표현식을 test 하고 결과를 도출해주는 정규표현식 Regex
// 정규표현식은 슬러시 사이로 표현 /     / 
// ^ 시작을
// & 끝을
// /d 숫자를
// /D 문자를 
// /^\d+$/ : 주어진 문자열에서 시작과 끝에 한 자리 이상의 숫자만으로 구성되어 있는지를 탐색
// /\d/g : 주어진 문자열 개별의 요소에서 숫자가 있다면 true를 반환하기에 다음과 같은 차이가 있다. 

var s = "123abc";
// console.log(/^[0-9]+$/.test(s)); // false
// console.log(/[0-9]/g.test(s));   // true

// 5e3
// -4.01e-2
// "3e10" 지수표기법 : 310 제곱
// 3 * 10000000000 3 * 10의 10승