// 손보강
// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//     - 숫자의 값과 위치가 모두 일치하면 S
//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다

// const readline = require('readline');
// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// 1. 랜덤 숫자 만들기
function setAnswer() {
  let answer = "";
  while (answer.length < 3) {
    const random = Math.floor(Math.random() * 10);
    if (!answer.includes(random)) {
      answer += random;
    }
    //   let count = 0;
    console.log(`컴퓨터가 ${answer}를 생성하였습니다. 답을 맞춰보세요!`);
  }
}
// 2. 입력값 받기 //readline 모듈?
function input_value() {
  let value = prompt(`답을 입력하세요.`);
}
// 3. 랜덤 숫자와 입력값 비교
function compare_value() {
    let value = input_value();
  console.log(`${count}번째 시도 : ${answer}`);
    let S = 0;
    let B = 0;  
  value.split("").forEach((el,i)=>{
    if(answer.indexOf(el) === i) S++;
    else if(answer.includes(el)) B++;
  })


}
// 4. 게임 종료하는 부분 구현
