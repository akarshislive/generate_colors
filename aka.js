const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let x;
const startchangingcolor=function(){
     x=setInterval(change,1000)
   function change(){
    document.body.style.backgroundColor=randomcolor();
   }
};
const stopchangingcolor=function(){
clearInterval(x);
x=null;
};
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);
