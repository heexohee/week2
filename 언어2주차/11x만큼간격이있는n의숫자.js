//ㅇㅅㅇ~
function solution(x, n) {
  return 
}

// meraru04
function solution(x, n){
    var answer = [];
    let result = 0;

    for(let i =0; i < n; i++){
        result += x
        answer.push(result)
    }
    return answer;
}

//hyunjoo

function solution(x,n){
    let answer =[];
    for(let i=1; i<=n; i++)
        answer.push(x*i)
    return answer;
}



// Edwin ~

function edwinFn1 (x, n) {
  return [...Array(n)].map((_, index) => (index + 1)*x);
              // 배열을 만들고 .map (  () => {} )
              //  [배열].map((_,index) => (index+1)*x)
              //  [1,2,3,4,5] => el => 1 , 2, 3, 4, 5 => for문이랑 동일한데, let i = 0, 배열[i]
}
function edwinFn2 (x, n) {
  return Array.from({ length: n }, (_, index) => (index + 1)*x);
              // ( { 길이 }  , ()=>{}  )
}


// Array.from({length:n}) => n개 배열이 생성 => 
// [...Array(n)] => n개 배열이 생성 => map > 배열의 요소만큼 어떤 처리를 한 후에 동일한 길이의 배열의 요소를 새로 만들어서 반환 

// 

//sohee 
function solution(x, n) {
    let answer = [];
    let add = 0;
    
    for (let i = 0; i < n; i++){
    add += x;
    answer.push(add);
}
return answer;
}