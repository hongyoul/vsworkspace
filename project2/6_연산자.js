// 대입연산자
let x = 1; // x에 1을 저장

// 비교연산자
console.log(1 == 2); // 값이 같으면 참
console.log(1 != 2); // 값이 다르면 참
console.log(1 > 2);
console.log(1 >= 2);
console.log(1 < 2);
console.log(1 <= 2);
console.log('-----');
console.log(1 == "1"); // 값만 비교
console.log(1 === "1"); // 값과 자료형까지 같이 비교(number === "string")

// 산술연산자
console.log('-----산술연산자-----');
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(10 % 2);

// 문자열결합연산자
console.log("좋은 " + "하루 되세요!");

// 부호 연산자
// 양수 -> 음수 / 음수 -> 양수
// 원본 데이터에 영향X
console.log(-x);
console.log(x);

// 증감연산자
console.log('-----');
console.log(++x); // x를 1로 초기화 했으니 1을 먼저 더해주어 2
console.log(x++); // 2 다음라인에서 3
console.log(--x); // 3 인상태에서 1먼저 감소시켜서 2
console.log(x--); // 2에서 -1을 하는데 다음라인에서 감소됨

// 논리연산자
// &&: 논리곱. 두항이 모두 참이면 참
// ||: 논리합. 두항 중 하나라도 참이면 참
// !: 부정. 값을 반대로 변경
console.log('-----');
console.log(true && true); // and연산자이기에 true와 true가 같으면 true
console.log(true && false); // and연산자라 true와 false가 같지 않으니 false
console.log(true || true); // or연산자이기에 둘중 하나가 true이기에 true
console.log(true || false); // or연산자이기에 true이기에 true
console.log(!true); // false

console.log('-----');
// 삼항 연산자
let point = 85;
// 점수가 90점이상이면 pass 아니면 fail
let grade = (point >= 90) ? "pass" : "fail";
console.log(grade);

// typeof 연산자: 값의 타입을 확인하는 연산자
console.log(typeof "42"); // 'string'
console.log(typeof 42); // 'number'
console.log(typeof 1.123); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof function() {}); // 'function'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
