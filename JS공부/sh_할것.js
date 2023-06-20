//reduce!!
//메서드 ()
//splice
// 쉼표 연산자 return,
//3항 연산자로 조건문 바꿔서 수정하기 연습
//22번 
function solution3(n) {
    let str = n.toString();
    let nArr = Array.from(str, x => x + x);
    return nArr[nArr.length - 1];
  }
  
