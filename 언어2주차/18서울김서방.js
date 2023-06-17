

//me

function solution(seoul){
    return `김서방은 ${seoul.indexOf('Kim')}에 있다`
}

//hj
function solution(seoul){
    let answer =seoul.indexOf('Kim')
    return "김서방은" + answer + "에 있다";
};

// 템플릿 리터럴 ``


// Ed
function solution(seoul) {
  let location = seoul.indexOf("Kim")
  // let location = seoul.findIndex(item => item === "Kim")
  return `김서방은 ${location}에 있다`
}

// indexOf(직접검색)   : 는 배열에서 특정 값을 직접 검색
// findIndex(콜백함수) : 일치 항목을 찾을 때까지 배열의 각 요소에서 실행되는 콜백 함수를 인수로 사용
                    // 복잡한 비교를 수행하거나 다른 조건을 사용하여 배열에서 원하는 요소를 찾을 수 있기 때문에 더 많은 유연성을 제공
//`김서방은 ${i}에 있다`


//sh
function solution(seoul) {
    let answer =seoul.indexOf('Kim');
    return `김서방은 ${answer}에 있다`
}