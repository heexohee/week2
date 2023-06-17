
//me
function solution(n){
    return '수박'.repeat(n).slice(0,n)
}

// n = 3
// 수박수박수박.slice(0, n)
// 수박수


//sh: 🥹
function solution(n) {
    let answer = '';
    
    for (let i = 1; i<=n; i++){
        
    if (i%2 === 0){ 
  answer += '박' 
} else {
      answer+='수'
}
   }
    return answer;
}

// 노가다식 문제풀이ㅋㅋㅋㅋ
function waterMelon(n){
    var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
    //함수를 완성하세요
  
    return result.substring(0,n);
  }
  

// Ed
function solution(n) {
  return [...Array(n)].map((_,index) => index%2===0 ? "수" : "박").join("")
}

// 길이가 n인 [ , , ] 배열이 생성된다.
// map( (매개변수1:배열의 각요소, 매수변수2:배열의 인덱스 )=>{} )
// map( (_,index)=>{index ~~~~~~~~> index%2===0 ? "수" : "박" } )
// 배열의 메소드인 map을 써서 _ : 배열의 각 요소, Index : 배열의 인덱스를 파라미터로 가진다.
// 배열의 각 요소에 index % 2 === 0 조건이 참이라면 '수'
// 배열의 각 요소에 index % 2 === 0 조건이 거짓이라면 '박'
// n이 3이라면 ['수','박','수']를 join메소드로 문자열로 합쳐준다 => '수박수'
// '수박수'가 반환된다.
// 메서드가 두개 사용된거죠 


// [... 스프레드 배열을 생성] 
// map 안에 내용을 채워주는 것 
/////// Array.from({length:n},      ()=>{})
//                 [...Array(n)]    map()
// spilt "존재조건" // 쪼갤 대상이 없는데 우째씀?! ㅋㅋ  // ES6죠 ㅋㅋㅋㅋㅋㅋ

// 아래 코드가 더 간결하다고 GPT 선생님이 말해줌 
function solution(n) {
  return  Array.from({ length: n }, (_, index) => index%2===0 ? "수":"박").join("");
}
// 첫째, 배열 n만큼 [null, null, null]
// (index) : 0, 1, 2 : index 짝수면 "수", 홀수면 "박" // ["수", "박", "수"] // 배열을 문자열 반환할 때
// join("-") => "수-박-수"
// join(" ") => "수 박 수"
// join("") => "수박수"


//hj
function solution(n) {
    return '수박'.repeat(n).substring(0,n);
}

//slice, substring 은 사용이 비슷하다.

const str = "Hello, World!";
// console.log(str.substring(7, 5)); // 5번지 7번지
// console.log(str.slice(7, 5));  // 못찾아요. 시작이 끝보다 커서 