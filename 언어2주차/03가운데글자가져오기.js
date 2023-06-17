function solution(s) {
  var answer = "";
  let location = s.length/2
  if(s.length%2==0){//짝수일 경우
    answer =s[location-1] + s[location]
  } else {
    answer =s[Math.floor(location)];//홀수일 경우
  }
  return answer;
}

solution("abcde");
solution("qwer");

// 인수가 짝수일 때 가운데랑
// 인수가 홀수일 때 가운데랑

function solution2(s) {
  let location = s.length/2 
  return s.length%2===0 
          ? s.substring(location-1, location+1)  // 짝수일 때
          : s.charAt(Math.floor(location)) // 홀수일 때 
}

solution2("abcde");
solution2("qwer");

// [] => charAt()
// "asdfa asdfasd asdfasdf" // 공백 " "
// "문자열"[] // 공백 undefined => error 
// "문자열".charAt() // 공백은 반환 안하기에, error 
// 부분탐백 어디에서~어디까지 => substring(어디에서, 어디직전까지) 
// 삼항 조건부 연산자
// => substring(0, 2) => "0~1"
// => substring(0, 3) => "0~2"