const member = {
  id : "아이디",
  pw : "패스워드",
  grade : "등급", 
  name : "이름",
  tel : "전화번호"
};

console.log(member);

const product = {
  productName : "제품명",
  price : "가격",
  detail : "상세설명",
  category : "카테고리"
};

console.log(product);

const order = {
  productName : "제품명",
  quantity : "수량",
  totalOrderPrice : "총주문금액",
  orderName : "주문자",
  orderDate : "주문일자",
  orderPlace : "배송지"
};

console.log(order);

const person = {
  age : 30,
  name : "둘리",
  address : "서울"
};

person.age = 10;
person.name = "또치";
person.address = "인천";

console.log(person);

const product2 ={
  name : "노트북",
  price : 1500000,
  brand : "삼성"
};

product2["price"] = 2000000;
product2["brand"] = "LG";

console.log(product2)

const foodList = [ 'Pizza', 'Hamburger', 'Chicken', 'Steak' ];

const food1 = foodList[0]; //첫번째 요소 Pizza
const food2 = foodList[foodList.length - 1]; //마지막요소 Steak

const result = food1 + ' ' + food2;
console.log(result);
console.log(foodList[0] + " " + foodList[3]);
console.log(result, food2);