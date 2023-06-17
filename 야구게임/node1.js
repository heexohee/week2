// 김은비

// Goal : 숫자야구 프로그램 만들기

// - 컴퓨터는 0과 9 사이의 서로 다른 숫자 3개를 무작위로 뽑습니다. (ex) 123, 759
// - 사용자는 컴퓨터가 뽑은 숫자를 맞추기 위해 시도합니다.
// - 컴퓨터는 사용자가 입력한 세자리 숫자에 대해서, 아래의 규칙대로 스트라이크(S)와 볼(B)를 알려줍니다.
//     - 숫자의 값과 위치가 모두 일치하면 S
//     - 숫자의 값은 일치하지만 위치가 틀렸으면 B
// - 기회는 무제한이며, 몇번의 시도 후에 맞췄는지 기록됩니다.
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다.



// 1. 컴퓨터가 입력한 [] 과 사용자가 입력한 내역 [] 을 비교
// 2. 숫자와 위치가 맞을 경우 S
    // 숫자는 맞지만 위치가 다를 경우 B
    // 숫자와 위치 모두 맞지 않으면 O
    // 예시) cptnum = [2, 5, 7] usernum = [9, 5, 2]
    // 숫자 2는 같지만 위치가 다르므로 B, 숫자 5와 위치 모두 같으니 S, 숫자7과 다르므로 O
    // 따라서 BSO, SBO 등 이런 결과가 나와야 함

// 3. 숫자는 1-9까지만 입력할 수 있다.

// html로 읽어야 함


function randomComputerNumbers() {
    let numbers = [];
  
    while (numbers.length < 3) {
      let randomNum = Math.floor(Math.random() * 10);
  
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
  
    return numbers;
  }
  
  function numBaseball(computerNum, userNum) {
    let strikes = 0;
    let balls = 0;
  
    for (let i = 0; i < 3; i++) {
      if (userNum[i] === computerNum[i]) {
        strikes++;
      } else if (computerNum.includes(userNum[i])) {
        balls++;
      }
    }
  
    return [strikes, balls];
  }
  
  function playGame() {
    let computerNum = randomComputerNumbers();
    let attempts = 0;
  
    while (true) {  // 사용자가 올바른 형식의 숫자 3개를 입력할 때까지 반복하여 입력
      let userNum = prompt("숫자 3개를 입력하세요 (0부터 9까지 중복 없이):");
      if (userNum.length !== 3 || !/^\d+$/.test(userNum)) {
        alert("유효한 숫자를 입력해주세요.");
        continue;
      }
  
      let userNumArr = userNum.split("").map(Number);
      let [strikes, balls] = numBaseball(computerNum, userNumArr);
  
      attempts++;
      alert(`시도 횟수: ${attempts}\n스트라이크: ${strikes}\n볼: ${balls}`);
  
      if (strikes === 3) {
        alert(`축하합니다! 숫자를 모두 맞혔습니다.\n총 시도 횟수: ${attempts}`);
        break;
      }
    }
  }
  
  playGame();
  