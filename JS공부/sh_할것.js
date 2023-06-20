//reduce!!
//메서드 ()
//splice
// 쉼표 연산자 return,
//3항 연산자로 조건문 바꿔서 수정하기 연습
//22번 
// function solution3(n) {
//     let str = n.toString();
//     let nArr = Array.from(str, x => x + x);
//     return nArr[nArr.length - 1];
//   }

  function solution1(n) {
    return parseInt([...n.toString(3)].reverse().join(""), 3)
  }

//29번 
  function solution(n) {

    let ddd = n.toString(3).split('').reverse().join('')
     return parseInt(ddd,3)
    }

//29번 출력 테스트
  function solution1(n) {
    const reversed = [...n.toString(3)].reverse().join("");
    //const result = parseInt(reversed, 3);
    console.log(reversed);
    //console.log(result);
    return reversed;
}

solution1(125);
