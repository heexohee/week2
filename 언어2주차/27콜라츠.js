// 6/2 = 3
// 3*3+1 = 10
// 10/2 = 5
// 5*3+1 = 16
// 16/2 = 8
// 8/2 = 4
// 4/2 = 2
// 2/2 = 1

function solution(num, cnt = 0) {
	while (num > 1) {
    cnt++
		num % 2 === 0
    ? num = num / 2
    : num = num * 3 + 1
		};
	return cnt >= 500
          ? -1
          : cnt;
}


// Edwin 
function solution (num, answer = 0) { // 매개변수 기본값
  while(num > 1) {
      num%2 === 0 
        ? (num = num/2, answer++) 
        : (num = num*3+1, answer++)
  };
  return answer > 500 ? -1 : answer
}

function solution (num) {
  let answer = 0;
  while(num > 1) {
    answer++
    num%2 === 0 
        ? num = num/2
        : num = num*3+1
  };
  return answer > 500 ? -1 : answer
}