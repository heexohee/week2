// https://school.programmers.co.kr/learn/courses/30/lessons/12930


// "try hello world"  // " try  hello " 앞뒤여백 없애는 문자열 메서드 trim()
// "TrY HeLlO WoRlD"
// 각 단어 .split()
// "try", "hello", 'world'
// 문자열 인덱스 접근이 가능 홀수 인덱스는 toUpperCase : toLowerCase()

// item[]
// item.charAt()

//sh의 미완풀이^^
function solution1(s) {
    let answer = '';
    let dd = s.split(' ')

    for (let i = 0; i<dd.length; i++){
        for (let j =0; j<dd[i].length; j++){
            if (j%2===0){
                answer+=dd
            }
        }

    }
    return answer;
}


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



// 냐 풀이 
function solution3 (s) {
    return s.split(' ')
            .map(string => [...string].map((alpa, index) => index%2===0 ? alpa.toUpperCase() : alpa.toLowerCase()).join(""))
            .join(" ")
}



// split(" ") //  " try  hello "  // "try  hello" //  ["","try","","hello",""]

function solution4(s) {
	let words = s.split(" ");
	// console.log(words); 
	let newS = [];
	for (i = 0; i < words.length; i++) {
		// 0, 1, 2 가 출력된 이유 : for in 문은 배열의 인덱스를 나타냄, for of 문을 사용해야 각 배열의 요소를 나타냄!
		for (j = 0; j < words[i].length; j++) {
			if (j % 2 === 0) {
				newS.push(words[i][j].toUpperCase());
			} else {
				newS.push(words[i][j].toLowerCase());
			}
		}
		newS.push(" ");
    // console.log(newS)  // [ ' ', 'T', 'r', 'Y', ' ' ]
	}
  newS.pop();
	return newS.join("");
}

console.log("통과 코드", JSON.stringify(solution2(" try  hello ")))
console.log("영찬 코드", JSON.stringify(solution3(" try  hello ")))
console.log("다솔 코드", JSON.stringify(solution4(" try  hello ")))
console.log("====================================================")
console.log("통과 코드", JSON.stringify(solution2(" asdf kjlwe asdif   dsafqew asfa ")))
console.log("영찬 코드", JSON.stringify(solution3(" asdf kjlwe asdif   dsafqew asfa ")))
console.log("다솔 코드", JSON.stringify(solution4(" asdf kjlwe asdif   dsafqew asfa ")))