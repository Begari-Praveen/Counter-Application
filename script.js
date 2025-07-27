let count=0;
    function increment(){
    let x1=document.querySelector(".num");
    x1.innerHTML=++count;
}
    function decrement(){
    let x2=document.querySelector(".num");
    x2.innerHTML=--count;
}
   function reset(){
   let x3=document.querySelector(".num");
   x3.innerHTML ="0";
}