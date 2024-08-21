//Q7-1
for(let i = 1; i < 5; i++){
  let star = "";
  for(let j = 1; j < 6; j++){
    star += "*";
  }
  console.log(star);
}

//Q7-2
for(let i = 1; i < 6; i++){
  let star = "";
  for(let j = 1; j <= i; j++){
    star += "*";
  }
  console.log(star);
}