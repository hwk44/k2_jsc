const buttonAdd = () => {
    console.log('버튼 생성')
    const btn1 = document.createElement("button");
    btn1.innerHTML = "주사위 굴리기";
    btn1.id="btn1";
    btn1.className="btc"

    document.getElementById("START").append(btn1);
}

const buttonUpdate = () => {
    const btc = document.querySelector("#div0");
    const btn1 = document.querySelector("#btn1");

    btn1.addEventListener("click", () => {
            btc.innerHTML=`<img src= "image/6.png">`
        });
   
}

const showDice = () =>{
    console.log("주사위선택")
    const n = Math.floor((Math.random()*6))+1
    const s1 = document.querySelector("#s1")

    s1.innerHTML = `<img src="./image/${n}.png">`
    // console.log(n)
}

const radioAdd = () =>{
    console.log("radio 생성");

    const rd = document.createElement("radio");
}
document.addEventListener("DOMContentLoaded",() =>{
    // buttonAdd();
    buttonUpdate();
});


const selcect = () => {
    
}
