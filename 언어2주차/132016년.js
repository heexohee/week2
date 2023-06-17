// 2016년 1월 1일은 금요일입니다. 
//2016년 a월 b일은 무슨 요일일까요? 
//두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, 
//solution을 완성하세요. 
//요일의 이름은 일요일부터 토요일까지 각각 
//SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
//예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

let today = new Date() // 슬러시 되고, 콤마 되고
console.log(`${today.getFullYear()}년`)
console.log(`${today.getMonth()+1}월`)
console.log(`${today.getDate()}일`)
console.log(`${today.getDay()}요일`)
let week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일')  // 리액트 dayjs // 바닐라JS
console.log(`${week[today.getDay()]}`)
console.log(`현재 한국시간은 ${today.toLocaleString()}`)
console.log(`현재 일본시간은 ${today.toLocaleString('ja-JP')}`)
console.log(`현재 미국시간은 ${today.toLocaleString('en-GB', { timeZone: 'UTC' })}`)

// Date // 날짜를 구하는 JS 내장 메서드 