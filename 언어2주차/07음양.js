

// reduce() // 누산기 // 배열에 있는 요소들 가공해서 하나의 값으로 내보내요. 

function solution (absolutes, signs) {
  console.log("합계 - ", absolutes.reduce((pre, cur) => pre+cur, 0))
  return absolutes.reduce((pre, cur, index) => pre+cur, 0)  // pre = 0 // 배열만큼돌아요 
                                                   // result=0; result += arr[i]
} 

solution([4,7,12], [true,false,true]) // true 정수, false 음수 

function solution (absolutes, signs) {
    return absolutes.reduce((pre, cur, index) => pre + (cur*(signs[index] ? 1 : -1)), 0);
}