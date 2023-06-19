function solution (data) {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const star = `${'*'.repeat(a)}\n`;
  console.log(star.repeat(b));
  // console.log("data - ", data)
  // console.log("data(a)", a, typeof a)  // ("*" x a) + \n             // .repeat // 
  // console.log("data(b)", b, typeof b)  // (("*" x a) + \n) x b
  // console.log("반복대상\n".repeat(3))
  // for (let i = 0; i < b; i++) {
  //   let str =
  // }
}

function solution5 (data) {
  const [a, b] = data.split(" ");
  console.log(("*".repeat(+a)+"\n").repeat(+b));
}

solution("5 3")

// 남규
