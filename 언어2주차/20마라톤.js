// participant // 마라톤에 참여한 선수들의 이름이 담긴 배열
// completion //  완주한 선수들의 이름이 담긴 배열
// return // 완주하지 못한 선수의 이름, 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주
// 참가자 중에서 동명이인이 있을 수 있어요

// 

function solutionM(p, c){
    // p[ana,mislav,mislav,stanko] | c[ana,mislav,stanko]
    p.sort()
    c.sort()
    for(let i = 0 ; i < p.length ; i++){
        if(p[i] !== c[i]) return p[i];
    }
}

solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])

//hj
function solution(p, c) {
    p.sort(); //참가자 배열 정렬
    c.sort(); //완주자 배열 정렬
    for(let i = 0; i < p.length; i++){
        if(p[i] !== c[i]) {  //두 배열 순차 비교
            return p[i]; //비완주자 출력
        }
    }
}

// En
function solutionEn2(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.find((ei, i) => ei !== completion[i])  
}

// En
function solutionEn1(participant, completion) {
  completion.forEach(item => {
    let find = participant.indexOf(item)
    participant.splice(find,1)  // 원본배열에서 직접 삭제 splice(매개변수1, 매개변수2, 매개변수3....) // 매개변수1 삭제할 위치 // 매개변수2 삭제할 개수 // 매개변수3.... "ao", "ao", "ao"
  })
 return participant[0]
}

console.log(solutionEn(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))

// completion 갈이가 하나작아요 무조건 한명 나와요 
// 그래서 completion 반복문 return 값이 없어요. 로직만 수행
// participant.indexOf(item) // index 번호를 추출
// participant.splice(find,1) 인덱스 번호의 위치를 제거 
// participant 결과적으로 하나만 남겠죠 

//sh 
function solution(participant, completion) {
    participant.sort();
    completion.sort();	
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) 
            
            return participant[i];
    }
}


//다른 답안
function solution(participant, completion) {
    let answer = '';
    const hash = new Map();
  
    participant.forEach((name) => hash.set(name, (hash.get(name) || 0) + 1));
    completion.forEach((name) => hash.set(name, hash.get(name) - 1));
  
    for (const [key, value] of hash) {
      if (value > 0) {
        answer = key;
      }
    }
  
    return answer;
  }

  //


  function solutionHash(participant, completion) {
    const hash = {};
  
    // 해시 생성
    for (let i = 0; i < completion.length; i++) {
      if (hash[completion[i]]) {
        hash[completion[i]] += 1;
      } else {
        hash[completion[i]] = 1;
      }
    }
  
    // 해시에서 참가자 제거
    for (let i = 0; i < participant.length; i++) {
      if (hash[participant[i]]) {
        hash[participant[i]] -= 1;
        if (hash[participant[i]] === 0) {
          delete hash[participant[i]];
        }
      } else {
        return participant[i]; // 누락된 참가자 반환
      }
    }
  }


  // 해시 테이블 
  function solution(participant, completion) {
    const hash = {};
    completion.forEach(name => hash[name] ? hash[name] +=1 : hash[name]=1)
    return participant.map(name => hash[name] 
      ? (hash[name] -= 1, hash[name] === 0 && delete hash[name], undefined)
      : name).filter(Boolean).join("");  
  }

  //중복값을 없앨 경우에 주로 사용
  //동명이인이 있을수도 있다.