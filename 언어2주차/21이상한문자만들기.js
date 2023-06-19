// https://school.programmers.co.kr/learn/courses/30/lessons/12930


// "try hello world"  // " try  hello " 앞뒤여백 없애는 문자열 메서드 trim()
// "TrY HeLlO WoRlD"
// 각 단어 .split()
// "try", "hello", 'world'
// 문자열 인덱스 접근이 가능 홀수 인덱스는 toUpperCase : toLowerCase()

// item[]
// item.charAt()

//sh의 미완풀이^^ ////////////////////////////////////////////////////////
function solution1(s) {
    let arr = []  // (1) 추가
    let dd = s.split(' ');

    for (let i = 0; i<dd.length; i++){
      let answer = ''; // (2) 위치변경
        for (let j =0; j<dd[i].length; j++){
            if (j%2===0){
                answer+=dd[i][j].toUpperCase();
            }
            else {
              answer+=dd[i][j].toLowerCase();
            }
        }
        arr.push(answer) // (1) 에 추가
    }
    return arr.join(" "); // (3) .join(" ")
}

console.log(solution1(" try  hello "))

//////////////////////////////////////////////////////////////////////

// 다른사람 풀이  // 코드실행은 "실패" // 제출 후 채점하기는 "통과" // 구글링 
function solution2(s) {
  const arr = s.split(' '); // 공백기준으로 자르고
  const answer = []; // 최종배열
  let word = ''; // 반복문으로 추가, 다시 초기화 반복

  // 이중 For문
  for(let i = 0; i < arr.length; i++) { 
      for(let j = 0; j < arr[i].length; j++) {
        j % 2 === 0
        ? word += arr[i][j].toUpperCase()
        : word += arr[i][j].toLowerCase()     
      }
    answer.push(word);
    word = '';
  }

return answer.join(' ');
}

function solution(s) {
  let answer = []; // 최종배열
  let arr = s.toLowerCase().split(' '); // 공백기준으로 자르고
  
  // 이중 For문
  for(temp of arr) {
    let word = "";
    for(let j = 0; j < temp.length; j++) {
      (j % 2 === 0)
      ? word += temp[j].toUpperCase()
      : word += temp[j];
    }
  answer.push(word);
  }
  return answer.join(' ');
}

// 냐 풀이 
function solution3 (s) {
    return s.split(' ') // ["","try","","hello",""]
            .map(string => [...string].map((alpa, index) => index%2===0 // ["t","r", "y"] // 하나씩 작업하겠죠, index 짝수(대문자)면, 홀수(소문자)면 
                                          ? alpa.toUpperCase() 
                                          : alpa.toLowerCase())
                                      .join("")) // ["T","r", "Y"].join("") // "TrY" 반환되어 // 72번의 1번지 값으로 들어가는거죠 
            .join(" ") //["","TrY","","HeLlO",""].join("") // " Try  HeLlo "
}

function solution3 (s) {
  return s.split(' ') 
          .map(string => [...string].map((alpa, index) => index%2===0 ? alpa.toUpperCase() : alpa.toLowerCase()).join("")) 
          .join(" ") 
}



// split(" ") //  " try  hello "  // "try  hello" //  ["","try","","hello",""]

function solution4(s) {
	let words = s.split(" ");
	for (let i = 0; i < words.length; i++) {
		let word = words[i].split("");
		for (let j = 0; j < word.length; j++) {
			if (j % 2 === 0) {
				word[j] = word[j].toUpperCase();
			} else {
				word[j] = word[j].toLowerCase();
			}
		}
		words[i] = word.join("");
	}
	return words.join(" ");
}

// 남규
function solution(s) {
  let words = s.split(' ')
  let newWord = []
  words.forEach(word =>{ 
                for(i=0 ; i< word.length ; i++){
          newWord.push(i%2? word[i].toLowerCase():word[i].toUpperCase())
                }
      newWord.push(' ')
  })
  newWord.pop()
  return newWord.join("")
}

// console.log("통과 코드", JSON.stringify(solution2(" try  hello ")))
// console.log("영찬 코드", JSON.stringify(solution3(" try  hello ")))
// console.log("다솔 코드", JSON.stringify(solution4(" try  hello ")))
// console.log("====================================================")
// console.log("통과 코드", JSON.stringify(solution2(" asdf kjlwe asdif   dsafqew asfa ")))
// console.log("영찬 코드", JSON.stringify(solution3(" asdf kjlwe asdif   dsafqew asfa ")))
// console.log("다솔 코드", JSON.stringify(solution4(" asdf kjlwe asdif   dsafqew asfa ")))