// DOM 요소 생성 함수
/*
function domAdd() {
    console.log('domAdd');
}
원래 이렇게 썼지만 요즘은 아래처럼 사용. 이름이 없는 function
*/

const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id="bt1";
    btn1.className="btc";

    document.getElementById("content").append(btn1);


    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id="bt2";
    btn2.className="btc";

    document.getElementById("content").append(btn2);


    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id="bt3";
    btn3.className="btc";

    document.getElementById("content").append(btn3);

}

// 
const domRead = () => {
    const btc = document.querySelectorAll(".btc"); 
    console.log(btc);

    // for 순회
    console.log("**for**")
    for(let i = 0; i < btc.length; i++) {
        console.log(btc[i]);
    }

    // for ... in 순회 / 중간에 브레이크 불가능
    console.log("**for in**")
    for (let k in btc){
        console.log(btc[k],k);
        // if(k ==1 ) break;
    }
    
    // foreach 순회
    console.log("**for each**")
    btc.forEach((item,k)=> console.log(item))

    // for of 순회 / 중간에 브레이크 가능
    console.log("**for of**")
    for (let [k, item] of btc.entries()){  // entries는 키와 밸류가 저장됨 파이썬이랑 비슷함
        console.log(item, k);
        // if(k ==1 ) break;
    }
}

// click 함수
const clickBtn =(a, b) => {
    b.addEventListener("click", ()=> {
        a.innerHTML = `<h1>${b.innerHTML}</h1>`;
        console.log(b.innerHTML);
    })
}

// const clickBtn2 = (div0,bt0) => {
//     for(let i = 0; i <3; i++)
//     bt0.addEventListener("click", )
// }

// DOM 요소 수정 함수
const domUpdate = () => {
    const div1 = document.querySelector("#div1");
    // div1.innerHTML = "요소를 수정하고 있습니다.";
    
    // document.querySelector("#bt1").addEventListener("click", () => {console.log("click button1")}); 

    
    // const bt1 = document.querySelector("#bt1");
    // const bt2 = document.querySelector("#bt2");
    // const bt3 = document.querySelector("#bt3");
    
    // clickBtn(div1,bt1);
    // clickBtn(div1,bt2);
    // clickBtn(div1,bt3);

    // addEventListener("click", () => {
    //     div1.innerHTML = `<h1>${bt1.innerHTML}</h1>`;
    //     console.log(bt1.innerHTML);
    // });

    const btc = document.querySelectorAll(".btc");
    console.log(btc);
    for(let bt of btc) {
        bt.addEventListener("click", ()=> {
            div1.innerHTML= `<h1>${bt.innerHTML}</h1>`
        });
    }

}

// 자바스크립트 렌더링 제어. 메인 메서드 같은 느낌
document.addEventListener("DOMContentLoaded", () => {
    // DOM 요소 생성
    domAdd();

    // DOM 요소 접근
    domRead();

    // DOM 요소 변경
    domUpdate();
});
   
