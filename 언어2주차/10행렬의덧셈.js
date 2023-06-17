// 배열 안에 [배열], [배열] 
// 1번 배열의 [0]번 배열 + 2번 배열의 [0]번 배열 더하기
// 1번 배열의 [1]번 배열 + 2번 배열의 [1]번 배열 더하기 
// 더해진 배열을 추출하는거죠 

// 힌트 
// 이중 for문 // 두번의 반복문 // arr1[i][j] + arr2[i][j]
// 끝 

//arr1[[a1,b1],[c1,d1]],arr2[[a2,b2],[c2,d2]]
//answer = [[a1 + a2, b1 + b2],[c1 + c2], [d1 + d2]] for문? sum? 

function solution(arr1,arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        let sum =[];
        for(let j=0; j<arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer;
}

// map 하나로 변경
function solution2(arr1,arr2) {
  return arr1.map((arr, arrIndex)=> {
    let answer = [];
    for(let i=0; i < arr.length; i++) {
      answer.push(arr[arrIndex]+arr2[arrIndex][i])
    }
    return answer
  })
}

console.log(solution2([[1,2],[2,3]],[[3,4],[5,6]]))

// map 두개로 변경
function solution3(arr1, arr2) {
  return arr1.map((arr, arrIndex) => arr.map((num, index) => num+arr2[arrIndex][index]))
} 
console.log(solution3([[1,2],[2,3]],[[3,4],[5,6]]))

