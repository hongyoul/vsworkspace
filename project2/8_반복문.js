/* while문 */
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// 동전교환기에 지폐를 넣고 교환하기!

let inputPrice = 7000; // 사용자가 넣은 지폐 금액
let coinUnit = 500;
let coinCount = 0; // 동전 개수

while(inputPrice > 0) {
  inputPrice = inputPrice - coinUnit;
  coinCount++;
}

console.log("7000원을 동전 " + coinCount + "개로 변경함..");
console.log('-----------------------------------------');

/* for문 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 배열의 요소를 하나씩 꺼내기!
console.log('-----------------------------------------');
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

console.log(brands[0]);
console.log(brands[1]);
console.log(brands[2]);
console.log(brands[3]);
console.log(brands[4]);

console.log('-----------------------------------------');
for(let i = 0; i < 5; i++){
  console.log(brands[i]);
};

// 음료수 자판기에서 음료 찾기

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin = 800;
let outputList = [];

let productList = [
  { name: "솔의눈", price: 700 },
  { name: "커피", price: 700 },
  { name: "파워레이드", price: 1200 },
  { name: "오렌지", price: 1000 },
  { name: "보리차", price: 1200 },
  { name: "밀키스", price: 800 },
];

// 800원으로 구매할 수 있는 음료수 찾기
let inputCoin2 = 800;
let outputList2 = [];

for(let i = 0; i < productList.length; i++){
  // 800원으로 살수 있는 물건 찾기
  if(productList[i].price <= inputCoin2) {
    // console.log(productList[i]);
    outputList.push(productList[i]);
  }

};

console.log(outputList);


/* for-in문 */
let arr = [3, 4, 5];

// 배열을 순회하면서 index를 꺼냄(배열의 value X)
for(let i in arr) { // 변수 in 배열
  // console.log(i); // 0, 1, 2 인덱스 꺼냄
  console.log(i + ", " + arr[i]);
};

/* for-of문 */
for(let v of arr) {
  // 배열을 순회하면서 값을 꺼냄
  console.log(v);
}