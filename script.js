//const field = document.querySelectorAll('.container div');
//console.log(field);

//マス内の要素を指定
//1つずつ指定する方法 コードが長くなってしまう
const Item1 = document.querySelector('.item-1')
const Item2 = document.querySelector('.item-2')
const Item3 = document.querySelector('.item-3')
const Item4 = document.querySelector('.item-4')
const Item5 = document.querySelector('.item-5')
const Item6 = document.querySelector('.item-6')
const Item7 = document.querySelector('.item-7')
const Item8 = document.querySelector('.item-8')
const Item9 = document.querySelector('.item-9')


//カウンタ変数 (カウントを行う用の変数)
let count = 0;


//クリックされたときに Item内に '〇' を表示させる
Item1.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item1.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item1.textContent = '×'
    }
})

Item2.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item2.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item2.textContent = '×'
    }
})

Item3.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item3.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item3.textContent = '×'
    }
})

Item4.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item4.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item4.textContent = '×'
    }
})

Item5.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item5.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item5.textContent = '×'
    }
})

Item6.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item6.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item6.textContent = '×'
    }
})

Item7.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item7.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item7.textContent = '×'
    }
})

Item8.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item8.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item8.textContent = '×'
    }
})

Item9.addEventListener('click', () => {
    //カウンタによって クリックされた回数 を数える
    count++;
    console.log(count);

    //奇数の回数のクリックなら 〇
    if (count % 2 === 1) {
        Item9.textContent = '〇'
    }

    //そうでない場合 (偶数回) なら ×
    else {
        Item9.textContent = '×'
    }
})
