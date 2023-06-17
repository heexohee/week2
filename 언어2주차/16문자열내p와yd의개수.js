// 대소문자로 섞여서 들어옴
// 대문자로 통일, 소문자로 통일 
// 문자열 메서드 UpperCase, LowerCase
// 반영된 것의 P의 , Y의 개수를 비교


function solution1(s){

    return s.toLowerCase().split('').reduce((acc,cur)=> {
        if(cur === 'p') return acc + 1
        else if(cur === 'y') return acc - 1
        return acc
    },0) ? false : true;
}


//hj
function solution2(s){
    let answer = true;
    s = s.toLowerCase();
    let num =0;
    for(i = 0; i<s.length;i++){
        s[i]==="p" && num++;
        s[i]==="y" && num--;  // 논리연산자 // 실무에서 // "좌항이 true"이면, 우항을 "실행" //
    }
    answer = (num === 0);
    return answer
}

// 문자열[i] // 공백 undefined // 에러발생
// 문자열 탐색 때, charAt(i) // 무시하고 넘어감 // 런타임까지 생각을 때 에러를 사전 방지하려면 ? 


//sh
function solution3(s){
    // var answer = true;
 const arr = s.toUpperCase().split('');  // ""Pyy"" >> ["P", "Y", "Y"]
 console.log(arr)
 let aaa = 0;
     for (i=0; i<arr.length; i++){
         if(arr[i]==='P') {
          console.log(arr[i], aaa)
          aaa++;
         }
           else if(arr[i] ==='Y') {
            console.log(arr[i], aaa)
            aaa--
          };
     }
     return aaa === 0;
     }

     console.log(solution3("Pyy"))   
    

// Ed
function solutionEd(s) {
  const extract = (alphabet) => [...s.toUpperCase()].filter(el => el === alphabet).length
  return extract("P") === extract("Y")
}

// const extract // filter 를 통해서 P, Y 
// 기능화한 함수표현식을 만들고 => return extract("P") === extract("Y") // true , false 
//  s.toUpperCase().split('');  === [...s.toUpperCase()] // 전개구문 // 스프레트문법 
// ...=전개구문
// for문에서 조건탐색 === .filter(el => el === alphabet).length // 배열의 길이를 탐색 
// const extract 제가 함수죠 
// extract("P") === extract("Y") // 문자열에서 "P"의 개수, "Y"의 개수비교 
// return extract("A") === extract("Z")
// 함수형 프로그래밍 // 함수를 통해서 어떤 처리를 하겠끔하는 프로그래밍법 // 


// 배열메서드 중에 filter(함수를 쓸 수 있는 아이들이 있어요), map, forEach, reduce 
// 함수를 쓸 수 있는 아이들이 있어요 === 고차함수 
// map : 배열의 길이만큼이 포인트, [배열 3개, 반환배열 3개], [배열 4개, 반환배열 4개]
// forEach : [배열 3개, undefined] // forEach는 로직만 수행하고 결과를 반환하지 않아요. 
// reduce : [배열 3개, 반환되는것은 값으로]
// filter : [배열이 몇게이든, 참인 것만 반환을 합니다]
// filter(배열의요소 => 배열의요소 === alphabet) // 배열의요소 // 하나씩 돌아가면서 조건을 탐색하고 부합것만 리턴 // false 넘어감 // 


// 함수선언문 & 함수표현식
////////////////////////////////////////////////////////////////////////////////////
함수() // 1번문제 동작할까요 말까요?
함수표현식() // 2번문제 동작할까요 말까요?? 

function 함수(){}
const 함수표현식 = function (){}
////////////////////////////////////////////////////////////////////////////////////
// 함수부터 호이스팅
function 함수(){}
함수() // 1번문제 동작할까요 말까요?
함수표현식() // 2번문제 동작할까요 말까요?? 

함수표현식 = function (){}
//////////////////////////////////////////////////////////////////////////////// 최종

// 변수 호이스팅
const 함수표현식;    // 식별자 이름만 올려지고, 값의 할당은 해당위치에서
function 함수(){}  // 전체가 호이스팅됨.
함수() // 1번문제 동작할까요 말까요?
함수표현식() // 2번문제 동작할까요 말까요?? 

함수표현식 = function (){}
////////////////////////////////////////////////////////////////////////////////////

화살표함수는 함수표현식 을 보다 간단하게 작성하기 위한 ES6 문법 
// 함수선언문과 달리 함수표현식만 가능하다. 
// 상황에 따라서 함수선언문을 쓸 때, 함수표현식을 쓸 때가 다르고, 
// 화살표 함수는 함수표현식을 간략하게 쓰기 위함 

const aaa = function(parameter) {console.log("반환문이 간단할 때, 한 줄일 때")} // 매개변수 (), 함수 스코프를 생성 {}
const 함수표현식 = () => {} // function을 지우고 => 썼다고 해서 화살표함수 라고 불러요. 
const 함수표현식 = parameter => console.log("반환문이 간단할 때, 한 줄일 때") // 매개변수가 하나일 때, (소괄호)를 지울 수 있어요.
const 함수표현식 = () => console.log("반환문이 간단할 때, 한 줄일 때") // 매개변수가 없을 때는 () 를 넣어줘야 한다. 
const 함수표현식 = (parameter1, parameter2, parameter3) => console.log("반환문이 간단할 때, 한 줄일 때") // 매개변수가 여려개 일 때는 () 를 넣어줘야 한다. 


// 실행컨텍스트에서 호이스팅될 때 두 식은 어떻게 달라질까요 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 콜스택 = 전역 실행컨텍스트 -> 함수 실행컨텍스트 순
//sh. 함수 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 js의 특징을 함수 호이스팅이라고 한다 
//출처 : MDD P.165

// 실행순서
// 함수선언(){}
// const 함수표현식
// 함수()   // 실행됨
// 함수표현식() // 오류남
// 함수표현식 = funcion(){}

// var 재할당, 재선언가능
// let 재할당 가능

// var let const? 