// Array.filter(el => 조건에 맞으면 반환 el === 0)
// for (...) {
//   arr[i]/i === 0
//   return push
// }



// gukhwan

function solution(arr, divisor){
    var answer = arr.filter( (el) => el % divisor === 0).sort((a,b)=>a-b);
    return answer.length === 0 ? [-1] : answer
}

arr.filter(function (el){
    return el % divisor == 0;
})

// edwin
function solutionEdwin(arr, divisor) {
  let result = arr.filter(el => el%divisor === 0)
  return result.length === 0 ? [-1] : result.sort((a,b)=> a-b)
}


//hyunjoo
function solution(arr,divisor){
    let answer =[];
    for (let el of arr) {
        if (el % divisor === 0) answer.push(el);
    }
    return answer.length === 0 ? [-1] :answer.sort((a, b) => a -b);
}

// 배열 .filter( 배열의요소하나하나 => 조건 )
// 배열 .filter( 배열의요소하나하나 => 배열의요소하나하나 > 0 ) // true 인 것만 반환

