const today = new Date();
const fullYear = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

//指定しているgetMonthは月を０から数え始めている為。
// 例１月は０，２月は１、３月は２、・・・１２月は１１と表現されています。
console.log(fullYear + '年' + (month + 1) +'月' + day + '日');
