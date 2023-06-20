
// me
function solution(arr){
    var answer = []
    for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] !== arr[i+1]){
                answer.push(arr[i])
            }
    }
    return answer;
}

// Edwin
function solution(arr) {    
  return arr.filter((item, index) => item !== arr[index-1])
}


//hj
function solution(arr) {
    let answer = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

// 배열 메서드 필더
// 조건에 맞는 것만 값을 반환하며, 이때 새로운 배열을 만들어낸다.
// map 입력받은 배열의 길이와 새로만든 배열의 길이가 동일하지만
// filter 조건에 따른 반환이기에, 배열의 길이가 달라질 수 있다. // 조건에 맞는것만 반환하니까
