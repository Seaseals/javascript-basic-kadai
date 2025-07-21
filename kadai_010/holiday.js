const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]


// for文の場合
//配列を2回繰り返す
// for (let i= 0; i < 2; i++ ) {
// console.log(holidays);
// }


for (let i= 0; i < 16; i++ ) {
console.log(holidays[i]);
}

let count=0
while(count <= 15){
  console.log(holidays[count]);
  count ++;
}
// while文の場合
// counst　countはダメ！再代入できないため。
// 配列を２回繰り返す
// let  count = 0;
// while (count < 2) {
// console.log(holidays);
// count ++;
// }