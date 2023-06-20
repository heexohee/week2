// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...





// ed
// 테스트는 통과 // 채점은... 실패... 이유는 math1길이가 answers보다 작아서, 
// math = [1,2,3,4,5]
// answer = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]
// answer[0] === math1[0]  0%패턴의길이(예는 5) //  0 % 5 ==> 0
// answer[1] === math1[1]  1%패턴의길이(예는 5) //  1 % 5 ==> 1
// answer[2] === math1[2]  2 ==> 2
// answer[3] === math1[3]  3 ==> 3
// answer[4] === math1[4]  4 ==> 4
// answer[5] === math1[5]  5 ==> 0
// answer[6] === math1[6]  6 ==> 1  ===> 0,1,2,3,4,  0,1,2,3,4,  0,1,2,3,4,  0,1,2,3,4,  0,1,2,3,4 // 



function solution(answers) {
  let math1 = [ 1, 2, 3, 4, 5]; // 5
  let math2 = [ 2, 1, 2, 3, 2, 4, 2, 5]; // 8
  let math3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
  let scoringLists = []
  
  const scoring = (students) => {
      scoringLists.push(answers.filter((el, index) => el === students[index %students.length]).length)
  }

  scoring(math1)
  scoring(math2)
  scoring(math3)
  
  let result = scoringLists.map((el, index) => [index+1, el])
                          .sort((a,b) => b[1]-a[1])
                          .filter(el => el[1] === Math.max(...scoringLists))
                          .map(el => el[0])
  return result // 5~7, 9~13번 실패 
}


//재사용성이 가능한~ 코드
function solution(answers) {
  const scoring = (students) => scoringLists.push(answers.filter((el, index) => el === students[index %students.length]).length)
  let scoringLists = []
  let studentLists = [
    [ 1, 2, 3, 4, 5], // 유지보수측면 사례1
    [ 2, 1, 2, 3, 2, 4, 2, 5],  // 유지보수측면 사례2
    [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5],  // 유지보수측면 사례3
  ] 
  studentLists.forEach(el => scoring(el))                          

  return scoringLists.map((el, index) => [index+1, el])
                     .sort((a,b) => b[1]-a[1])
                     .filter(el => el[1] === Math.max(...scoringLists))
                     .map(el => el[0])
}



// JS알고리즘만 풀면 발생하는 한정적인? 
// 다른사람 풀이(재사용이 어려운 코드)
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];  // a3 추가 

  var a1c = answers.filter((a,i)=> a === a1[i%a2.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length; // a3c 추가 
  var max = Math.max(a1c,a2c,a3c); // a3c

  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};  // a3c
  // 추가하고 싶을 때 발생되는 작업 4개 
  // 3개갰지... 

  return answer
}


//hook
//리액트 
function solution(answers) {
  let studentLists = [ ... ] // 비동기처리의 결과로 받아온 배열  [1,2,3]
  let scoringLists = []
  const scoring = (students) => scoringLists.push(answers.filter((el, index) => el === students[index %students.length]).length) // hook // 리액트에서의 함수 // 별도의 파일로 분리해 커스텀훅(커스텀함수)
  
  studentLists.forEach(el => scoring(el))    
  
  let result = scoringLists.map((el, index) => [index+1, el])
                            .sort((a,b) => b[1]-a[1])
                            .filter(el => el[1] === Math.max(...scoringLists))
                            .map(el => el[0])

  // JSX // JS+XML(HTML같은 것, 포함)                          
  /// return ⬆︎⬆︎ JS언어(로직수행) ⬇︎⬇︎ XML(태그 : 뷰 그려요), {중괄호}를 만들면 JS ==> 반환시 <div> 태그 형태로 반활 수 있어요. 

  return (
    <div>
      {result.map(el => <p>el</p>)}
    </div>
  )
}