function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter(num => num != Math.min(...arr))
}

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1)
return arr.length === 0 ? [-1] : arr
}

// splice 
function solution(arr) {
	return arr.length === 1 ? [-1] : arr.splice(arr.indexOf(Math.min(...arr)), 1) 
}
// 실행한 결괏값 [1]이 기댓값 [4,3,2]과 다릅니다.

function solution(arr) {
  return (arr.length <= 1) ? [-1] : (arr.splice(arr.indexOf(Math.min(...arr)), 1), arr);
}

// splice 값을 기억해요 // 잘내진 요소의 값을 반환 "1" // 

// ➡︎➡︎➡︎➡︎➡︎ "쉼표 연산자" 는 각 피연산자(표현식)를 왼쪽에서 오른쪽으로 평가하고 가장 오른쪽 피연산자의 값을 반환// 아하!

// (arr.splice(arr.indexOf(Math.min(...arr)), 1), arr);
// return (1) arr.splice(arr.indexOf(Math.min(...arr)), 1), (2) arr // () 소괄호 
// (      (1) 을 실행하고, reutrn (2)을 반환해줘         )

//솔트를 하면 안된다?? : 
 
// 정확히 말씀드리면, arr.splice(arr.indexOf(Math.min(...arr)), 1)은 삭제된 요소를 반환합니다. 그러나 return 문에서 쉼표 연산자로 여러 표현식을 함께 사용했으므로, 전체 표현식의 결과로 arr이 반환됩니다.

// 다음은 해당 표현식을 단계별로 분해하여 설명한 것입니다:

// Math.min(...arr)을 사용하여 배열 arr에서 가장 작은 값을 찾습니다.
// arr.indexOf(Math.min(...arr))를 사용하여 가장 작은 값의 인덱스를 찾습니다.
// arr.splice(arr.indexOf(Math.min(...arr)), 1)을 사용하여 해당 인덱스의 요소를 제거하고, 삭제된 요소를 반환합니다.
// , 쉼표 연산자를 사용하여 다음 표현식인 arr을 평가합니다.
// arr은 제거된 요소가 반영된 수정된 배열입니다.
// 전체 표현식의 결과로 arr이 반환됩니다.
// 결과적으로, arr.splice(arr.indexOf(Math.min(...arr)), 1)은 삭제된 요소를 반환하지만, 전체 표현식에서는 arr이 반환되는 것이 맞습니다.

[4,3,2,1]
[6,3,12,7,90,2,234,7,9] // [6,3,12,7,90,234,7,9] // 정렬되면 안되는 거에요. 

function solution(arr) {
  return arr.length === 1 
    ? [-1] 
    : arr.filter(num => num != Math.min(...arr))  // 6 , 3, 12 // 조건이 최소값과 같지 않은 것만 리턴
}
//필터는 .콜백함수의 ...

function solution(arr) {
	return arr.length === 1 
    ? [-1] 
    : (arr.splice(arr.indexOf(Math.min(...arr)), 1), arr) // 최소값의 인덱스 // (과정(1), 과정(2), return 최종적인 오른쪽 과정(3))
}

// 배열 메소드 splice (시작점, 제거할요소수, 추가할내용1, 추가할내용2,.............)
function prac(arr) {
  let arrNum = [0,1,2,3,4]
  return arrNum.splice(1,1), arrNum
}

console.log(arrNum) [0,2,3,4]
// let 추출 = arrNum.splice(1,1) // 1 // 1 