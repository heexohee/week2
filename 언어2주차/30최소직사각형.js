// 명함지갑을 지갑의 크기를
// 최소한 작게 
// [[60, 50], [30, 70], [60, 30], [80, 40]] 
// w, h 

// 60 50
// 70 30
// 60 30
// 80 40 // 4000

function solution(cal) {
  let arr1 = [];
  let arr2 = [];
  cal.forEach(el => (el.sort((a,b)=> a-b), arr1.push(el[0]), arr2.push(el[1])))
  return Math.max(...arr1) * Math.max(...arr2)
}

// 남규
function solution(sizes) {
    let cardW = []
    let cardH = []
    sizes.forEach((size) => (cardW.push(Math.max(...size)), cardH.push(Math.min(...size))))             
    return Math.max(...cardW)*Math.max(...cardH)
}

// 카드의 크기 => 긴쪽이 가로가 되도록 [긴쪽, 짧은쪽]
// [
//   [60, 50], => [60, 50]
//   [30, 70], => [70, 30]
//   [60, 30], => [60, 30]
//   [80, 40], => [80, 40]
// ]
//                [0]번지들 60,70,60,80 => 80
//                [1]번지들 50,30,30,40 => 50 X 4000 

//hj

function solution(sizes) {
  const w = [];
  const h = [];

  for(let i = 0; i < sizes.length; i++) {
    w.push(Math.min(...sizes[i]))
    h.push(Math.max(...sizes[i]))
  }
      // const max = Math.max(sizes[i][0], sizes[i][1]);
      // const min = Math.min(sizes[i][0], sizes[i][1]);
      
  return Math.max(...w) * Math.max(...h);
}

// 쉼표 연산자 
//소괄호 안에서 순서대로 연산하는 것