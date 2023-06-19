//.toString(n) = n진법
// ㅣㄷㅅ trnaryString = n.toString(3); // 삼진법 
// 다시 십진법으로 parseInt(ternaryString, 3);



function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3)
}

// ?? 다들 잘 되가죠? 
// 45 / 3 = 1200 // 15

//sh
function solution(n) {

    let ddd = n.toString(3).split('').reverse().join('')
     return parseInt(ddd,3)
    }

    // 삼진법 문자열 , 쪼개서, 뒵고, 합쳐서 , 10집법으로 
    // 배열 메소드 !! reverse