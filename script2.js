//マス目 全体を指定 (container の中の全ての divタグ)
const masu = document.querySelectorAll('.container div')

console.log(masu)

// カウンタ変数
let count = 0;


//for文 + 配列を使って短く書く
for (let i = 0; i < 9; i++) {
    masu[i].addEventListener('click', () => {

        //カウントの回数を増やす
        count++;
        console.log(count)

        //奇数なら〇
        if (count % 2 === 1) {
            masu[i].textContent = '〇'
            masu[i].classList.add = ('maru')
        }

        //偶数なら×
        else {
            masu[i].textContent = '×'
            masu[i].classList.add = ('batu')
        }

        //勝敗判定
        // && ～ 且つ ～
        
        // if (masu[0].textContent === '〇' &&
        //     masu[1].textContent === '〇' &&
        //     masu[2].textContent === '〇'
        // ) {
        //     console.log(masu[0].textContent)
        //     console.log('〇の勝ち')
        // }

        
        //judgeの引数
        if (judge(0,1,2)) {
            console.log('〇の勝ち')
        }
        else if(judge(3,4,5)) {
            console.log('〇の勝ち')
        }
        else if(judge(6,7,8)){
            console.log('〇の勝ち')
        }
        
        else if(judge(0,3,6)){
            console.log('〇の勝ち')
        }
        else if(judge(1,4,7)){
            console.log('〇の勝ち')
        }
        else if(judge(2,5,8)){
            console.log('〇の勝ち')
        }

        else if(judge(0,4,8)){
            console.log('〇の勝ち')
        }
        else if(judge(2,4,6)){
            console.log('〇の勝ち')
        }


    })
}


const judge = (a,b,c) => {
    return masu[a].textContent === '〇' &&
           masu[b].textContent === '〇' &&
           masu[c].textContent === '〇'
}

//勝ちパターン 8通り
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],

//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
    
//     [0, 4, 8],
//     [2, 4, 6]
