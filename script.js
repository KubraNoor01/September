// let h2=document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText + " . May Allah bless Yuh";

// let div=document.querySelectorAll(".box");
// console.dir(div);
// let index=0;
// for(val of div){
//     val.innerText="new val : " + index;
//     index++;
// }
// let body=document.querySelector("body");
// let newbtn=document.createElement("button");
// newbtn.innerText="submit";
// newbtn.style.backgroundColor="red";
// body.prepend(newbtn);
// let p=document.querySelector(".paragraph");
// p.classList.add("myclass");

let body=document.querySelector("body")
let buton=document.querySelector(".btn");
let currentmode=body.style.backgroundColor="White";
buton.addEventListener("click", ()=>{
    body.style.backgroundColor="black";
    currentmode=currentmode;
})

