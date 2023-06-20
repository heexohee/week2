// (lottos) = [44, 1, 0, 0, 31, 25] // 내가 가진 로또
// (win_nums) = [31, 10, 45, 1, 6, 19] // 당첨 번호

//hj
function solution(lottos, win_nums) {
  const z = lottos.filter((n) => n === 0).length;
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const r = [6, 6, 5, 4, 3, 2, 1];
  return [r[min + z], r[min]];
}

// Edwin
function solution(lottos, win_nums) {
  let concord = lottos.filter(el => win_nums.includes(el)).length
  let zore = lottos.filter(el => el === 0).length 
  const result = (num) => 
      num === 6 ? 1 
          : num === 5 ? 2
          : num === 4 ? 3
          : num === 3 ? 4
          : num === 2 ? 5
          : 6  // 값에 따른 출력결과를 다르게 설정함으로 풀이
  return [result(concord+zore), result(concord)]
}

// 또는 
function solution(lottos, win_nums) {
  let concord2 = lottos.reduce((cnt, element) =>  cnt+(win_nums.includes(element) ? 1 : 0), 0)
  let zore = lottos.reduce((cnt, element) => cnt + (element === 0), 0)
  const result = [6,6,5,4,3,2,1] 
  return [result[concord2+zore], result[concord2]]
}

// 두 번째 코드는 filter 및 includes 메서드를 사용하여 lottos와 win_nums 사이에서 일치하는 요소의 수를 계산합니다. 
// 이 접근 방식은 첫 번째 코드의 reduce 및 includes 사용보다 더 간단하고 효율적입니다.

// lottos 요소가 반복해 들어와야된단 말이죠... 
// win_nums.reduce((cnt, element) => cnt + ('a' === element), 0);

// 6개 = 1등 / 5개 = 2등 / 4개 = 3등 / 3개 = 4등 / 2개 = 5등 / 1 = 6등 / 0 = 6등

function solution(lottos, win_nums){
    let min = 0;
    let max = 0;
    for(i of lottos){
        for(j of win_nums){
            i === j && (min +=1);
        }
    }
    max = min + lottos.filter((x) => x === 0).length;
    return [max === 0 ? 6 : 7-max, min === 0? 6 : 7-min]
}

