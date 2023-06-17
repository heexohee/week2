function solution (arr) {
  return arr.reduce((pre, cur) =>  pre+cur, 0)/arr.length;
}

console.log(solution([1,2,3,4]))
// 다 더해서 / "나누면" // 끝
// 하나 고치고, 하나 더하고