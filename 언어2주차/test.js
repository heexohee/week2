function solutionEn(participant, completion) {
  let find = participant.indexOf("stanko")
  participant.splice(find,1)
 return participant
}


console.log(solutionEn(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))