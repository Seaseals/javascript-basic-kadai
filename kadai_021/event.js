// 非同期処理を使用して、2秒後に文章を書き換えよう
// add-btnというidを持つHTML要素を取得し、定数に代入する
 const btn = document.getElementById('btn');
 // parent-listというidを持つHTML要素を取得し、定数に代入する
 const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
 btn.addEventListener('click', () => {
  
    // text要素の文章を書きかえるので、li要素を新しく作成する必要はない。

    // li要素を新しく作成する
  //  createElement()…HTML要素を新しく作成する
  // const text = document.createElement('li');
 
// textContent…HTML要素内のテキスト

// setTimeout関数　2秒後表示するように設定する非同期処理
setTimeout(() => {  
// text要素に「ボタンをクリックしました」というテキストを追加する
  text.textContent = 'ボタンをクリックしました';
  // text要素の中身を表示する
  console.log(text);
},2000);

 });