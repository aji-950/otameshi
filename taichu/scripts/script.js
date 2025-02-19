'use strict'

// 以下のコードをコピペするか
// まだスクリプトファイルがない場合はこのまま使ってください
// （モーダルウィンドウは下に書けばOKです）


// ////////////////////////ハンバーガーメニュー/////////////////////////////

// 変数の宣言
const hanNavOpen = document.querySelector('.hanNavOpen');
const hanNav = document.querySelector('.hanNav');
const batu = document.querySelector('.batu');

// 三のボタンをクリックしたときに動かす関数
hanNavOpen.addEventListener('click', function() { // 指定した要素がクリックされた時に
    hanNav.classList.toggle("open");              // 指定した要素にopenクラスを追加(付け外し)
    hanNavOpen.classList.toggle("openDel");       // 三の画像を一時的に消去
    console.log('ok')
});

// 閉じるボタンが押された時に動かす関数
    batu.addEventListener('click', function() { // 指定した要素がクリックされた時に
    hanNav.classList.toggle("open");            // 指定した要素のopenクラスを削除(付け外し)
    hanNavOpen.classList.toggle("openDel");     // 三の画像を表示
    console.log('ok')
});


// /////////////////////////ローディング画面///////////////////////////////

const loadLogo = document.getElementById("loading");

window.onclick = function () {                           //ウィンドウのどこかがクリックされた時に
    loadLogo.classList.add("loaded");                    //ロード画面を透明にし非表示にする
  };

// /////////////////////////////ここまで//////////////////////////////

// モーダル
// 変数の宣言
const open = document.querySelector('.mordal01'); //クリックする場所の変数
const modal = document.querySelector('.modal'); //ウィンドウ背景の変数
const modalWin = document.querySelector('.modalWin'); //ウィンドウ本体の変数
const modalClose = document.querySelector('.closePhoto'); //ウィンドウを閉じるときの設定
const body = document.querySelector('.bodySec') //ボディにoverflow:hidden;を設定するための設定

open.addEventListener('click', function() {
    modal.style.display = 'block';
    modalWin.style.display = 'block';
    body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    modalWin.style.display = 'none';
    body.style.overflow = 'auto';
});
