// Q8
function sub(x, y){
  return x - y;
}

let result = sub(5, 3);
console.log(result);

// Q9
function sumAll(x, y){
  if(x <= y){
    let sum = 0;
    for(let i = x; i <= y; i++){
      sum = sum + i;
    }
    return sum;
  }
}

let result2 = sumAll(3,5);
console.log(result2);

// Q10
function maxArr(arr){
  let maxNum = arr[0];

  // 3번반복이라 1부터 시작
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > maxNum){
      maxNum = arr[i];
    }
  }
  return maxNum;
}

const result3 = maxArr([-1, 5, 10, -3]);
console.log(result3);

// Q11
function strArr(arr){
  let str = [arr];

  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
     
    }
  }
  console.log("true");
}

const result4 = strArr(["a", "b", "c"]);

// Q12
function fruit(arr){
  let strF = [arr];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == "apple"){
      console.log("true");
      break;
    } else if(arr[i] == "banana") {
      console.log("true");
      break;
    } else if(arr[i] == "cherry") {
      console.log("true");
      break;
    } else if(arr[i] == "banana") {
      console.log("true");
      break;
    } else {
      console.log("false");
    }
  }
}

const result5 = fruit(["apple", "banana", "cherry", "banana"]);

// Q13
function gugudan(x) {
  for(let i = 1; i < 10; i++){
    console.log(x + '*' + i + '=' + x * i);
  }  
}

const result6 = gugudan(3);

// Q14
function diffrentArr(arr){

  // 문자열만 저장할 새로운 배열
  let newArr = [];
  // 배열의 모든요소를 꺼내서
  // 요소의 타입을 확인하고
  // 타입이 스트링이면
  // 새로운 배열에 추가한다
  // let diffArr = [arr];
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string'){
      newArr.push(arr[i]);
    }
  }

  // 모두 확인했으면 새로운 배열을 반환한다
  return newArr;
}

let result7 = diffrentArr([1, "apple", true, "banana", 42, "cherry"]);
console.log(result7);

// Q15
// 숫자를 입력받아
function numberInput(x){
  let result = 1;
  
  for(let i = x; i >= 1; i--){
    result = result * i;
  }
  return result;
}
// 팩토리얼을 계산하여 반환하는 함수를 만드세요
console.log(numberInput(5));

// Q16
// 학생 객체를 입력받아
const students = [
  { name: "둘리", math: 90, english: 85},
  { name: "또치", math: 80, english: 95},
  { name: "도우너", math: 70, english: 75},
];

function student(students, x){

  let mathSum = 0;
  let engSum = 0;

  // for(let i = 0; i < students.length; i++){
  //     // 매개변수가 x가 math일때 mathSum에 합계 / 3으로 평균
  //     if(x == 'math') {
  //       mathSum = mathSum + students[i].math
  //     // 매개변수가 x가 math일때 engSum에 합계 / 3으로 평균
  //     } else if(x == 'english') {
  //       engSum = engSum + students[i].english
  //     }
  //   }
  for (let i = 0; i < students.length; i++) {
    if (x === 'math') {
      mathSum += students[i].math;
    } else if (x === 'english') {
      engSum += students[i].english;
    }
  }
  if (x === 'math') {
    return mathSum / students.length;
  } else if (x === 'english') {
    return engSum / students.length;
  } else {
    // x가 'math' 또는 'english'가 아닌 경우 처리
    return null; // 또는 적절한 에러 메시지 반환
  }
}

  const result8 = student(students, 'math');
  console.log(result8);





