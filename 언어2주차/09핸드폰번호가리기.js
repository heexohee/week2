function solution (phone) {
  return phone
}

console.log(solution("01033334444"))
console.log(solution("027778888"))

// 010 11자리 // 
// 02 9자리 // 마지막 4자리만 

function solution (phone) {
    // let back = phone.substring(-4, 4) 
    let back = phone.substring(phone.length-4)  // 시작점, 끝지점 0, 4 // 시작부터 끝
    let front =phone.substring(0,phone.length-4);
    let result = front.replace(/[0-9]/g,'*');
    return result+back
}

function solution2 (phone) {
  return "*".repeat(phone.length-4) + phone.substring(phone.length-4)
}
// 문자열 // 길이 -4 // 4개 빼고 전부 // * // "*".repeat(phone.length-4)
// 문자열 // 마지막 4개는 그대로           // phone.subsring(phone.length-4)

