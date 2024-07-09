//マス目 全体を指定
const masu = document.querySelectorAll('.container div')

console.log(masu)

// カウンタ変数
let count = 0;


//for文 + 配列を使って短く書く
for (let i=0; i<9;i++){
    masu[i].addEventListener('click', ()=>{
        //カウントの回数を増やす
        count ++;
    
        console.log(count)
    
        //奇数なら〇
        if(count%2 ===1){
            masu[i].textContent = '〇'
        }
        
        //偶数なら×
        else{
            masu[i].textContent = '×'
        }
    })
}

